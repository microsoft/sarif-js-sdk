import { buildMatcher } from '../build-matcher';
import { Definition } from '../types';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Log}.
       * @example
       * expect(value).toBeValidSarifLog();
       */
      toBeValidSarifFor(definition: Definition): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Log}.
       * @example
       * expect(value).toEqual(
       *   expect.toBeValidSarifLog()
       * );
       */
      toBeValidSarifFor<T>(definition: Definition): jest.JestMatchers<T>;
    }
  }
}

export const toBeValidSarifFor = buildMatcher();

expect.extend({ toBeValidSarifFor });
