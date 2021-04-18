// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { ArtifactContent } from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeArtifactContent = ArtifactContent | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is an valid SARIF artifactContent.
       * @example
       * expect(value).toMatchSarifArtifactContent();
       */
      toMatchSarifArtifactContent(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is an valid SARIF artifactContent.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifArtifactContent()
       * );
       */
      toMatchSarifArtifactContent<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifArtifactContent = buildMatcher<MaybeArtifactContent>({
  matcherName: 'toMatchSarifArtifactContent',
  definitionName: 'artifactContent',
});

expect.extend({ toMatchSarifArtifactContent });
