// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybePropertyBag = Sarif.PropertyBag | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.PropertyBag}.
       * @example
       * expect(value).toMatchSarifPropertyBag();
       */
      toMatchSarifPropertyBag(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.PropertyBag}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifPropertyBag()
       * );
       */
      toMatchSarifPropertyBag<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifPropertyBag = buildMatcher<MaybePropertyBag>({
  matcherName: 'toMatchSarifPropertyBag',
  definitionName: 'propertyBag',
});

expect.extend({ toMatchSarifPropertyBag });
