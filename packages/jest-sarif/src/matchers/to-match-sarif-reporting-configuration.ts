// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeReportingConfiguration = Sarif.ReportingConfiguration | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ReportingConfiguration}.
       * @example
       * expect(value).toMatchSarifReportingConfiguration();
       */
      toMatchSarifReportingConfiguration(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ReportingConfiguration}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifReportingConfiguration()
       * );
       */
      toMatchSarifReportingConfiguration<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifReportingConfiguration = buildMatcher<MaybeReportingConfiguration>({
  matcherName: 'toMatchSarifReportingConfiguration',
  definition: 'reportingConfiguration',
});

expect.extend({ toMatchSarifReportingConfiguration });
