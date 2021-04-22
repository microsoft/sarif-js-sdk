import { Definition, SchemaOptions } from './types';

export function getSchema(options: SchemaOptions) {
  if (options.definition) {
    return getFragmentSchema(options.definition);
  }

  return require('./schemas/sarif-2.1.0-rtm.5.json');
}

export function getFragmentSchema(definition: Definition) {
  return JSON.parse(`{
      "$schema": "http://json-schema.org/draft-04/schema#",
      "title": "Static Analysis Results Format (SARIF) Version 2.1.0-rtm.5 ${definition} fragment",
      "id": "https://sarif/${definition}-fragment.json",
      "description": "A dynamic fragment of a SARIF schema.",
      "allOf": [
        {
          "$ref": "https://raw.githubusercontent.com/schemastore/schemastore/master/src/schemas/json/sarif-2.1.0-rtm.5.json#/definitions/${definition}"
        }
      ]
    }`);
}
