// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeStack = Sarif.Stack | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Stack}.
       * @example
       * expect(value).toMatchSarifStack();
       */
      toMatchSarifStack(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Stack}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifStack()
       * );
       */
      toMatchSarifStack<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifStack = buildMatcher<MaybeStack>({
  matcherName: 'toMatchSarifStack',
  definitionName: 'stack',
});

expect.extend({ toMatchSarifStack });
