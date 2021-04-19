// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeReplacement = Sarif.Replacement | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Replacement}.
       * @example
       * expect(value).toMatchSarifReplacement();
       */
      toMatchSarifReplacement(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Replacement}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifReplacement()
       * );
       */
      toMatchSarifReplacement<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifReplacement = buildMatcher<MaybeReplacement>({
  matcherName: 'toMatchSarifReplacement',
  definitionName: 'replacement',
});

expect.extend({ toMatchSarifReplacement });
