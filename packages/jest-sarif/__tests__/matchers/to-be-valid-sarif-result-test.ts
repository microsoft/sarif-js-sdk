import '../../src';

describe('toBeValidSarifResult', () => {
  it('does not throw', () => {
    // eslint-disable-next-line unicorn/no-null
    expect(null).not.toBeValidSarifResult();
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(undefined).not.toBeValidSarifResult();
    expect(1).not.toBeValidSarifResult();
    expect({}).not.toBeValidSarifResult();
    expect({ hello: 'world' }).not.toBeValidSarifResult();
    expect({ hello: 'a', world: 'b' }).not.toBeValidSarifResult();
  });

  it('fails for wrong type', () => {
    const testObj = { hello: 1 };
    expect(() => expect(testObj).toBeValidSarifResult()).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for missing required keys', () => {
    expect(() => expect({}).toBeValidSarifResult()).toThrow(
      "should have required property 'message'"
    );
  });

  it('fails when additional properties are found but forbidden', () => {
    const testObj = {
      hello: 'world',
      another: 'property',
    };
    expect(() => expect(testObj).toBeValidSarifResult()).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for matching schema when using .not', () => {
    const sarifResult = require('../__fixtures__/sarif-result.json');

    expect(() => expect(sarifResult).not.toBeValidSarifResult()).toThrow(
      'Expected value not to match schema'
    );
  });

  it('assertion error matcherResult property contains matcher name and actual value', () => {
    const testObj = { another: 'property' };
    try {
      expect(testObj).toBeValidSarifResult();
    } catch (error) {
      // eslint-disable-next-line jest/no-try-expect, jest/no-conditional-expect
      expect(error.matcherResult).toEqual({
        actual: testObj,
        message: expect.any(Function),
        name: 'toBeValidSarifResult',
        pass: false,
      });
    }
  });

  [
    {
      message: {
        text: 'Foo',
      },
    },
    {
      ruleId: 'no-unused-vars',
      level: 'error',
      message: {
        text: "'x' is assigned a value but never used.",
      },
    },
    // eslint-disable-next-line unicorn/no-array-for-each
  ].forEach((value) => {
    it('matches Result objects', () => {
      expect(value).toBeValidSarifResult();
    });
  });
});
