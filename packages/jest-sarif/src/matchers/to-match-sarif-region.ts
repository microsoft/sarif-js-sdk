// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeRegion = Sarif.Region | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Region}.
       * @example
       * expect(value).toMatchSarifRegion();
       */
      toMatchSarifRegion(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Region}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifRegion()
       * );
       */
      toMatchSarifRegion<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifRegion = buildMatcher<MaybeRegion>({
  matcherName: 'toMatchSarifRegion',
  definition: 'region',
});

expect.extend({ toMatchSarifRegion });
