// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeReportingDescriptorRelationship = Sarif.ReportingDescriptorRelationship | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ReportingDescriptorRelationship}.
       * @example
       * expect(value).toMatchSarifReportingDescriptorRelationship();
       */
      toMatchSarifReportingDescriptorRelationship(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ReportingDescriptorRelationship}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifReportingDescriptorRelationship()
       * );
       */
      toMatchSarifReportingDescriptorRelationship<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifReportingDescriptorRelationship = buildMatcher<MaybeReportingDescriptorRelationship>(
  {
    matcherName: 'toMatchSarifReportingDescriptorRelationship',
    definitionName: 'reportingDescriptorRelationship',
  }
);

expect.extend({ toMatchSarifReportingDescriptorRelationship });
