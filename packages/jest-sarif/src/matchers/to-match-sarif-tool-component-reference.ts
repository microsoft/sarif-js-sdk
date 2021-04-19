// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeToolComponentReference = Sarif.ToolComponentReference | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ToolComponentReference}.
       * @example
       * expect(value).toMatchSarifToolComponentReference();
       */
      toMatchSarifToolComponentReference(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.ToolComponentReference}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifToolComponentReference()
       * );
       */
      toMatchSarifToolComponentReference<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifToolComponentReference = buildMatcher<MaybeToolComponentReference>({
  matcherName: 'toMatchSarifToolComponentReference',
  definitionName: 'toolComponentReference',
});

expect.extend({ toMatchSarifToolComponentReference });
