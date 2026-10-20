/* eslint-disable unicorn/no-null */
/**
 * @fileoverview Tests for SARIF formatter.
 * @author Microsoft
 */

'use strict';

const semverRegex = require('semver-regex');
const rewire = require('rewire');
const formatter = rewire('../sarif');

//------------------------------------------------------------------------------
// Global Test Content
//------------------------------------------------------------------------------

const rules = {
  'no-unused-vars': {
    type: 'suggestion',
    docs: {
      description: 'disallow unused variables',
      category: 'Variables',
      recommended: true,
      url: 'https://eslint.org/docs/rules/no-unused-vars',
    },
    fixable: 'code',
  },
  'no-extra-semi': {
    type: 'suggestion',

    docs: {
      description: 'disallow unnecessary semicolons',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://eslint.org/docs/rules/no-extra-semi',
    },

    fixable: 'code',
    schema: [],

    messages: {
      unexpected: 'Unnecessary semicolon.',
    },
  },
  'fake/no-missing-meta': {
    message: 'This rule is fake, and we expect it to have no docs',
  },
};

const sourceFilePath1 = 'service.js';
const sourceFilePath2 = 'utils.js';
const uriPrefix = 'file:///';
const testRuleId = 'ESL0001';

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe('formatter:sarif', () => {
  describe('when run', () => {
    const code = [];

    it('should return a log with correct SARIF version and tool metadata', () => {
      const log = JSON.parse(formatter(code, null));

      expect(log['$schema']).toBe('http://json.schemastore.org/sarif-2.1.0-rtm.5');
      expect(log.version).toBe('2.1.0');

      expect(log.runs[0].tool.driver.name).toBe('ESLint');
      expect(log.runs[0].tool.driver.informationUri).toBe('https://eslint.org');
      expect(log.runs[0].tool.driver.version).toMatch(semverRegex());
    });
  });

  describe('when eslint version is known', () => {
    const code = [];
    const fakeESLintVersion = '1.2.3';

    it('should return correct eslint version', () => {
      formatter.__set__('getESLintVersion', () => {
        return fakeESLintVersion;
      });
      const log = JSON.parse(formatter(code, null));
      expect(log.runs[0].tool.driver.version).toBe(fakeESLintVersion);
    });
  });

  describe('when passed no messages', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [],
        suppressedMessages: [],
      },
    ];

    it('should return a log with files, but no results', () => {
      const log = JSON.parse(formatter(code, null));

      expect(log.runs[0].artifacts).toBeDefined();
      expect(log.runs[0].artifacts[0].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[0].location.uri.endsWith('/' + sourceFilePath1)).toBeTruthy();
      expect(log.runs[0].results).toHaveLength(0);
    });
  });

  describe('when passed one message', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            severity: 2,
            ruleId: testRuleId,
          },
        ],
        suppressedMessages: [],
      },
    ];

    it('should return a log with one file and one result', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));

      expect(log.runs[0].artifacts[0].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[0].location.uri).toBeTruthy();
      expect(log.runs[0].results).toBeDefined();
      expect(log.runs[0].results).toHaveLength(1);
      expect(log.runs[0].results[0].level).toBe('error');
      expect(log.runs[0].results[0].message).toBeDefined();
      expect(log.runs[0].results[0].message.text).toBe(code[0].messages[0].message);
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          '/' + sourceFilePath1
        )
      ).toBeTruthy();
      expect(log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.index).toBe(0);
    });
  });

  describe('when passed one suppressedMessage', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [],
        suppressedMessages: [
          {
            message: 'Unexpected value.',
            severity: 2,
            ruleId: testRuleId,
            suppressions: [{ kind: 'directive', justification: 'foo' }],
          },
        ],
      },
    ];

    it('should return a log with one file and one result', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));

      expect(log.runs[0].artifacts[0].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[0].location.uri.endsWith('/' + sourceFilePath1)).toBeTruthy();
      expect(log.runs[0].results).toBeDefined();
      expect(log.runs[0].results).toHaveLength(1);
      expect(log.runs[0].results[0].level).toBe('error');
      expect(log.runs[0].results[0].message).toBeDefined();
      expect(log.runs[0].results[0].message.text).toBe(code[0].suppressedMessages[0].message);
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          '/' + sourceFilePath1
        )
      ).toBeTruthy();
      expect(log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.index).toBe(0);
      expect(log.runs[0].results[0].suppressions).toHaveLength(1);
      expect(log.runs[0].results[0].suppressions[0].kind).toBe('inSource');
      expect(log.runs[0].results[0].suppressions[0].justification).toBe(
        code[0].suppressedMessages[0].suppressions[0].justification
      );
    });
  });

  describe('when passed one suppressedMessage with multiple suppressions', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [],
        suppressedMessages: [
          {
            message: 'Unexpected value.',
            severity: 2,
            ruleId: testRuleId,
            suppressions: [
              { kind: 'directive', justification: 'foo' },
              { kind: 'directive', justification: 'bar' },
            ],
          },
        ],
      },
    ];

    it('should return a log with one file and one result', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));

      expect(log.runs[0].results[0].message).toBeDefined();
      expect(log.runs[0].results[0].message.text).toBe(code[0].suppressedMessages[0].message);
      expect(log.runs[0].results[0].suppressions).toHaveLength(2);
      expect(log.runs[0].results[0].suppressions[0].kind).toBe('inSource');
      expect(log.runs[0].results[0].suppressions[0].justification).toBe(
        code[0].suppressedMessages[0].suppressions[0].justification
      );
      expect(log.runs[0].results[0].suppressions[1].kind).toBe('inSource');
      expect(log.runs[0].results[0].suppressions[1].justification).toBe(
        code[0].suppressedMessages[0].suppressions[1].justification
      );
    });
  });

  describe('when passed one message and no suppressedMessages array', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            severity: 2,
            ruleId: testRuleId,
          },
        ],
      },
    ];

    it('should return a log with one file and one result', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));

      expect(log.runs[0].artifacts[0].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[0].location.uri.endsWith('/' + sourceFilePath1)).toBeTruthy();
      expect(log.runs[0].results).toBeDefined();
      expect(log.runs[0].results).toHaveLength(1);
      expect(log.runs[0].results[0].level).toBe('error');
      expect(log.runs[0].results[0].message).toBeDefined();
      expect(log.runs[0].results[0].message.text).toBe(code[0].messages[0].message);
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          '/' + sourceFilePath1
        )
      ).toBeTruthy();
      expect(log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.index).toBe(0);
      expect(log.runs[0].results[0].suppressions).toBeUndefined();
    });
  });

  describe('when passed one message with a rule id', () => {
    const ruleid = 'no-unused-vars';
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            ruleId: ruleid,
            source: 'getValue()',
          },
        ],
        suppressedMessages: [],
      },
    ];

    it('should return a log with one rule', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));
      const rule = rules[ruleid];

      expect(log.runs[0].tool.driver.rules).toHaveLength(1);
      expect(log.runs[0].tool.driver.rules[0].id).toBe(ruleid);
      expect(log.runs[0].tool.driver.rules[0].shortDescription.text).toBe(rule.docs.description);
      expect(log.runs[0].tool.driver.rules[0].helpUri).toBe(rule.docs.url);
      expect(log.runs[0].tool.driver.rules[0].properties.category).toBe(rule.docs.category);
    });
  });

  describe('when passed one message with line but no column nor source string', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            ruleId: testRuleId,
            line: 10,
          },
        ],
        suppressedMessages: [],
      },
    ];

    it('should return a log with one result whose location region has only a startLine', () => {
      const log = JSON.parse(formatter(code));

      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startLine).toBe(
        code[0].messages[0].line
      );
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.region.startColumn
      ).not.toBeDefined();
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.endLine).not.toBeDefined();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.region.endColumn
      ).not.toBeDefined();
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.snippet).not.toBeDefined();
    });
  });

  describe('when passed one message with line and invalid column', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            ruleId: testRuleId,
            line: 10,
            column: 0,
            endLine: 10,
            endColumn: -1,
          },
        ],
        suppressedMessages: [],
      },
    ];

    it('should return a log with one result whose location contains a region with line # and no column #', () => {
      const log = JSON.parse(formatter(code));

      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startLine).toBe(
        code[0].messages[0].line
      );
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.region.startColumn
      ).not.toBeDefined();
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.endLine).toBe(
        code[0].messages[0].endLine
      );
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.region.endColumn
      ).not.toBeDefined();
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.snippet).not.toBeDefined();
    });
  });

  describe('when passed one message with line and column but no source string', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            ruleId: testRuleId,
            line: 10,
            column: 5,
            endLine: 11,
            endColumn: 25,
          },
        ],
        suppressedMessages: [],
      },
    ];

    it('should return a log with one result whose location contains a region with line and column #s', () => {
      const log = JSON.parse(formatter(code));

      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startLine).toBe(
        code[0].messages[0].line
      );
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startColumn).toBe(
        code[0].messages[0].column
      );
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.endLine).toBe(
        code[0].messages[0].endLine
      );
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.endColumn).toBe(
        code[0].messages[0].endColumn
      );
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.snippet).not.toBeDefined();
    });
  });

  describe('when passed one message with line, column, and source string', () => {
    const code = [
      {
        filePath: 'service.js',
        messages: [
          {
            message: 'Unexpected value.',
            ruleId: testRuleId,
            line: 10,
            column: 5,
            endLine: 10,
            endColumn: 30,
            source: 'getValue()',
          },
        ],
      },
    ];

    it('should return a log with one result whose location contains a region with line and column #s', () => {
      const log = JSON.parse(formatter(code));

      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startLine).toBe(
        code[0].messages[0].line
      );
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startColumn).toBe(
        code[0].messages[0].column
      );
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.endLine).toBe(
        code[0].messages[0].endLine
      );
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.endColumn).toBe(
        code[0].messages[0].endColumn
      );
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.snippet.text).toBe(
        code[0].messages[0].source
      );
    });
  });

  describe('when passed one message with a source string but without line and column #s', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            severity: 2,
            ruleId: testRuleId,
            source: 'getValue()',
          },
        ],
      },
    ];

    it('should return a log with one result whose location contains a region with line and column #s', () => {
      const log = JSON.parse(formatter(code, rules));

      expect(
        log.runs[0].results[0].locations[0].physicalLocation.region.startLine
      ).not.toBeDefined();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.region.startColumn
      ).not.toBeDefined();
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.snippet.text).toBe(
        code[0].messages[0].source
      );
    });
  });

  describe('when passed one message and one suppressedMessage', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            severity: 2,
            ruleId: testRuleId,
            source: 'getValue()',
          },
        ],
        suppressedMessages: [
          {
            message: 'Unexpected value.',
            severity: 2,
            ruleId: testRuleId,
            source: 'getValue()',
            suppressions: [{ kind: 'directive', justification: 'foo' }],
          },
        ],
      },
    ];

    it('should return a log with two results, one of which has suppressions', () => {
      const log = JSON.parse(formatter(code, rules));

      expect(log.runs[0].results).toHaveLength(2);
      expect(log.runs[0].results[0].suppressions).toHaveLength(0);
      expect(log.runs[0].results[1].suppressions).toHaveLength(1);
      expect(log.runs[0].results[1].suppressions[0].kind).toBe('inSource');
      expect(log.runs[0].results[1].suppressions[0].justification).toBe(
        code[0].suppressedMessages[0].suppressions[0].justification
      );
    });
  });

  describe('when passed two results with two messages each', () => {
    const ruleid1 = 'no-unused-vars';
    const ruleid2 = 'no-extra-semi';
    const ruleid3 = 'custom-rule';

    rules[ruleid3] = {
      type: 'suggestion',
      docs: {
        description: 'custom description',
        category: 'Possible Errors',
      },
    };
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            severity: 2,
            ruleId: testRuleId,
          },
          {
            ruleId: ruleid1,
            message: 'Some warning.',
            severity: 1,
            line: 10,
            column: 5,
            endLine: 10,
            endColumn: 35,
            source: 'doSomething(thingId)',
          },
        ],
        suppressedMessages: [],
      },
      {
        filePath: sourceFilePath2,
        messages: [
          {
            message: 'Unexpected something.',
            severity: 2,
            ruleId: ruleid2,
            line: 18,
            column: 20,
          },
          {
            message: 'Custom error.',
            ruleId: ruleid3,
            line: 42,
          },
        ],
        suppressedMessages: [],
      },
    ];

    it('should return a log with two files, three rules, and four results', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));
      const rule1 = rules[ruleid1];
      const rule2 = rules[ruleid2];
      const rule3 = rules[ruleid3];

      expect(log.runs[0].results).toHaveLength(4);

      expect(log.runs[0].tool.driver.rules[0].id).toBe(ruleid1);
      expect(log.runs[0].tool.driver.rules[1].id).toBe(ruleid2);
      expect(log.runs[0].tool.driver.rules[2].id).toBe(ruleid3);

      expect(log.runs[0].artifacts[0].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[0].location.uri).toBeTruthy();

      expect(log.runs[0].artifacts[1].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[1].location.uri).toBeTruthy();

      expect(log.runs[0].tool.driver.rules[0].id).toBe(ruleid1);
      expect(log.runs[0].tool.driver.rules[0].shortDescription.text).toBe(rule1.docs.description);
      expect(log.runs[0].tool.driver.rules[0].helpUri).toBe(rule1.docs.url);
      expect(log.runs[0].tool.driver.rules[0].properties.category).toBe(rule1.docs.category);

      expect(log.runs[0].tool.driver.rules[1].id).toBe(ruleid2);
      expect(log.runs[0].tool.driver.rules[1].shortDescription.text).toBe(rule2.docs.description);
      expect(log.runs[0].tool.driver.rules[1].helpUri).toBe(rule2.docs.url);
      expect(log.runs[0].tool.driver.rules[1].properties.category).toBe(rule2.docs.category);

      expect(log.runs[0].tool.driver.rules[2].id).toBe(ruleid3);
      expect(log.runs[0].tool.driver.rules[2].shortDescription.text).toBe(rule3.docs.description);
      expect(log.runs[0].tool.driver.rules[2].helpUri).toBe(rule3.docs.url);
      expect(log.runs[0].tool.driver.rules[2].properties.category).toBe(rule3.docs.category);

      expect(log.runs[0].results[0].ruleId).toBe(testRuleId);
      expect(log.runs[0].results[1].ruleId).toBe(ruleid1);
      expect(log.runs[0].results[2].ruleId).toBe(ruleid2);
      expect(log.runs[0].results[3].ruleId).toBe(ruleid3);

      expect(log.runs[0].results[0].ruleIndex).not.toBeDefined(); // Custom rule: no metadata available.
      expect(log.runs[0].results[1].ruleIndex).toBe(0);
      expect(log.runs[0].results[2].ruleIndex).toBe(1);
      expect(log.runs[0].results[3].ruleIndex).toBe(2);

      expect(log.runs[0].results[0].level).toBe('error');
      expect(log.runs[0].results[1].level).toBe('warning');
      expect(log.runs[0].results[2].level).toBe('error');
      expect(log.runs[0].results[3].level).toBe('warning');

      expect(log.runs[0].results[0].message.text).toBe('Unexpected value.');
      expect(log.runs[0].results[1].message.text).toBe('Some warning.');
      expect(log.runs[0].results[2].message.text).toBe('Unexpected something.');
      expect(log.runs[0].results[3].message.text).toBe('Custom error.');

      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          '/' + sourceFilePath1
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[1].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[1].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          '/' + sourceFilePath1
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[2].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[2].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          '/' + sourceFilePath2
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[3].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[3].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          '/' + sourceFilePath2
        )
      ).toBeTruthy();

      expect(log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.index).toBe(0);
      expect(log.runs[0].results[1].locations[0].physicalLocation.artifactLocation.index).toBe(0);
      expect(log.runs[0].results[2].locations[0].physicalLocation.artifactLocation.index).toBe(1);
      expect(log.runs[0].results[3].locations[0].physicalLocation.artifactLocation.index).toBe(1);

      expect(log.runs[0].results[0].locations[0].physicalLocation.region).not.toBeDefined();

      expect(log.runs[0].results[1].locations[0].physicalLocation.region.startLine).toBe(10);
      expect(log.runs[0].results[1].locations[0].physicalLocation.region.startColumn).toBe(5);
      expect(log.runs[0].results[1].locations[0].physicalLocation.region.endLine).toBe(10);
      expect(log.runs[0].results[1].locations[0].physicalLocation.region.endColumn).toBe(35);
      expect(log.runs[0].results[1].locations[0].physicalLocation.region.snippet.text).toBe(
        'doSomething(thingId)'
      );

      expect(log.runs[0].results[2].locations[0].physicalLocation.region.startLine).toBe(18);
      expect(log.runs[0].results[2].locations[0].physicalLocation.region.startColumn).toBe(20);
      expect(log.runs[0].results[2].locations[0].physicalLocation.region.endLine).not.toBeDefined();
      expect(
        log.runs[0].results[2].locations[0].physicalLocation.region.endColumn
      ).not.toBeDefined();
      expect(log.runs[0].results[2].locations[0].physicalLocation.region.snippet).not.toBeDefined();

      expect(log.runs[0].results[0].suppressions).toBeUndefined();
      expect(log.runs[0].results[1].suppressions).toBeUndefined();
      expect(log.runs[0].results[2].suppressions).toBeUndefined();
      expect(log.runs[0].results[3].suppressions).toBeUndefined();
    });
  });

  describe('when passed two results with one having no message and one with two messages', () => {
    const ruleid1 = 'no-extra-semi';
    const ruleid2 = 'custom-rule';

    rules[ruleid2] = {
      type: 'suggestion',
      docs: {
        description: 'custom description',
        category: 'Possible Errors',
      },
    };
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [],
        suppressedMessages: [],
      },
      {
        filePath: sourceFilePath2,
        messages: [
          {
            message: 'Unexpected something.',
            severity: 2,
            ruleId: ruleid1,
            line: 18,
            column: 29,
          },
          {
            message: 'Custom error.',
            ruleId: ruleid2,
            line: 42,
            column: 7,
            endColumn: 19,
          },
        ],
        suppressedMessages: [],
      },
    ];

    it('should return a log with two files, two rules, and two results', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));
      const rule2 = rules[ruleid1];
      const rule3 = rules[ruleid2];

      expect(log.runs[0].artifacts).toHaveLength(2);
      expect(log.runs[0].results).toHaveLength(2);

      expect(log.runs[0].tool.driver.rules[0].id).toBe(ruleid1);
      expect(log.runs[0].tool.driver.rules[1].id).toBe(ruleid2);

      expect(log.runs[0].artifacts[0].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[0].location.uri.endsWith(sourceFilePath1)).toBeTruthy();
      expect(log.runs[0].artifacts[1].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[1].location.uri.endsWith(sourceFilePath2)).toBeTruthy();

      expect(log.runs[0].tool.driver.rules[0].id).toBe(ruleid1);
      expect(log.runs[0].tool.driver.rules[0].shortDescription.text).toBe(rule2.docs.description);
      expect(log.runs[0].tool.driver.rules[0].helpUri).toBe(rule2.docs.url);
      expect(log.runs[0].tool.driver.rules[0].properties.category).toBe(rule2.docs.category);

      expect(log.runs[0].tool.driver.rules[1].id).toBe(ruleid2);
      expect(log.runs[0].tool.driver.rules[1].shortDescription.text).toBe(rule3.docs.description);
      expect(log.runs[0].tool.driver.rules[1].helpUri).toBe(rule3.docs.url);
      expect(log.runs[0].tool.driver.rules[1].properties.category).toBe(rule3.docs.category);

      expect(log.runs[0].results[0].ruleId).toBe(ruleid1);
      expect(log.runs[0].results[1].ruleId).toBe(ruleid2);

      expect(log.runs[0].results[0].level).toBe('error');
      expect(log.runs[0].results[1].level).toBe('warning');

      expect(log.runs[0].results[0].message.text).toBe('Unexpected something.');
      expect(log.runs[0].results[1].message.text).toBe('Custom error.');

      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          sourceFilePath2
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[1].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[1].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          sourceFilePath2
        )
      ).toBeTruthy();

      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startLine).toBe(18);
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startColumn).toBe(29);
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.endLine).not.toBeDefined();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.region.endColumn
      ).not.toBeDefined();
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.snippet).not.toBeDefined();

      expect(log.runs[0].results[1].locations[0].physicalLocation.region.startLine).toBe(42);
      expect(log.runs[0].results[1].locations[0].physicalLocation.region.startColumn).toBe(7);
      expect(log.runs[0].results[1].locations[0].physicalLocation.region.endLine).not.toBeDefined();
      expect(log.runs[0].results[1].locations[0].physicalLocation.region.endColumn).toBe(19);
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.snippet).not.toBeDefined();

      expect(log.runs[0].results[1].suppressions).toBeUndefined();
      expect(log.runs[0].results[1].suppressions).toBeUndefined();
    });
  });

  describe('when passed a result with no rule id', () => {
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Internal error.',
            severity: 2,
            // no ruleId property
          },
        ],
      },
    ];

    it('should return a log with no rules, no results, and a tool execution notification', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));

      expect(log.runs).toHaveLength(1);
      const run = log.runs[0];
      expect(run.tool.driver.rules).toHaveLength(0);
      expect(run.results).toHaveLength(0);

      expect(run.artifacts).toHaveLength(1);
      const artifactUri = run.artifacts[0].location.uri;
      expect(artifactUri.startsWith(uriPrefix)).toBeTruthy();
      expect(artifactUri.endsWith(sourceFilePath1)).toBeTruthy();

      expect(run.invocations).toHaveLength(1);
      const invocation = run.invocations[0];
      expect(invocation.executionSuccessful).toBe(false);

      expect(invocation.toolConfigurationNotifications).toHaveLength(1);
      const notification = invocation.toolConfigurationNotifications[0];
      expect(notification.descriptor.id).toBe('ESL0999');
      expect(notification.level).toBe('error');
      expect(notification.message.text).toBe('Internal error.');

      expect(notification.locations).toHaveLength(1);
      const notificationUri = notification.locations[0].physicalLocation.artifactLocation.uri;
      expect(notificationUri.startsWith(uriPrefix)).toBeTruthy();
      expect(notificationUri.endsWith(sourceFilePath1)).toBeTruthy();
    });
  });

  describe('when passed a rule with no description', () => {
    const ruleid = 'custom-rule-no-description';

    rules[ruleid] = {
      type: 'suggestion',
      docs: {
        category: 'Possible Errors',
      },
    };
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Custom error.',
            ruleId: ruleid,
            line: 42,
          },
        ],
      },
    ];
    it('should return a log with one file, one rule, and one result', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));
      const rule = rules[ruleid];

      expect(log.runs[0].artifacts).toHaveLength(1);
      expect(log.runs[0].results).toHaveLength(1);

      expect(log.runs[0].tool.driver.rules[0].id).toBe(ruleid);

      expect(log.runs[0].artifacts[0].location.uri.startsWith(uriPrefix)).toBeTruthy();
      expect(log.runs[0].artifacts[0].location.uri.endsWith(sourceFilePath1)).toBeTruthy();

      expect(log.runs[0].tool.driver.rules[0].id).toBe(ruleid);
      expect(log.runs[0].tool.driver.rules[0].shortDescription).not.toBeDefined();
      expect(log.runs[0].tool.driver.rules[0].helpUri).toBe(rule.docs.url);
      expect(log.runs[0].tool.driver.rules[0].properties.category).toBe(rule.docs.category);

      expect(log.runs[0].results[0].ruleId).toBe(ruleid);

      expect(log.runs[0].results[0].level).toBe('warning');

      expect(log.runs[0].results[0].message.text).toBe('Custom error.');

      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.startsWith(
          uriPrefix
        )
      ).toBeTruthy();
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri.endsWith(
          sourceFilePath1
        )
      ).toBeTruthy();

      expect(log.runs[0].results[0].locations[0].physicalLocation.region.startLine).toBe(42);
      expect(
        log.runs[0].results[0].locations[0].physicalLocation.region.startColumn
      ).not.toBeDefined();
      expect(log.runs[0].results[0].locations[0].physicalLocation.region.snippet).not.toBeDefined();
    });
  });

  describe('when passed rules without metadata', () => {
    const ruleId = 'fake/no-missing-meta';
    const code = [
      {
        filePath: sourceFilePath1,
        messages: [
          {
            message: 'Unexpected value.',
            ruleId: ruleId,
            source: 'getValue()',
          },
        ],
      },
    ];

    it('should return a log with one rule', () => {
      const log = JSON.parse(formatter(code, { rulesMeta: rules }));

      expect(log.runs[0].tool.driver.rules).toHaveLength(1);
      expect(log.runs[0].tool.driver.rules[0].id).toBe(ruleId);
      expect(log.runs[0].tool.driver.rules[0].properties.category).toBe('No category provided');
    });
  });
});
