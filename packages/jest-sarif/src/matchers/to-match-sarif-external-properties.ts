// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeExternalProperties = Sarif.ExternalProperties | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ExternalProperties}.
       * @example
       * expect(value).toMatchSarifExternalProperties();
       */
      toMatchSarifExternalProperties(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ExternalProperties}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifExternalProperties()
       * );
       */
      toMatchSarifExternalProperties<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifExternalProperties = buildMatcher<MaybeExternalProperties>({
  matcherName: 'toMatchSarifExternalProperties',
  definitionName: 'externalProperties',
});

expect.extend({ toMatchSarifExternalProperties });
