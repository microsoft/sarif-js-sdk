import { Definition } from './definition';

export * from './definition';

export interface SchemaOptions {
  schemaName?: string;
  definition?: Definition;
}

/**
 * Matcher options provided to the buildMatcher function in order to build a dynamic Jest matcher.
 */
export interface BuildMatcherOptions extends SchemaOptions {
  matcherName: string;
}
