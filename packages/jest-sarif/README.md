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

### `toBeValidSarifLog`

Asserts that a value is a valid SARIF log.

```ts
it('should be a valid SARIF log', () => {
  const sarifLog = buildSarifLog();

  expect(sarifLog).toBeValidSarifLog();
});
```

### `toBeValidSarifAddress`

Asserts that a value is a valid SARIF address.

```ts
it('should be a valid SARIF address', () => {
  const sarifAddress = buildSarifAddress();

  expect(sarifAddress).toBeValidSarifAddress();
});
```

### `toBeValidSarifArtifact`

Asserts that a value is a valid SARIF artifact.

```ts
it('should be a valid SARIF artifact', () => {
  const sarifArtifact = buildSarifArtifact();

  expect(sarifArtifact).toBeValidSarifArtifact();
});
```

### `toBeValidSarifArtifactChange`

Asserts that a value is a valid SARIF artifactChange.

```ts
it('should be a valid SARIF artifactChange', () => {
  const sarifArtifactChange = buildSarifArtifactChange();

  expect(sarifArtifactChange).toBeValidSarifArtifactChange();
});
```

### `toBeValidSarifArtifactContent`

Asserts that a value is a valid SARIF artifactContent.

```ts
it('should be a valid SARIF artifactContent', () => {
  const sarifArtifactContent = buildSarifArtifactContent();

  expect(sarifArtifactContent).toBeValidSarifArtifactContent();
});
```

### `toBeValidSarifArtifactLocation`

Asserts that a value is a valid SARIF artifactLocation.

```ts
it('should be a valid SARIF artifactLocation', () => {
  const sarifArtifactLocation = buildSarifArtifactLocation();

  expect(sarifArtifactLocation).toBeValidSarifArtifactLocation();
});
```

### `toBeValidSarifAttachment`

Asserts that a value is a valid SARIF attachment.

```ts
it('should be a valid SARIF attachment', () => {
  const sarifAttachment = buildSarifAttachment();

  expect(sarifAttachment).toBeValidSarifAttachment();
});
```

### `toBeValidSarifCodeFlow`

Asserts that a value is a valid SARIF codeFlow.

```ts
it('should be a valid SARIF codeFlow', () => {
  const sarifCodeFlow = buildSarifCodeFlow();

  expect(sarifCodeFlow).toBeValidSarifCodeFlow();
});
```

### `toBeValidSarifConfigurationOverride`

Asserts that a value is a valid SARIF configurationOverride.

```ts
it('should be a valid SARIF configurationOverride', () => {
  const sarifConfigurationOverride = buildSarifConfigurationOverride();

  expect(sarifConfigurationOverride).toBeValidSarifConfigurationOverride();
});
```

### `toBeValidSarifConversion`

Asserts that a value is a valid SARIF conversion.

```ts
it('should be a valid SARIF conversion', () => {
  const sarifConversion = buildSarifConversion();

  expect(sarifConversion).toBeValidSarifConversion();
});
```

### `toBeValidSarifEdge`

Asserts that a value is a valid SARIF edge.

```ts
it('should be a valid SARIF edge', () => {
  const sarifEdge = buildSarifEdge();

  expect(sarifEdge).toBeValidSarifEdge();
});
```

### `toBeValidSarifEdgeTraversal`

Asserts that a value is a valid SARIF edgeTraversal.

```ts
it('should be a valid SARIF edgeTraversal', () => {
  const sarifEdgeTraversal = buildSarifEdgeTraversal();

  expect(sarifEdgeTraversal).toBeValidSarifEdgeTraversal();
});
```

### `toBeValidSarifException`

Asserts that a value is a valid SARIF exception.

```ts
it('should be a valid SARIF exception', () => {
  const sarifException = buildSarifException();

  expect(sarifException).toBeValidSarifException();
});
```

### `toBeValidSarifExternalProperties`

Asserts that a value is a valid SARIF externalProperties.

```ts
it('should be a valid SARIF externalProperties', () => {
  const sarifExternalProperties = buildSarifExternalProperties();

  expect(sarifExternalProperties).toBeValidSarifExternalProperties();
});
```

### `toBeValidSarifExternalPropertyFileReference`

Asserts that a value is a valid SARIF externalPropertyFileReference.

```ts
it('should be a valid SARIF externalPropertyFileReference', () => {
  const sarifExternalPropertyFileReference = buildSarifExternalPropertyFileReference();

  expect(sarifExternalPropertyFileReference).toBeValidSarifExternalPropertyFileReference();
});
```

### `toBeValidSarifExternalPropertyFileReferences`

Asserts that a value is a valid SARIF externalPropertyFileReferences.

```ts
it('should be a valid SARIF externalPropertyFileReferences', () => {
  const sarifExternalPropertyFileReferences = buildSarifExternalPropertyFileReferences();

  expect(sarifExternalPropertyFileReferences).toBeValidSarifExternalPropertyFileReferences();
});
```

### `toBeValidSarifFix`

Asserts that a value is a valid SARIF fix.

```ts
it('should be a valid SARIF fix', () => {
  const sarifFix = buildSarifFix();

  expect(sarifFix).toBeValidSarifFix();
});
```

### `toBeValidSarifGraph`

Asserts that a value is a valid SARIF graph.

```ts
it('should be a valid SARIF graph', () => {
  const sarifGraph = buildSarifGraph();

  expect(sarifGraph).toBeValidSarifGraph();
});
```

### `toBeValidSarifGraphTraversal`

Asserts that a value is a valid SARIF graphTraversal.

```ts
it('should be a valid SARIF graphTraversal', () => {
  const sarifGraphTraversal = buildSarifGraphTraversal();

  expect(sarifGraphTraversal).toBeValidSarifGraphTraversal();
});
```

### `toBeValidSarifInvocation`

Asserts that a value is a valid SARIF invocation.

```ts
it('should be a valid SARIF invocation', () => {
  const sarifInvocation = buildSarifInvocation();

  expect(sarifInvocation).toBeValidSarifInvocation();
});
```

### `toBeValidSarifLocation`

Asserts that a value is a valid SARIF location.

```ts
it('should be a valid SARIF location', () => {
  const sarifLocation = buildSarifLocation();

  expect(sarifLocation).toBeValidSarifLocation();
});
```

### `toBeValidSarifLocationRelationship`

Asserts that a value is a valid SARIF locationRelationship.

```ts
it('should be a valid SARIF locationRelationship', () => {
  const sarifLocationRelationship = buildSarifLocationRelationship();

  expect(sarifLocationRelationship).toBeValidSarifLocationRelationship();
});
```

### `toBeValidSarifLogicalLocation`

Asserts that a value is a valid SARIF logicalLocation.

```ts
it('should be a valid SARIF logicalLocation', () => {
  const sarifLogicalLocation = buildSarifLogicalLocation();

  expect(sarifLogicalLocation).toBeValidSarifLogicalLocation();
});
```

### `toBeValidSarifMessage`

Asserts that a value is a valid SARIF message.

```ts
it('should be a valid SARIF message', () => {
  const sarifMessage = buildSarifMessage();

  expect(sarifMessage).toBeValidSarifMessage();
});
```

### `toBeValidSarifMultiformatMessageString`

Asserts that a value is a valid SARIF multiformatMessageString.

```ts
it('should be a valid SARIF multiformatMessageString', () => {
  const sarifMultiformatMessageString = buildSarifMultiformatMessageString();

  expect(sarifMultiformatMessageString).toBeValidSarifMultiformatMessageString();
});
```

### `toBeValidSarifNode`

Asserts that a value is a valid SARIF node.

```ts
it('should be a valid SARIF node', () => {
  const sarifNode = buildSarifNode();

  expect(sarifNode).toBeValidSarifNode();
});
```

### `toBeValidSarifNotification`

Asserts that a value is a valid SARIF notification.

```ts
it('should be a valid SARIF notification', () => {
  const sarifNotification = buildSarifNotification();

  expect(sarifNotification).toBeValidSarifNotification();
});
```

### `toBeValidSarifPhysicalLocation`

Asserts that a value is a valid SARIF physicalLocation.

```ts
it('should be a valid SARIF physicalLocation', () => {
  const sarifPhysicalLocation = buildSarifPhysicalLocation();

  expect(sarifPhysicalLocation).toBeValidSarifPhysicalLocation();
});
```

### `toBeValidSarifPropertyBag`

Asserts that a value is a valid SARIF propertyBag.

```ts
it('should be a valid SARIF propertyBag', () => {
  const sarifPropertyBag = buildSarifPropertyBag();

  expect(sarifPropertyBag).toBeValidSarifPropertyBag();
});
```

### `toBeValidSarifRectangle`

Asserts that a value is a valid SARIF rectangle.

```ts
it('should be a valid SARIF rectangle', () => {
  const sarifRectangle = buildSarifRectangle();

  expect(sarifRectangle).toBeValidSarifRectangle();
});
```

### `toBeValidSarifRegion`

Asserts that a value is a valid SARIF region.

```ts
it('should be a valid SARIF region', () => {
  const sarifRegion = buildSarifRegion();

  expect(sarifRegion).toBeValidSarifRegion();
});
```

### `toBeValidSarifReplacement`

Asserts that a value is a valid SARIF replacement.

```ts
it('should be a valid SARIF replacement', () => {
  const sarifReplacement = buildSarifReplacement();

  expect(sarifReplacement).toBeValidSarifReplacement();
});
```

### `toBeValidSarifReportingDescriptor`

Asserts that a value is a valid SARIF reportingDescriptor.

```ts
it('should be a valid SARIF reportingDescriptor', () => {
  const sarifReportingDescriptor = buildSarifReportingDescriptor();

  expect(sarifReportingDescriptor).toBeValidSarifReportingDescriptor();
});
```

### `toBeValidSarifReportingConfiguration`

Asserts that a value is a valid SARIF reportingConfiguration.

```ts
it('should be a valid SARIF reportingConfiguration', () => {
  const sarifReportingConfiguration = buildSarifReportingConfiguration();

  expect(sarifReportingConfiguration).toBeValidSarifReportingConfiguration();
});
```

### `toBeValidSarifReportingDescriptorReference`

Asserts that a value is a valid SARIF reportingDescriptorReference.

```ts
it('should be a valid SARIF reportingDescriptorReference', () => {
  const sarifReportingDescriptorReference = buildSarifReportingDescriptorReference();

  expect(sarifReportingDescriptorReference).toBeValidSarifReportingDescriptorReference();
});
```

### `toBeValidSarifReportingDescriptorRelationship`

Asserts that a value is a valid SARIF reportingDescriptorRelationship.

```ts
it('should be a valid SARIF reportingDescriptorRelationship', () => {
  const sarifReportingDescriptorRelationship = buildSarifReportingDescriptorRelationship();

  expect(sarifReportingDescriptorRelationship).toBeValidSarifReportingDescriptorRelationship();
});
```

### `toBeValidSarifResult`

Asserts that a value is a valid SARIF result.

```ts
it('should be a valid SARIF result', () => {
  const sarifResult = buildSarifResult();

  expect(sarifResult).toBeValidSarifResult();
});
```

### `toBeValidSarifResultProvenance`

Asserts that a value is a valid SARIF resultProvenance.

```ts
it('should be a valid SARIF resultProvenance', () => {
  const sarifResultProvenance = buildSarifResultProvenance();

  expect(sarifResultProvenance).toBeValidSarifResultProvenance();
});
```

### `toBeValidSarifRun`

Asserts that a value is a valid SARIF run.

```ts
it('should be a valid SARIF run', () => {
  const sarifRun = buildSarifRun();

  expect(sarifRun).toBeValidSarifRun();
});
```

### `toBeValidSarifRunAutomationDetails`

Asserts that a value is a valid SARIF runAutomationDetails.

```ts
it('should be a valid SARIF runAutomationDetails', () => {
  const sarifRunAutomationDetails = buildSarifRunAutomationDetails();

  expect(sarifRunAutomationDetails).toBeValidSarifRunAutomationDetails();
});
```

### `toBeValidSarifSpecialLocations`

Asserts that a value is a valid SARIF specialLocations.

```ts
it('should be a valid SARIF specialLocations', () => {
  const sarifSpecialLocations = buildSarifSpecialLocations();

  expect(sarifSpecialLocations).toBeValidSarifSpecialLocations();
});
```

### `toBeValidSarifStack`

Asserts that a value is a valid SARIF stack.

```ts
it('should be a valid SARIF stack', () => {
  const sarifStack = buildSarifStack();

  expect(sarifStack).toBeValidSarifStack();
});
```

### `toBeValidSarifStackFrame`

Asserts that a value is a valid SARIF stackFrame.

```ts
it('should be a valid SARIF stackFrame', () => {
  const sarifStackFrame = buildSarifStackFrame();

  expect(sarifStackFrame).toBeValidSarifStackFrame();
});
```

### `toBeValidSarifSuppression`

Asserts that a value is a valid SARIF suppression.

```ts
it('should be a valid SARIF suppression', () => {
  const sarifSuppression = buildSarifSuppression();

  expect(sarifSuppression).toBeValidSarifSuppression();
});
```

### `toBeValidSarifThreadFlow`

Asserts that a value is a valid SARIF threadFlow.

```ts
it('should be a valid SARIF threadFlow', () => {
  const sarifThreadFlow = buildSarifThreadFlow();

  expect(sarifThreadFlow).toBeValidSarifThreadFlow();
});
```

### `toBeValidSarifThreadFlowLocation`

Asserts that a value is a valid SARIF threadFlowLocation.

```ts
it('should be a valid SARIF threadFlowLocation', () => {
  const sarifThreadFlowLocation = buildSarifThreadFlowLocation();

  expect(sarifThreadFlowLocation).toBeValidSarifThreadFlowLocation();
});
```

### `toBeValidSarifTool`

Asserts that a value is a valid SARIF tool.

```ts
it('should be a valid SARIF tool', () => {
  const sarifTool = buildSarifTool();

  expect(sarifTool).toBeValidSarifTool();
});
```

### `toBeValidSarifToolComponent`

Asserts that a value is a valid SARIF toolComponent.

```ts
it('should be a valid SARIF toolComponent', () => {
  const sarifToolComponent = buildSarifToolComponent();

  expect(sarifToolComponent).toBeValidSarifToolComponent();
});
```

### `toBeValidSarifToolComponentReference`

Asserts that a value is a valid SARIF toolComponentReference.

```ts
it('should be a valid SARIF toolComponentReference', () => {
  const sarifToolComponentReference = buildSarifToolComponentReference();

  expect(sarifToolComponentReference).toBeValidSarifToolComponentReference();
});
```

### `toBeValidSarifTranslationMetadata`

Asserts that a value is a valid SARIF translationMetadata.

```ts
it('should be a valid SARIF translationMetadata', () => {
  const sarifTranslationMetadata = buildSarifTranslationMetadata();

  expect(sarifTranslationMetadata).toBeValidSarifTranslationMetadata();
});
```

### `toBeValidSarifVersionControlDetails`

Asserts that a value is a valid SARIF versionControlDetails.

```ts
it('should be a valid SARIF versionControlDetails', () => {
  const sarifVersionControlDetails = buildSarifVersionControlDetails();

  expect(sarifVersionControlDetails).toBeValidSarifVersionControlDetails();
});
```

### `toBeValidSarifWebRequest`

Asserts that a value is a valid SARIF webRequest.

```ts
it('should be a valid SARIF webRequest', () => {
  const sarifWebRequest = buildSarifWebRequest();

  expect(sarifWebRequest).toBeValidSarifWebRequest();
});
```

### `toBeValidSarifWebResponse`

Asserts that a value is a valid SARIF webResponse.

```ts
it('should be a valid SARIF webResponse', () => {
  const sarifWebResponse = buildSarifWebResponse();

  expect(sarifWebResponse).toBeValidSarifWebResponse();
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
