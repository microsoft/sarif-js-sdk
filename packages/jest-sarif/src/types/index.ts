import { Definitions } from './definitions';

export * from './definitions';

export interface SchemaOptions {
  schemaName?: string;
  definitionName?: Definitions;
}

/**
 * Matcher options provided to the buildMatcher function in order to build a dynamic Jest matcher.
 */
export interface BuildMatcherOptions extends SchemaOptions {
  matcherName: string;
}
