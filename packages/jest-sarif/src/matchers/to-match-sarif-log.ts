import { Log } from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeSarifLog = Log | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is an valid SARIF log.
       * @example
       * expect(value).toMatchSarifLog();
       */
      toMatchSarifLog(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is an `Array` containing only `Boolean` values.
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
