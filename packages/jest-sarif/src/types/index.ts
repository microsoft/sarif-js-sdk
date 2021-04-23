import { Definition } from './definition';

export * from './definition';

/**
 * Matcher options provided to the buildMatcher function in order to build a dynamic Jest matcher.
 */
export interface BuildMatcherOptions {
  matcherName: string;
  definition?: Definition;
}
