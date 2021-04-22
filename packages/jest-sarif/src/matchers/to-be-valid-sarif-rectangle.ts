// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeRectangle = Sarif.Rectangle | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is a valid SARIF @type {Sarif.Rectangle}.
       * @example
       * expect(value).toBeValidSarifRectangle();
       */
      toBeValidSarifRectangle(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is a valid SARIF @type {Sarif.Rectangle}.
       * @example
       * expect(value).toEqual(
       *   expect.toBeValidSarifRectangle()
       * );
       */
      toBeValidSarifRectangle<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toBeValidSarifRectangle = buildMatcher<MaybeRectangle>({
  matcherName: 'toBeValidSarifRectangle',
  definition: 'rectangle',
});

expect.extend({ toBeValidSarifRectangle });
