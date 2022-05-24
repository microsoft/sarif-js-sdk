import { EOL } from 'os';
import Ajv, { AdditionalPropertiesParams, IfParams } from 'ajv';
import { matcherHint } from 'jest-matcher-utils';
import chalk from 'chalk';
import { Definition } from './types';

type CustomMatcherLike<T> = (
  received: T,
  definition?: Definition | undefined
) => { actual: T; message: () => string; name: string; pass: boolean };

// Keywords where the `Expected: ...` output is hidden
const ERROR_KEYWORDS_HIDE_EXPECTED = new Set([
  'type',
  // String
  'pattern',
  'format',
  'minLength',
  'maxLength',
  // Number
  'minimum',
  'maximum',
  'exclusiveMinimum',
  'exclusiveMaximum',
  'multipleOf',
  // Object
  'minProperties',
  'maxProperties',
  'required',
  // Array
  'minItems',
  'maxItems',
]);

const ERROR_KEYWORDS_SHOW_RECEIVED = new Set(['if', 'not']);

const isObject = (value: unknown) => value !== null && typeof value === 'object';

const sarifV2Schema = require('./schemas/sarif-2.1.0-rtm.5.json');

let ajv: Ajv.Ajv;

const formatForPrint = (input: unknown, displayType: boolean = true) => {
  if (input === undefined || input === null) {
    return chalk.yellow(`<${input}>`);
  }

  if (input === '') {
    return chalk.yellow('<empty string>');
  }

  if (Array.isArray(input) || isObject(input)) {
    return (
      (displayType ? chalk.yellow(Array.isArray(input) ? '<array> ' : '<object> ') : '') +
      JSON.stringify(input)
    );
  }

  return `${chalk.yellow(`<${typeof input}>`)} ${input}`;
};

function buildValidator(): Ajv.Ajv {
  if (!ajv) {
    const draft4MetaSchema = require('ajv/lib/refs/json-schema-draft-04.json');

    ajv = new Ajv({
      schemaId: 'auto',
      validateSchema: false,
    });

    ajv.addMetaSchema(draft4MetaSchema);
    ajv.addSchema(sarifV2Schema);
  }

  return ajv;
}

/**
 * Builds a Jest matcher based on the supplied @type {BuildMatcherOptions}.
 *
 * @param options
 * @param options.matcherName The name of the matcher.
 * @param options.schemaName [Optional] The name of the schema to load.
 * @param options.definition [Optional] The name of the SARIF schema definition fragment to dynamically build a schema for.
 * @returns {CustomMatcherLike<T>}
 */
export function buildMatcher<T>(): CustomMatcherLike<T> {
  const ajv = buildValidator();
  // eslint-disable-next-line no-underscore-dangle
  const { verbose } = ajv._opts;

  return function (received: T, definition?: Definition) {
    let matcherName: string;
    let keyRef: string;

    if (definition) {
      keyRef = `${sarifV2Schema.id}#/definitions/${definition}`;
      matcherName = `toBeValidSarifFor('${definition}')`;
    } else {
      keyRef = sarifV2Schema.id;
      matcherName = 'toBeValidSarifLog';
    }

    const validate = ajv.getSchema(keyRef);

    if (!validate) {
      throw new Error(
        `Could not find a definition for ${definition}. Please ensure you provide a valid definition.`
      );
    }

    const pass = validate(received) as boolean;

    const message = pass
      ? () => {
          let messageToPrint = `${matcherHint(
            `.not.${matcherName}`,
            undefined,
            'schema'
          )}${EOL}${EOL}Expected value not to match schema${EOL}${EOL}`;

          if (verbose) {
            messageToPrint += chalk.red(`received${EOL}${formatForPrint(received)}${EOL}`);
          }

          return messageToPrint;
        }
      : () => {
          let messageToPrint = `${'received'}${EOL}`;

          for (const error of validate.errors!) {
            let line = error.message;

            if (error.keyword === 'additionalProperties') {
              line = `${error.message}, but found '${
                (error.params as AdditionalPropertiesParams).additionalProperty
              }'`;
            } else if ((error as any).dataPath) {
              line = `${(error as any).dataPath} ${error.message}`;
            }

            if (verbose && error.schemaPath) {
              if (!ERROR_KEYWORDS_HIDE_EXPECTED.has(error.keyword)) {
                switch (error.keyword) {
                  case 'if':
                    line += `${EOL}    Expected: ${formatForPrint(
                      (error.parentSchema as Record<string, any>)[
                        (error.params as IfParams).failingKeyword
                      ],
                      false
                    )}`;
                    break;

                  default:
                    line += `${EOL}    Expected: ${formatForPrint(error.schema, false)}`;
                    break;
                }
              }

              if ((error as any).dataPath) {
                line += `${EOL}    Received: ${formatForPrint(error.data)}`;
              } else if (ERROR_KEYWORDS_SHOW_RECEIVED.has(error.keyword)) {
                line += `${EOL}    Received: ${formatForPrint(error.data, false)}`;
              }

              line += `${EOL}    Path:     ${(validate.schema as any).$id || ''}${
                error.schemaPath
              }`;
            }

            messageToPrint += chalk.red(`  ${line}${EOL}`);
          }

          return `${matcherHint(
            `.${matcherName}`,
            undefined,
            'schema'
          )}${EOL}${EOL}${messageToPrint}`;
        };

    return {
      actual: received,
      message,
      name: matcherName,
      pass,
    };
  };
}
