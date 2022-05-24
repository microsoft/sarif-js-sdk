# @microsoft/sarif-matcher-utils

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![workflows](https://github.com/microsoft/sarif-js-sdk/workflows/CI/badge.svg?branch=main)
[![Version](https://img.shields.io/npm/v/@microsoft/sarif-matcher-utils.svg)](https://npmjs.org/package/@microsoft/sarif-matcher-utils)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)

> Custom matchers for SARIF logs for Jest

## Overview

The [Static Analysis Result Interchange Format (SARIF)](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html) is comprehensive spec that provides a standardized schema for tools running static analysis. For tools producing SARIF output, it's useful to be able to test that output to validate it conforms to the SARIF JSON schema.

This library helps achieve that through a custom matcher utility, which allows for assertion extensions for popular test libraries such as `jest` and `vitest`. It uses the SARIF JSON Schema to validate the log structure against the actual schema, which helps ensure flexibility when matching whole or partial portions of that schema.

## Installation

```bash
npm install @microsoft/sarif-matcher-utils --save-dev

# or

yarn add @microsoft/sarif-matcher-utils -D
```

## Usage

The main API is the `buildMatcher` function, which can be used to extend the `jest` or `vitest` matcher API with custom assertions. The example below demonstrates using the `buildMatcher` function to extend the `vitest` matcher API with custom assertions.

Using JavaScript:

```js
// sarif-log-matcher.ts
import { expect } from 'vitest';
import { buildMatcher } from '@microsoft/sarif-matcher-utils';

const toBeValidSarifLog = buildMatcher();

expect.extend({ toBeValidSarifLog });
```

Using TypeScript, which includes necessary type extensions for `vitest`:

```ts
// sarif-log-matcher.ts
import { expect } from 'vitest';
import * as Sarif from 'sarif';
import { buildMatcher } from '@microsoft/sarif-matcher-utils';

type MaybeSarifLog = Sarif.Log | unknown;

interface CustomMatchers<R = unknown> {
  toBeValidSarifLog(): R;
}

declare global {
  namespace Vi {
    interface Assertion extends CustomMatchers {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
  }
}

const toBeValidSarifLog = buildMatcher<MaybeSarifLog>();

expect.extend({ toBeValidSarifLog });
```

Which can then be used in tests:

```js
import './sarif-log-matcher';

it('should be a valid SARIF log', () => {
  const sarifLog = buildSarifLog();

  expect(sarifLog).toBeValidSarifLog();
});
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
