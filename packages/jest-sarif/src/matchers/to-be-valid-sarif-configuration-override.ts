// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeConfigurationOverride = Sarif.ConfigurationOverride | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is a valid SARIF @type {Sarif.ConfigurationOverride}.
       * @example
       * expect(value).toBeValidSarifConfigurationOverride();
       */
      toBeValidSarifConfigurationOverride(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is a valid SARIF @type {Sarif.ConfigurationOverride}.
       * @example
       * expect(value).toEqual(
       *   expect.toBeValidSarifConfigurationOverride()
       * );
       */
      toBeValidSarifConfigurationOverride<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toBeValidSarifConfigurationOverride = buildMatcher<MaybeConfigurationOverride>({
  matcherName: 'toBeValidSarifConfigurationOverride',
  definition: 'configurationOverride',
});

expect.extend({ toBeValidSarifConfigurationOverride });
