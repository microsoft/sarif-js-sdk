// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeTool = Sarif.Tool | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Tool}.
       * @example
       * expect(value).toMatchSarifTool();
       */
      toMatchSarifTool(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value matches a valid SARIF @type {Sarif.Tool}.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifTool()
       * );
       */
      toMatchSarifTool<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifTool = buildMatcher<MaybeTool>({
  matcherName: 'toMatchSarifTool',
  definitionName: 'tool',
});

expect.extend({ toMatchSarifTool });
