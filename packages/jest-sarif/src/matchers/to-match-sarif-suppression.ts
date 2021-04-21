// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeSuppression = Sarif.Suppression | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Suppression}.
       * @example
       * expect(value).toMatchSarifSuppression();
       */
      toMatchSarifSuppression(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Suppression}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifSuppression()
       * );
       */
      toMatchSarifSuppression<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifSuppression = buildMatcher<MaybeSuppression>({
  matcherName: 'toMatchSarifSuppression',
  definition: 'suppression',
});

expect.extend({ toMatchSarifSuppression });
