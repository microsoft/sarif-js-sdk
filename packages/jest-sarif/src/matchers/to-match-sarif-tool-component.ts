// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { ToolComponent } from 'sarif';
import { buildMatcher } from '../build-matcher';

type MaybeToolComponent = ToolComponent | unknown;

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that actual value is an valid SARIF toolComponent.
       * @example
       * expect(value).toMatchSarifToolComponent();
       */
      toMatchSarifToolComponent(): R;
    }
    interface Expect {
      /**
       * Asserts that actual value is an valid SARIF toolComponent.
       * @example
       * expect(value).toEqual(
       *   expect.toMatchSarifToolComponent()
       * );
       */
      toMatchSarifToolComponent<T>(): jest.JestMatchers<T>;
    }
  }
}

export const toMatchSarifToolComponent = buildMatcher<MaybeToolComponent>({
  matcherName: 'toMatchSarifToolComponent',
  definitionName: 'toolComponent',
});

expect.extend({ toMatchSarifToolComponent });
