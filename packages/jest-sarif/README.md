# @microsoft/jest-sarif

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![workflows](https://github.com/microsoft/sarif-js-sdk/workflows/CI/badge.svg?branch=main)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)

> Custom matchers for SARIF logs for Jest

## Overview

The [Static Analysis Result Interchange Format (SARIF)](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html) is comprehensive spec that provides a standardized schema for tools running static analysis. For tools producing SARIF output, it's useful to be able to test that output to validate it conforms to the SARIF JSON schema.

This library helps achieve that through custom matchers for the Jest testing library. It uses the SARIF JSON Schema to validate the log structure against the actual schema, which helps ensure flexibility when matching whole or partial portions of that schema.

## Installation

```bash
npm install @microsoft/jest-sarif --save-dev

# or

yarn add @microsoft/jest-sarif -D
```

## Usage

You can import and use the matchers in one of two ways:

1. (Recommended) Including in a [jest setup file](https://jestjs.io/docs/configuration#setupfilesafterenv-array) as a one-time setup

   ```ts
   // ./jest-setup.js

   import '@microsoft/jest-sarif';

   // or

   require('@microsoft/jest-sarif');
   ```

   If you're using TypeScript, you'll want to make your setup file a `.ts` file, and use `import '@microsoft/jest-sarif';` to ensure the type extensions are included.

2. Including one of the following at the top of your test file

   ```ts
   // my-test-file.js

   import '@microsoft/jest-sarif';

   // or

   require('@microsoft/jest-sarif');
   ```

## Matchers

### `toMatchSarifLog`

Asserts that a value is an valid SARIF log.

```ts
it('validates my SARIF log', () => {
  const sarifLog = buildSarifLog();

  expect(sarifLog).toMatchSarifLog();
});
```

## Building Custom Matchers for SARIF Schema Fragments

You can also build your own matcher that will match a fragment of the SARIF schema. This is useful when you want to match a part of the schema, such as a `Result` object.

This is useful for tools and/or libraries that build SARIF logs incrementally, and want to validate each portion of the log generation as they compose the full log.

:warning: Note - this will only work for properties defined in the `definitions` section of the SARIF schema, as these are definitions that can be referenced through other schemas.

Example:

The following builds a matcher to match SARIF [Result objects](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc10541076).

```ts
// jest-setup.js
const { buildMatcher } = require('@microsoft/jest-sarif');

const toMatchSarifResult = buildMatcher({
  matcherName: 'toMatchSarifResult',
  definitionName: 'result',
});

expect.extend({
  toMatchSarifResult,
});
```

This creates a new schema validator that uses JSON pointers to reference specific SARIF Schema definitions. This is what allows us to generate portions of the schema dynamically, while ensuring the generated schemas adhere to the original.

To use in tests, call it as you would other Jest matchers:

```ts
it('validates my SARIF result', () => {
  const result = buildSarifResult();

  expect(result).toMatchSarifResult();
});
```

### TypeScript Definitions

When using typescript in addition to the `buildMatcher` function, the dynamic matchers you build will not immediately be recognized by Jest's matcher types. To resolve this, you can add a one-time definition in a local types file that declares these additional matchers. Using the above `toMatchSarifResult` example, you'd add the following type extension to Jest's Matchers:

```ts
// types/jest-matchers.d.ts

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchSarifResult(): R;
      // other dynamic matchers
    }
    interface Expect {
      toMatchSarifResult<T>(): jest.JestMatchers<T>;
      // other dynamic matchers
    }
  }
}
```

## Attribution

This package was based on the [jest-json-schema](https://www.npmjs.com/package/jest-json-schema) package.

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit [https://cla.opensource.microsoft.com](https://cla.opensource.microsoft.com).

When you submit a pull request, a CLA bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
