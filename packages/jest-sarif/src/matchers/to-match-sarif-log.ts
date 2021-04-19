import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeSarifLog = Sarif.Log | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Log}.
       * @example
       * expect(value).toMatchSarifLog();
       */
      toMatchSarifLog(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Log}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifLog()
       * );
       */
      toMatchSarifLog<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifLog = buildMatcher<MaybeSarifLog>({
  matcherName: 'toMatchSarifLog',
  schemaName: 'sarif',
});

expect.extend({ toMatchSarifLog });
