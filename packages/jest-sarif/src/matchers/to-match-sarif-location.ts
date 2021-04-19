// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeLocation = Sarif.Location | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Location}.
       * @example
       * expect(value).toMatchSarifLocation();
       */
      toMatchSarifLocation(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Location}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifLocation()
       * );
       */
      toMatchSarifLocation<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifLocation = buildMatcher<MaybeLocation>({
  matcherName: 'toMatchSarifLocation',
  definitionName: 'location',
});

expect.extend({ toMatchSarifLocation });
