// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeGraph = Sarif.Graph | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is a valid SARIF @type {Sarif.Graph}.
       * @example
       * expect(value).toBeValidSarifGraph();
       */
      toBeValidSarifGraph(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is a valid SARIF @type {Sarif.Graph}.
       * @example
       * expect(value).toEqual(
       *   expect.toBeValidSarifGraph()
       * );
       */
      toBeValidSarifGraph<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toBeValidSarifGraph = buildMatcher<MaybeGraph>({
  matcherName: 'toBeValidSarifGraph',
  definition: 'graph',
});

expect.extend({ toBeValidSarifGraph });
