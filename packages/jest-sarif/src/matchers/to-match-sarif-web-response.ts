// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { WebResponse } from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeWebResponse = WebResponse | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is an valid SARIF webResponse.
       * @example
       * expect(value).toMatchSarifWebResponse();
       */
      toMatchSarifWebResponse(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is an valid SARIF webResponse.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifWebResponse()
       * );
       */
      toMatchSarifWebResponse<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifWebResponse = buildMatcher<MaybeWebResponse>({
  matcherName: 'toMatchSarifWebResponse',
  definitionName: 'webResponse',
});

expect.extend({ toMatchSarifWebResponse });
