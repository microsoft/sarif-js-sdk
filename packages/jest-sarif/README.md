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

<!--MATCHERS_START-->

### `toMatchSarifLog`

Asserts that a value matches a valid SARIF log.

```ts
it('should match SARIF log', () => {
  const sarifLog = buildSarifLog();

  expect(sarifLog).toMatchSarifLog();
});
```

### `toMatchSarifAddress`

Asserts that a value matches a valid SARIF address.

```ts
it('should match SARIF address', () => {
  const sarifAddress = buildSarifAddress();

  expect(sarifAddress).toMatchSarifAddress();
});
```

### `toMatchSarifArtifact`

Asserts that a value matches a valid SARIF artifact.

```ts
it('should match SARIF artifact', () => {
  const sarifArtifact = buildSarifArtifact();

  expect(sarifArtifact).toMatchSarifArtifact();
});
```

### `toMatchSarifArtifactChange`

Asserts that a value matches a valid SARIF artifactChange.

```ts
it('should match SARIF artifactChange', () => {
  const sarifArtifactChange = buildSarifArtifactChange();

  expect(sarifArtifactChange).toMatchSarifArtifactChange();
});
```

### `toMatchSarifArtifactContent`

Asserts that a value matches a valid SARIF artifactContent.

```ts
it('should match SARIF artifactContent', () => {
  const sarifArtifactContent = buildSarifArtifactContent();

  expect(sarifArtifactContent).toMatchSarifArtifactContent();
});
```

### `toMatchSarifArtifactLocation`

Asserts that a value matches a valid SARIF artifactLocation.

```ts
it('should match SARIF artifactLocation', () => {
  const sarifArtifactLocation = buildSarifArtifactLocation();

  expect(sarifArtifactLocation).toMatchSarifArtifactLocation();
});
```

### `toMatchSarifAttachment`

Asserts that a value matches a valid SARIF attachment.

```ts
it('should match SARIF attachment', () => {
  const sarifAttachment = buildSarifAttachment();

  expect(sarifAttachment).toMatchSarifAttachment();
});
```

### `toMatchSarifCodeFlow`

Asserts that a value matches a valid SARIF codeFlow.

```ts
it('should match SARIF codeFlow', () => {
  const sarifCodeFlow = buildSarifCodeFlow();

  expect(sarifCodeFlow).toMatchSarifCodeFlow();
});
```

### `toMatchSarifConfigurationOverride`

Asserts that a value matches a valid SARIF configurationOverride.

```ts
it('should match SARIF configurationOverride', () => {
  const sarifConfigurationOverride = buildSarifConfigurationOverride();

  expect(sarifConfigurationOverride).toMatchSarifConfigurationOverride();
});
```

### `toMatchSarifConversion`

Asserts that a value matches a valid SARIF conversion.

```ts
it('should match SARIF conversion', () => {
  const sarifConversion = buildSarifConversion();

  expect(sarifConversion).toMatchSarifConversion();
});
```

### `toMatchSarifEdge`

Asserts that a value matches a valid SARIF edge.

```ts
it('should match SARIF edge', () => {
  const sarifEdge = buildSarifEdge();

  expect(sarifEdge).toMatchSarifEdge();
});
```

### `toMatchSarifEdgeTraversal`

Asserts that a value matches a valid SARIF edgeTraversal.

```ts
it('should match SARIF edgeTraversal', () => {
  const sarifEdgeTraversal = buildSarifEdgeTraversal();

  expect(sarifEdgeTraversal).toMatchSarifEdgeTraversal();
});
```

### `toMatchSarifException`

Asserts that a value matches a valid SARIF exception.

```ts
it('should match SARIF exception', () => {
  const sarifException = buildSarifException();

  expect(sarifException).toMatchSarifException();
});
```

### `toMatchSarifExternalProperties`

Asserts that a value matches a valid SARIF externalProperties.

```ts
it('should match SARIF externalProperties', () => {
  const sarifExternalProperties = buildSarifExternalProperties();

  expect(sarifExternalProperties).toMatchSarifExternalProperties();
});
```

### `toMatchSarifExternalPropertyFileReference`

Asserts that a value matches a valid SARIF externalPropertyFileReference.

```ts
it('should match SARIF externalPropertyFileReference', () => {
  const sarifExternalPropertyFileReference = buildSarifExternalPropertyFileReference();

  expect(sarifExternalPropertyFileReference).toMatchSarifExternalPropertyFileReference();
});
```

### `toMatchSarifExternalPropertyFileReferences`

Asserts that a value matches a valid SARIF externalPropertyFileReferences.

```ts
it('should match SARIF externalPropertyFileReferences', () => {
  const sarifExternalPropertyFileReferences = buildSarifExternalPropertyFileReferences();

  expect(sarifExternalPropertyFileReferences).toMatchSarifExternalPropertyFileReferences();
});
```

### `toMatchSarifFix`

Asserts that a value matches a valid SARIF fix.

```ts
it('should match SARIF fix', () => {
  const sarifFix = buildSarifFix();

  expect(sarifFix).toMatchSarifFix();
});
```

### `toMatchSarifGraph`

Asserts that a value matches a valid SARIF graph.

```ts
it('should match SARIF graph', () => {
  const sarifGraph = buildSarifGraph();

  expect(sarifGraph).toMatchSarifGraph();
});
```

### `toMatchSarifGraphTraversal`

Asserts that a value matches a valid SARIF graphTraversal.

```ts
it('should match SARIF graphTraversal', () => {
  const sarifGraphTraversal = buildSarifGraphTraversal();

  expect(sarifGraphTraversal).toMatchSarifGraphTraversal();
});
```

### `toMatchSarifInvocation`

Asserts that a value matches a valid SARIF invocation.

```ts
it('should match SARIF invocation', () => {
  const sarifInvocation = buildSarifInvocation();

  expect(sarifInvocation).toMatchSarifInvocation();
});
```

### `toMatchSarifLocation`

Asserts that a value matches a valid SARIF location.

```ts
it('should match SARIF location', () => {
  const sarifLocation = buildSarifLocation();

  expect(sarifLocation).toMatchSarifLocation();
});
```

### `toMatchSarifLocationRelationship`

Asserts that a value matches a valid SARIF locationRelationship.

```ts
it('should match SARIF locationRelationship', () => {
  const sarifLocationRelationship = buildSarifLocationRelationship();

  expect(sarifLocationRelationship).toMatchSarifLocationRelationship();
});
```

### `toMatchSarifLogicalLocation`

Asserts that a value matches a valid SARIF logicalLocation.

```ts
it('should match SARIF logicalLocation', () => {
  const sarifLogicalLocation = buildSarifLogicalLocation();

  expect(sarifLogicalLocation).toMatchSarifLogicalLocation();
});
```

### `toMatchSarifMessage`

Asserts that a value matches a valid SARIF message.

```ts
it('should match SARIF message', () => {
  const sarifMessage = buildSarifMessage();

  expect(sarifMessage).toMatchSarifMessage();
});
```

### `toMatchSarifMultiformatMessageString`

Asserts that a value matches a valid SARIF multiformatMessageString.

```ts
it('should match SARIF multiformatMessageString', () => {
  const sarifMultiformatMessageString = buildSarifMultiformatMessageString();

  expect(sarifMultiformatMessageString).toMatchSarifMultiformatMessageString();
});
```

### `toMatchSarifNode`

Asserts that a value matches a valid SARIF node.

```ts
it('should match SARIF node', () => {
  const sarifNode = buildSarifNode();

  expect(sarifNode).toMatchSarifNode();
});
```

### `toMatchSarifNotification`

Asserts that a value matches a valid SARIF notification.

```ts
it('should match SARIF notification', () => {
  const sarifNotification = buildSarifNotification();

  expect(sarifNotification).toMatchSarifNotification();
});
```

### `toMatchSarifPhysicalLocation`

Asserts that a value matches a valid SARIF physicalLocation.

```ts
it('should match SARIF physicalLocation', () => {
  const sarifPhysicalLocation = buildSarifPhysicalLocation();

  expect(sarifPhysicalLocation).toMatchSarifPhysicalLocation();
});
```

### `toMatchSarifPropertyBag`

Asserts that a value matches a valid SARIF propertyBag.

```ts
it('should match SARIF propertyBag', () => {
  const sarifPropertyBag = buildSarifPropertyBag();

  expect(sarifPropertyBag).toMatchSarifPropertyBag();
});
```

### `toMatchSarifRectangle`

Asserts that a value matches a valid SARIF rectangle.

```ts
it('should match SARIF rectangle', () => {
  const sarifRectangle = buildSarifRectangle();

  expect(sarifRectangle).toMatchSarifRectangle();
});
```

### `toMatchSarifRegion`

Asserts that a value matches a valid SARIF region.

```ts
it('should match SARIF region', () => {
  const sarifRegion = buildSarifRegion();

  expect(sarifRegion).toMatchSarifRegion();
});
```

### `toMatchSarifReplacement`

Asserts that a value matches a valid SARIF replacement.

```ts
it('should match SARIF replacement', () => {
  const sarifReplacement = buildSarifReplacement();

  expect(sarifReplacement).toMatchSarifReplacement();
});
```

### `toMatchSarifReportingDescriptor`

Asserts that a value matches a valid SARIF reportingDescriptor.

```ts
it('should match SARIF reportingDescriptor', () => {
  const sarifReportingDescriptor = buildSarifReportingDescriptor();

  expect(sarifReportingDescriptor).toMatchSarifReportingDescriptor();
});
```

### `toMatchSarifReportingConfiguration`

Asserts that a value matches a valid SARIF reportingConfiguration.

```ts
it('should match SARIF reportingConfiguration', () => {
  const sarifReportingConfiguration = buildSarifReportingConfiguration();

  expect(sarifReportingConfiguration).toMatchSarifReportingConfiguration();
});
```

### `toMatchSarifReportingDescriptorReference`

Asserts that a value matches a valid SARIF reportingDescriptorReference.

```ts
it('should match SARIF reportingDescriptorReference', () => {
  const sarifReportingDescriptorReference = buildSarifReportingDescriptorReference();

  expect(sarifReportingDescriptorReference).toMatchSarifReportingDescriptorReference();
});
```

### `toMatchSarifReportingDescriptorRelationship`

Asserts that a value matches a valid SARIF reportingDescriptorRelationship.

```ts
it('should match SARIF reportingDescriptorRelationship', () => {
  const sarifReportingDescriptorRelationship = buildSarifReportingDescriptorRelationship();

  expect(sarifReportingDescriptorRelationship).toMatchSarifReportingDescriptorRelationship();
});
```

### `toMatchSarifResult`

Asserts that a value matches a valid SARIF result.

```ts
it('should match SARIF result', () => {
  const sarifResult = buildSarifResult();

  expect(sarifResult).toMatchSarifResult();
});
```

### `toMatchSarifResultProvenance`

Asserts that a value matches a valid SARIF resultProvenance.

```ts
it('should match SARIF resultProvenance', () => {
  const sarifResultProvenance = buildSarifResultProvenance();

  expect(sarifResultProvenance).toMatchSarifResultProvenance();
});
```

### `toMatchSarifRun`

Asserts that a value matches a valid SARIF run.

```ts
it('should match SARIF run', () => {
  const sarifRun = buildSarifRun();

  expect(sarifRun).toMatchSarifRun();
});
```

### `toMatchSarifRunAutomationDetails`

Asserts that a value matches a valid SARIF runAutomationDetails.

```ts
it('should match SARIF runAutomationDetails', () => {
  const sarifRunAutomationDetails = buildSarifRunAutomationDetails();

  expect(sarifRunAutomationDetails).toMatchSarifRunAutomationDetails();
});
```

### `toMatchSarifSpecialLocations`

Asserts that a value matches a valid SARIF specialLocations.

```ts
it('should match SARIF specialLocations', () => {
  const sarifSpecialLocations = buildSarifSpecialLocations();

  expect(sarifSpecialLocations).toMatchSarifSpecialLocations();
});
```

### `toMatchSarifStack`

Asserts that a value matches a valid SARIF stack.

```ts
it('should match SARIF stack', () => {
  const sarifStack = buildSarifStack();

  expect(sarifStack).toMatchSarifStack();
});
```

### `toMatchSarifStackFrame`

Asserts that a value matches a valid SARIF stackFrame.

```ts
it('should match SARIF stackFrame', () => {
  const sarifStackFrame = buildSarifStackFrame();

  expect(sarifStackFrame).toMatchSarifStackFrame();
});
```

### `toMatchSarifSuppression`

Asserts that a value matches a valid SARIF suppression.

```ts
it('should match SARIF suppression', () => {
  const sarifSuppression = buildSarifSuppression();

  expect(sarifSuppression).toMatchSarifSuppression();
});
```

### `toMatchSarifThreadFlow`

Asserts that a value matches a valid SARIF threadFlow.

```ts
it('should match SARIF threadFlow', () => {
  const sarifThreadFlow = buildSarifThreadFlow();

  expect(sarifThreadFlow).toMatchSarifThreadFlow();
});
```

### `toMatchSarifThreadFlowLocation`

Asserts that a value matches a valid SARIF threadFlowLocation.

```ts
it('should match SARIF threadFlowLocation', () => {
  const sarifThreadFlowLocation = buildSarifThreadFlowLocation();

  expect(sarifThreadFlowLocation).toMatchSarifThreadFlowLocation();
});
```

### `toMatchSarifTool`

Asserts that a value matches a valid SARIF tool.

```ts
it('should match SARIF tool', () => {
  const sarifTool = buildSarifTool();

  expect(sarifTool).toMatchSarifTool();
});
```

### `toMatchSarifToolComponent`

Asserts that a value matches a valid SARIF toolComponent.

```ts
it('should match SARIF toolComponent', () => {
  const sarifToolComponent = buildSarifToolComponent();

  expect(sarifToolComponent).toMatchSarifToolComponent();
});
```

### `toMatchSarifToolComponentReference`

Asserts that a value matches a valid SARIF toolComponentReference.

```ts
it('should match SARIF toolComponentReference', () => {
  const sarifToolComponentReference = buildSarifToolComponentReference();

  expect(sarifToolComponentReference).toMatchSarifToolComponentReference();
});
```

### `toMatchSarifTranslationMetadata`

Asserts that a value matches a valid SARIF translationMetadata.

```ts
it('should match SARIF translationMetadata', () => {
  const sarifTranslationMetadata = buildSarifTranslationMetadata();

  expect(sarifTranslationMetadata).toMatchSarifTranslationMetadata();
});
```

### `toMatchSarifVersionControlDetails`

Asserts that a value matches a valid SARIF versionControlDetails.

```ts
it('should match SARIF versionControlDetails', () => {
  const sarifVersionControlDetails = buildSarifVersionControlDetails();

  expect(sarifVersionControlDetails).toMatchSarifVersionControlDetails();
});
```

### `toMatchSarifWebRequest`

Asserts that a value matches a valid SARIF webRequest.

```ts
it('should match SARIF webRequest', () => {
  const sarifWebRequest = buildSarifWebRequest();

  expect(sarifWebRequest).toMatchSarifWebRequest();
});
```

### `toMatchSarifWebResponse`

Asserts that a value matches a valid SARIF webResponse.

```ts
it('should match SARIF webResponse', () => {
  const sarifWebResponse = buildSarifWebResponse();

  expect(sarifWebResponse).toMatchSarifWebResponse();
});
```

<!--MATCHERS_END-->

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
