// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeInvocation = Sarif.Invocation | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Invocation}.
       * @example
       * expect(value).toMatchSarifInvocation();
       */
      toMatchSarifInvocation(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Invocation}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifInvocation()
       * );
       */
      toMatchSarifInvocation<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifInvocation = buildMatcher<MaybeInvocation>({
  matcherName: 'toMatchSarifInvocation',
  definition: 'invocation',
});

expect.extend({ toMatchSarifInvocation });
