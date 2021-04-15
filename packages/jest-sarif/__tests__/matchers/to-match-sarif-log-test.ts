// mimics importing from '@microsoft/jest-sarif' and ensures that we're correctly
// extending Jest's expect.
import '../../src';

describe('toMatchSarifLog', () => {
  it('does not throw', () => {
    // eslint-disable-next-line unicorn/no-null
    expect(null).not.toMatchSarifLog();
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(undefined).not.toMatchSarifLog();
    expect(1).not.toMatchSarifLog();
    expect({}).not.toMatchSarifLog();
    expect({ hello: 'world' }).not.toMatchSarifLog();
    expect({ hello: 'a', world: 'b' }).not.toMatchSarifLog();
  });

  it('fails for wrong type', () => {
    const testObj = { hello: 1 };
    expect(() => expect(testObj).toMatchSarifLog()).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for missing required keys', () => {
    expect(() => expect({}).toMatchSarifLog()).toThrow("should have required property 'version'");
  });

  it('fails when additional properties are found but forbidden', () => {
    const testObj = {
      hello: 'world',
      another: 'property',
    };
    expect(() => expect(testObj).toMatchSarifLog()).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for matching schema when using .not', () => {
    const sarifLog = require('../__fixtures__/sarif-log.json');

    expect(() => expect(sarifLog).not.toMatchSarifLog()).toThrow(
      'Expected value not to match schema'
    );
  });

  it('assertion error matcherResult property contains matcher name and actual value', () => {
    const testObj = { another: 'property' };
    try {
      expect(testObj).toMatchSarifLog();
    } catch (error) {
      // eslint-disable-next-line jest/no-try-expect, jest/no-conditional-expect
      expect(error.matcherResult).toEqual({
        actual: testObj,
        message: expect.any(Function),
        name: 'toMatchSarifLog',
        pass: false,
      });
    }
  });
});
