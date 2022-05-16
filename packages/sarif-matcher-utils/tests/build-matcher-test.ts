import { describe, it, expect } from 'vitest';
import { buildMatcher } from '../src/build-matcher';
import * as Sarif from 'sarif';

type MaybeSarifLog = Sarif.Log | unknown;

const toBeValidSarifLog = buildMatcher<MaybeSarifLog>();

expect.extend({ toBeValidSarifLog });

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
    const sarifLog = require('./fixtures/sarif-log.json');

    expect(() => expect(sarifLog).not.toBeValidSarifLog()).toThrow(
      'Expected value not to match schema'
    );
  });
});
