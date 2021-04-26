import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeSarifLog = Sarif.Log | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Log}.
       * @example
       * expect(value).toBeValidSarifLog();
       */
      toBeValidSarifLog(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Log}.
       * @example
       * expect(value).toEqual(
       *   expect.toBeValidSarifLog()
       * );
       */
      toBeValidSarifLog<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toBeValidSarifLog = buildMatcher<MaybeSarifLog>();

expect.extend({ toBeValidSarifLog });
