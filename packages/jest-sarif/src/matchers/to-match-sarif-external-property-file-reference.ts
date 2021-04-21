// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeExternalPropertyFileReference = Sarif.ExternalPropertyFileReference | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ExternalPropertyFileReference}.
       * @example
       * expect(value).toMatchSarifExternalPropertyFileReference();
       */
      toMatchSarifExternalPropertyFileReference(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ExternalPropertyFileReference}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifExternalPropertyFileReference()
       * );
       */
      toMatchSarifExternalPropertyFileReference<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifExternalPropertyFileReference = buildMatcher<MaybeExternalPropertyFileReference>(
  {
    matcherName: 'toMatchSarifExternalPropertyFileReference',
    definition: 'externalPropertyFileReference',
  }
);

expect.extend({ toMatchSarifExternalPropertyFileReference });
