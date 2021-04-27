import { buildMatcher } from '../build-matcher';
import { Definition } from '../types';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Definition}.
       * @example
       * expect(value).toBeValidSarifFor();
       */
      toBeValidSarifFor(definition: Definition): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Definition}.
       * @example
       * expect(value).toEqual(
       *   expect.toBeValidSarifFor()
       * );
       */
      toBeValidSarifFor<T>(definition: Definition): jest.JestMatchers<T>;
    }
  }
}

export const toBeValidSarifFor = buildMatcher();

expect.extend({ toBeValidSarifFor });
