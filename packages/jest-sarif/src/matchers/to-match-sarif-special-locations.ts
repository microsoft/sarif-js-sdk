// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeSpecialLocations = Sarif.SpecialLocations | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.SpecialLocations}.
       * @example
       * expect(value).toMatchSarifSpecialLocations();
       */
      toMatchSarifSpecialLocations(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.SpecialLocations}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifSpecialLocations()
       * );
       */
      toMatchSarifSpecialLocations<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifSpecialLocations = buildMatcher<MaybeSpecialLocations>({
  matcherName: 'toMatchSarifSpecialLocations',
  definition: 'specialLocations',
});

expect.extend({ toMatchSarifSpecialLocations });
