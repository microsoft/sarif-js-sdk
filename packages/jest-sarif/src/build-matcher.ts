import { EOL } from 'os';
import Ajv, { AdditionalPropertiesParams, IfParams } from 'ajv';
import { matcherHint } from 'jest-matcher-utils';
import chalk from 'chalk';
import { getSchema } from './sarif-schema';
import { BuildMatcherOptions } from './types';

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

function getValidatorAndSchema(options: BuildMatcherOptions): [Ajv.Ajv, object | boolean] {
  const ajv = new Ajv({
    schemaId: 'auto',
    validateSchema: false,
  });
  const schema = getSchema(options)!;
  const draft4MetaSchema = require('ajv/lib/refs/json-schema-draft-04.json');

  ajv.addMetaSchema(draft4MetaSchema);

  if (options.definition) {
    // When a definition is provided, we need to load the reference schema, which is the SARIF schema itself.
    // This allows us to reference definitions in the SARIF schema via JSON pointers.
    // eg. "$ref": "#/definition/result"
    const sarifSchema = getSchema({
      schemaName: 'sarif',
    });

    if (sarifSchema) {
      ajv.addSchema(sarifSchema);
    }
  }

  return [ajv, schema];
}

/**
 * Builds a Jest matcher based on the supplied @type {BuildMatcherOptions}.
 *
 * @param options
 * @param options.matcherName The name of the matcher.
 * @param options.schemaName [Optional] The name of the schema to load.
 * @param options.definition [Optional] The name of the SARIF schema definition fragment to dynamically build a schema for.
 * @returns {jest.CustomMatcher}
 */
export function buildMatcher<T>(options: BuildMatcherOptions): jest.CustomMatcher {
  const [ajv, schema] = getValidatorAndSchema(options);
  const validate = ajv.compile(schema);

  // eslint-disable-next-line no-underscore-dangle
  const { verbose } = ajv._opts;

  return function (received: T) {
    const pass = validate(received) as boolean;

    const message = pass
      ? () => {
          let messageToPrint = `${matcherHint(
            `.not.${options.matcherName}`,
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
            `.${options.matcherName}`,
            undefined,
            'schema'
          )}${EOL}${EOL}${messageToPrint}`;
        };

    return {
      actual: received,
      message,
      name: options.matcherName,
      pass,
    };
  };
}
