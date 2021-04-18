# @microsoft/jest-sarif

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

<!--MATCHERS_START-->

### `toMatchSarifLog`

Asserts that a value is an valid SARIF .

```ts
it('validate SARIF ', () => {
  const sarif = buildSarif();

  expect(sarif).toMatchSarifLog();
});
```

### `toMatchSarifAddress`

Asserts that a value is an valid SARIF address.

```ts
it('validate SARIF address', () => {
  const sarifAddress = buildSarifAddress();

  expect(sarifAddress).toMatchSarifAddress();
});
```

### `toMatchSarifArtifact`

Asserts that a value is an valid SARIF artifact.

```ts
it('validate SARIF artifact', () => {
  const sarifArtifact = buildSarifArtifact();

  expect(sarifArtifact).toMatchSarifArtifact();
});
```

### `toMatchSarifArtifactChange`

Asserts that a value is an valid SARIF artifactChange.

```ts
it('validate SARIF artifactChange', () => {
  const sarifArtifactChange = buildSarifArtifactChange();

  expect(sarifArtifactChange).toMatchSarifArtifactChange();
});
```

### `toMatchSarifArtifactContent`

Asserts that a value is an valid SARIF artifactContent.

```ts
it('validate SARIF artifactContent', () => {
  const sarifArtifactContent = buildSarifArtifactContent();

  expect(sarifArtifactContent).toMatchSarifArtifactContent();
});
```

### `toMatchSarifArtifactLocation`

Asserts that a value is an valid SARIF artifactLocation.

```ts
it('validate SARIF artifactLocation', () => {
  const sarifArtifactLocation = buildSarifArtifactLocation();

  expect(sarifArtifactLocation).toMatchSarifArtifactLocation();
});
```

### `toMatchSarifAttachment`

Asserts that a value is an valid SARIF attachment.

```ts
it('validate SARIF attachment', () => {
  const sarifAttachment = buildSarifAttachment();

  expect(sarifAttachment).toMatchSarifAttachment();
});
```

### `toMatchSarifCodeFlow`

Asserts that a value is an valid SARIF codeFlow.

```ts
it('validate SARIF codeFlow', () => {
  const sarifCodeFlow = buildSarifCodeFlow();

  expect(sarifCodeFlow).toMatchSarifCodeFlow();
});
```

### `toMatchSarifConfigurationOverride`

Asserts that a value is an valid SARIF configurationOverride.

```ts
it('validate SARIF configurationOverride', () => {
  const sarifConfigurationOverride = buildSarifConfigurationOverride();

  expect(sarifConfigurationOverride).toMatchSarifConfigurationOverride();
});
```

### `toMatchSarifConversion`

Asserts that a value is an valid SARIF conversion.

```ts
it('validate SARIF conversion', () => {
  const sarifConversion = buildSarifConversion();

  expect(sarifConversion).toMatchSarifConversion();
});
```

### `toMatchSarifEdge`

Asserts that a value is an valid SARIF edge.

```ts
it('validate SARIF edge', () => {
  const sarifEdge = buildSarifEdge();

  expect(sarifEdge).toMatchSarifEdge();
});
```

### `toMatchSarifEdgeTraversal`

Asserts that a value is an valid SARIF edgeTraversal.

```ts
it('validate SARIF edgeTraversal', () => {
  const sarifEdgeTraversal = buildSarifEdgeTraversal();

  expect(sarifEdgeTraversal).toMatchSarifEdgeTraversal();
});
```

### `toMatchSarifException`

Asserts that a value is an valid SARIF exception.

```ts
it('validate SARIF exception', () => {
  const sarifException = buildSarifException();

  expect(sarifException).toMatchSarifException();
});
```

### `toMatchSarifExternalProperties`

Asserts that a value is an valid SARIF externalProperties.

```ts
it('validate SARIF externalProperties', () => {
  const sarifExternalProperties = buildSarifExternalProperties();

  expect(sarifExternalProperties).toMatchSarifExternalProperties();
});
```

### `toMatchSarifExternalPropertyFileReference`

Asserts that a value is an valid SARIF externalPropertyFileReference.

```ts
it('validate SARIF externalPropertyFileReference', () => {
  const sarifExternalPropertyFileReference = buildSarifExternalPropertyFileReference();

  expect(sarifExternalPropertyFileReference).toMatchSarifExternalPropertyFileReference();
});
```

### `toMatchSarifExternalPropertyFileReferences`

Asserts that a value is an valid SARIF externalPropertyFileReferences.

```ts
it('validate SARIF externalPropertyFileReferences', () => {
  const sarifExternalPropertyFileReferences = buildSarifExternalPropertyFileReferences();

  expect(sarifExternalPropertyFileReferences).toMatchSarifExternalPropertyFileReferences();
});
```

### `toMatchSarifFix`

Asserts that a value is an valid SARIF fix.

```ts
it('validate SARIF fix', () => {
  const sarifFix = buildSarifFix();

  expect(sarifFix).toMatchSarifFix();
});
```

### `toMatchSarifGraph`

Asserts that a value is an valid SARIF graph.

```ts
it('validate SARIF graph', () => {
  const sarifGraph = buildSarifGraph();

  expect(sarifGraph).toMatchSarifGraph();
});
```

### `toMatchSarifGraphTraversal`

Asserts that a value is an valid SARIF graphTraversal.

```ts
it('validate SARIF graphTraversal', () => {
  const sarifGraphTraversal = buildSarifGraphTraversal();

  expect(sarifGraphTraversal).toMatchSarifGraphTraversal();
});
```

### `toMatchSarifInvocation`

Asserts that a value is an valid SARIF invocation.

```ts
it('validate SARIF invocation', () => {
  const sarifInvocation = buildSarifInvocation();

  expect(sarifInvocation).toMatchSarifInvocation();
});
```

### `toMatchSarifLocation`

Asserts that a value is an valid SARIF location.

```ts
it('validate SARIF location', () => {
  const sarifLocation = buildSarifLocation();

  expect(sarifLocation).toMatchSarifLocation();
});
```

### `toMatchSarifLocationRelationship`

Asserts that a value is an valid SARIF locationRelationship.

```ts
it('validate SARIF locationRelationship', () => {
  const sarifLocationRelationship = buildSarifLocationRelationship();

  expect(sarifLocationRelationship).toMatchSarifLocationRelationship();
});
```

### `toMatchSarifLogicalLocation`

Asserts that a value is an valid SARIF logicalLocation.

```ts
it('validate SARIF logicalLocation', () => {
  const sarifLogicalLocation = buildSarifLogicalLocation();

  expect(sarifLogicalLocation).toMatchSarifLogicalLocation();
});
```

### `toMatchSarifMessage`

Asserts that a value is an valid SARIF message.

```ts
it('validate SARIF message', () => {
  const sarifMessage = buildSarifMessage();

  expect(sarifMessage).toMatchSarifMessage();
});
```

### `toMatchSarifMultiformatMessageString`

Asserts that a value is an valid SARIF multiformatMessageString.

```ts
it('validate SARIF multiformatMessageString', () => {
  const sarifMultiformatMessageString = buildSarifMultiformatMessageString();

  expect(sarifMultiformatMessageString).toMatchSarifMultiformatMessageString();
});
```

### `toMatchSarifNode`

Asserts that a value is an valid SARIF node.

```ts
it('validate SARIF node', () => {
  const sarifNode = buildSarifNode();

  expect(sarifNode).toMatchSarifNode();
});
```

### `toMatchSarifNotification`

Asserts that a value is an valid SARIF notification.

```ts
it('validate SARIF notification', () => {
  const sarifNotification = buildSarifNotification();

  expect(sarifNotification).toMatchSarifNotification();
});
```

### `toMatchSarifPhysicalLocation`

Asserts that a value is an valid SARIF physicalLocation.

```ts
it('validate SARIF physicalLocation', () => {
  const sarifPhysicalLocation = buildSarifPhysicalLocation();

  expect(sarifPhysicalLocation).toMatchSarifPhysicalLocation();
});
```

### `toMatchSarifPropertyBag`

Asserts that a value is an valid SARIF propertyBag.

```ts
it('validate SARIF propertyBag', () => {
  const sarifPropertyBag = buildSarifPropertyBag();

  expect(sarifPropertyBag).toMatchSarifPropertyBag();
});
```

### `toMatchSarifRectangle`

Asserts that a value is an valid SARIF rectangle.

```ts
it('validate SARIF rectangle', () => {
  const sarifRectangle = buildSarifRectangle();

  expect(sarifRectangle).toMatchSarifRectangle();
});
```

### `toMatchSarifRegion`

Asserts that a value is an valid SARIF region.

```ts
it('validate SARIF region', () => {
  const sarifRegion = buildSarifRegion();

  expect(sarifRegion).toMatchSarifRegion();
});
```

### `toMatchSarifReplacement`

Asserts that a value is an valid SARIF replacement.

```ts
it('validate SARIF replacement', () => {
  const sarifReplacement = buildSarifReplacement();

  expect(sarifReplacement).toMatchSarifReplacement();
});
```

### `toMatchSarifReportingDescriptor`

Asserts that a value is an valid SARIF reportingDescriptor.

```ts
it('validate SARIF reportingDescriptor', () => {
  const sarifReportingDescriptor = buildSarifReportingDescriptor();

  expect(sarifReportingDescriptor).toMatchSarifReportingDescriptor();
});
```

### `toMatchSarifReportingConfiguration`

Asserts that a value is an valid SARIF reportingConfiguration.

```ts
it('validate SARIF reportingConfiguration', () => {
  const sarifReportingConfiguration = buildSarifReportingConfiguration();

  expect(sarifReportingConfiguration).toMatchSarifReportingConfiguration();
});
```

### `toMatchSarifReportingDescriptorReference`

Asserts that a value is an valid SARIF reportingDescriptorReference.

```ts
it('validate SARIF reportingDescriptorReference', () => {
  const sarifReportingDescriptorReference = buildSarifReportingDescriptorReference();

  expect(sarifReportingDescriptorReference).toMatchSarifReportingDescriptorReference();
});
```

### `toMatchSarifReportingDescriptorRelationship`

Asserts that a value is an valid SARIF reportingDescriptorRelationship.

```ts
it('validate SARIF reportingDescriptorRelationship', () => {
  const sarifReportingDescriptorRelationship = buildSarifReportingDescriptorRelationship();

  expect(sarifReportingDescriptorRelationship).toMatchSarifReportingDescriptorRelationship();
});
```

### `toMatchSarifResult`

Asserts that a value is an valid SARIF result.

```ts
it('validate SARIF result', () => {
  const sarifResult = buildSarifResult();

  expect(sarifResult).toMatchSarifResult();
});
```

### `toMatchSarifResultProvenance`

Asserts that a value is an valid SARIF resultProvenance.

```ts
it('validate SARIF resultProvenance', () => {
  const sarifResultProvenance = buildSarifResultProvenance();

  expect(sarifResultProvenance).toMatchSarifResultProvenance();
});
```

### `toMatchSarifRun`

Asserts that a value is an valid SARIF run.

```ts
it('validate SARIF run', () => {
  const sarifRun = buildSarifRun();

  expect(sarifRun).toMatchSarifRun();
});
```

### `toMatchSarifRunAutomationDetails`

Asserts that a value is an valid SARIF runAutomationDetails.

```ts
it('validate SARIF runAutomationDetails', () => {
  const sarifRunAutomationDetails = buildSarifRunAutomationDetails();

  expect(sarifRunAutomationDetails).toMatchSarifRunAutomationDetails();
});
```

### `toMatchSarifSpecialLocations`

Asserts that a value is an valid SARIF specialLocations.

```ts
it('validate SARIF specialLocations', () => {
  const sarifSpecialLocations = buildSarifSpecialLocations();

  expect(sarifSpecialLocations).toMatchSarifSpecialLocations();
});
```

### `toMatchSarifStack`

Asserts that a value is an valid SARIF stack.

```ts
it('validate SARIF stack', () => {
  const sarifStack = buildSarifStack();

  expect(sarifStack).toMatchSarifStack();
});
```

### `toMatchSarifStackFrame`

Asserts that a value is an valid SARIF stackFrame.

```ts
it('validate SARIF stackFrame', () => {
  const sarifStackFrame = buildSarifStackFrame();

  expect(sarifStackFrame).toMatchSarifStackFrame();
});
```

### `toMatchSarifSuppression`

Asserts that a value is an valid SARIF suppression.

```ts
it('validate SARIF suppression', () => {
  const sarifSuppression = buildSarifSuppression();

  expect(sarifSuppression).toMatchSarifSuppression();
});
```

### `toMatchSarifThreadFlow`

Asserts that a value is an valid SARIF threadFlow.

```ts
it('validate SARIF threadFlow', () => {
  const sarifThreadFlow = buildSarifThreadFlow();

  expect(sarifThreadFlow).toMatchSarifThreadFlow();
});
```

### `toMatchSarifThreadFlowLocation`

Asserts that a value is an valid SARIF threadFlowLocation.

```ts
it('validate SARIF threadFlowLocation', () => {
  const sarifThreadFlowLocation = buildSarifThreadFlowLocation();

  expect(sarifThreadFlowLocation).toMatchSarifThreadFlowLocation();
});
```

### `toMatchSarifTool`

Asserts that a value is an valid SARIF tool.

```ts
it('validate SARIF tool', () => {
  const sarifTool = buildSarifTool();

  expect(sarifTool).toMatchSarifTool();
});
```

### `toMatchSarifToolComponent`

Asserts that a value is an valid SARIF toolComponent.

```ts
it('validate SARIF toolComponent', () => {
  const sarifToolComponent = buildSarifToolComponent();

  expect(sarifToolComponent).toMatchSarifToolComponent();
});
```

### `toMatchSarifToolComponentReference`

Asserts that a value is an valid SARIF toolComponentReference.

```ts
it('validate SARIF toolComponentReference', () => {
  const sarifToolComponentReference = buildSarifToolComponentReference();

  expect(sarifToolComponentReference).toMatchSarifToolComponentReference();
});
```

### `toMatchSarifTranslationMetadata`

Asserts that a value is an valid SARIF translationMetadata.

```ts
it('validate SARIF translationMetadata', () => {
  const sarifTranslationMetadata = buildSarifTranslationMetadata();

  expect(sarifTranslationMetadata).toMatchSarifTranslationMetadata();
});
```

### `toMatchSarifVersionControlDetails`

Asserts that a value is an valid SARIF versionControlDetails.

```ts
it('validate SARIF versionControlDetails', () => {
  const sarifVersionControlDetails = buildSarifVersionControlDetails();

  expect(sarifVersionControlDetails).toMatchSarifVersionControlDetails();
});
```

### `toMatchSarifWebRequest`

Asserts that a value is an valid SARIF webRequest.

```ts
it('validate SARIF webRequest', () => {
  const sarifWebRequest = buildSarifWebRequest();

  expect(sarifWebRequest).toMatchSarifWebRequest();
});
```

### `toMatchSarifWebResponse`

Asserts that a value is an valid SARIF webResponse.

```ts
it('validate SARIF webResponse', () => {
  const sarifWebResponse = buildSarifWebResponse();

  expect(sarifWebResponse).toMatchSarifWebResponse();
});
```

<!--MATCHERS_END-->

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
