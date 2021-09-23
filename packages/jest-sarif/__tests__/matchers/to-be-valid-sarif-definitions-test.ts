import '../../src';

// Chosing an arbitrary definition to test the codepath of all definition matchers.
// Testing one should cover testing all, even though we're not specifically testing
// the actual defintions' data.
describe('toBeValidSarifResult', () => {
  const MATCHER_DATA = [
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
  ];

  it('does not throw', () => {
    // eslint-disable-next-line unicorn/no-null
    expect(null).not.toBeValidSarifFor('result');
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(undefined).not.toBeValidSarifFor('result');
    expect(1).not.toBeValidSarifFor('result');
    expect({}).not.toBeValidSarifFor('result');
    expect({ hello: 'world' }).not.toBeValidSarifFor('result');
    expect({ hello: 'a', world: 'b' }).not.toBeValidSarifFor('result');
  });

  it('fails for wrong type', () => {
    const testObj = { hello: 1 };
    expect(() => expect(testObj).toBeValidSarifFor('result')).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for missing required keys', () => {
    expect(() => expect({}).toBeValidSarifFor('result')).toThrow(
      "should have required property 'message'"
    );
  });

  it('fails when additional properties are found but forbidden', () => {
    const testObj = {
      hello: 'world',
      another: 'property',
    };
    expect(() => expect(testObj).toBeValidSarifFor('result')).toThrow(
      "should NOT have additional properties, but found 'hello'"
    );
  });

  it('fails for matching schema when using .not', () => {
    const sarifResult = MATCHER_DATA[0];

    expect(() => expect(sarifResult).not.toBeValidSarifFor('result')).toThrow(
      'Expected value not to match schema'
    );
  });

  it('assertion error matcherResult property contains matcher name and actual value', () => {
    const testObj = { another: 'property' };
    try {
      expect(testObj).toBeValidSarifFor('result');
    } catch (error: any) {
      // eslint-disable-next-line jest/no-try-expect, jest/no-conditional-expect
      expect(error.matcherResult).toEqual({
        actual: testObj,
        message: expect.any(Function),
        name: `toBeValidSarifFor('result')`,
        pass: false,
      });
    }
  });

  for (const value of MATCHER_DATA) {
    it('matches Result objects', () => {
      expect(value).toBeValidSarifFor('result');
    });
  }
});
