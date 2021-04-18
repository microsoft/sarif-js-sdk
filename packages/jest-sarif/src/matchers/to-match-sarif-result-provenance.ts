// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { ResultProvenance } from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeResultProvenance = ResultProvenance | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is an valid SARIF resultProvenance.
       * @example
       * expect(value).toMatchSarifResultProvenance();
       */
      toMatchSarifResultProvenance(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is an valid SARIF resultProvenance.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifResultProvenance()
       * );
       */
      toMatchSarifResultProvenance<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifResultProvenance = buildMatcher<MaybeResultProvenance>({
  matcherName: 'toMatchSarifResultProvenance',
  definitionName: 'resultProvenance',
});

expect.extend({ toMatchSarifResultProvenance });
