// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { SpecialLocations } from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeSpecialLocations = SpecialLocations | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is an valid SARIF specialLocations.
       * @example
       * expect(value).toMatchSarifSpecialLocations();
       */
      toMatchSarifSpecialLocations(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is an valid SARIF specialLocations.
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
  definitionName: 'specialLocations',
});

expect.extend({ toMatchSarifSpecialLocations });
