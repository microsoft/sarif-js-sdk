// mimics importing from '@microsoft/jest-sarif' and ensures that we're correctly
// extending Jest's expect.
import '../../src';

describe('toBeValidSarifLog', () => {
  it('does not throw', () => {
    // eslint-disable-next-line unicorn/no-null
    expect(null).not.toBeValidSarifLog();
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(undefined).not.toBeValidSarifLog();
    expect(1).not.toBeValidSarifLog();
    expect({}).not.toBeValidSarifLog();
    expect({ hello: 'world' }).not.toBeValidSarifLog();
    expect({ hello: 'a', world: 'b' }).not.toBeValidSarifLog();
  });

  it('fails for wrong type', () => {
    const testObj = { hello: 1 };
    expect(() => expect(testObj).toBeValidSarifLog()).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for missing required keys', () => {
    expect(() => expect({}).toBeValidSarifLog()).toThrow("should have required property 'version'");
  });

  it('fails when additional properties are found but forbidden', () => {
    const testObj = {
      hello: 'world',
      another: 'property',
    };
    expect(() => expect(testObj).toBeValidSarifLog()).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails when validating a valid SARIF log when using .not', () => {
    const sarifLog = require('../__fixtures__/sarif-log.json');

    expect(() => expect(sarifLog).not.toBeValidSarifLog()).toThrow(
      'Expected value not to match schema'
    );
  });

  it('assertion error matcherResult property contains matcher name and actual value', () => {
    const testObj = { another: 'property' };
    try {
      expect(testObj).toBeValidSarifLog();
    } catch (error: any) {
      // eslint-disable-next-line jest/no-try-expect, jest/no-conditional-expect
      expect(error.matcherResult).toEqual({
        actual: testObj,
        message: expect.any(Function),
        name: 'toBeValidSarifLog',
        pass: false,
      });
    }
  });
});
