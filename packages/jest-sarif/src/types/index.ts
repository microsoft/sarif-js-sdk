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

type MatcherName = `toMatchSarif${Capitalize<Definitions>}`;
declare global {
  namespace jest {
    interface Matchers<R, T> {
      [K in MatcherName]: () => R;
    }
    interface Expect {
      [K in MatcherName]: <T>() => jest.JestMatchers<T>;
    }
  }
}
