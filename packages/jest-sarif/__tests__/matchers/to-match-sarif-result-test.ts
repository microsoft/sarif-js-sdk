import '../../src';

describe('toMatchSarifResult', () => {
  it('does not throw', () => {
    // eslint-disable-next-line unicorn/no-null
    expect(null).not.toMatchSarifResult();
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(undefined).not.toMatchSarifResult();
    expect(1).not.toMatchSarifResult();
    expect({}).not.toMatchSarifResult();
    expect({ hello: 'world' }).not.toMatchSarifResult();
    expect({ hello: 'a', world: 'b' }).not.toMatchSarifResult();
  });

  it('fails for wrong type', () => {
    const testObj = { hello: 1 };
    expect(() => expect(testObj).toMatchSarifResult()).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for missing required keys', () => {
    expect(() => expect({}).toMatchSarifResult()).toThrow(
      "should have required property 'message'"
    );
  });

  it('fails when additional properties are found but forbidden', () => {
    const testObj = {
      hello: 'world',
      another: 'property',
    };
    expect(() => expect(testObj).toMatchSarifResult()).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for matching schema when using .not', () => {
    const sarifResult = require('../__fixtures__/sarif-result.json');

    expect(() => expect(sarifResult).not.toMatchSarifResult()).toThrow(
      'Expected value not to match schema'
    );
  });

  it('assertion error matcherResult property contains matcher name and actual value', () => {
    const testObj = { another: 'property' };
    try {
      expect(testObj).toMatchSarifResult();
    } catch (error) {
      // eslint-disable-next-line jest/no-try-expect, jest/no-conditional-expect
      expect(error.matcherResult).toEqual({
        actual: testObj,
        message: expect.any(Function),
        name: 'toMatchSarifResult',
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
      expect(value).toMatchSarifResult();
    });
  });
});
