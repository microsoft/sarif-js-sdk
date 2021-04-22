// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Sarif from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeArtifact = Sarif.Artifact | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is a valid SARIF @type {Sarif.Artifact}.
       * @example
       * expect(value).toBeValidSarifArtifact();
       */
      toBeValidSarifArtifact(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is a valid SARIF @type {Sarif.Artifact}.
       * @example
       * expect(value).toEqual(
       *   expect.toBeValidSarifArtifact()
       * );
       */
      toBeValidSarifArtifact<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toBeValidSarifArtifact = buildMatcher<MaybeArtifact>({
  matcherName: 'toBeValidSarifArtifact',
  definition: 'artifact',
});

expect.extend({ toBeValidSarifArtifact });
