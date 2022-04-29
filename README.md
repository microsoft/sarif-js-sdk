# SARIF JS SDK

JavaScript code and supporting files for working with the 'Static Analysis Results Interchange Format' [SARIF][sarif].

| Package                                              | Version                                                                                                                     | Description                                          |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [@microsoft/jest-sarif][@microsoft/jest-sarif]       | [![Version](https://img.shields.io/npm/v/@microsoft/jest-sarif.svg)](https://npmjs.org/package/@microsoft/jest-sarif)       | Custom SARIF matchers for [Jest][jest].              |
| [@microsoft/sarif-builder][@microsoft/sarif-builder] | [![Version](https://img.shields.io/npm/v/@microsoft/sarif-builder.svg)](https://npmjs.org/package/@microsoft/sarif-builder) | A builder library for authoring [SARIF][sarif] logs. |
| [@microsoft/eslint-formatter-sarif][@microsoft/eslint-formatter-sarif] | [![Version](https://img.shields.io/npm/v/@microsoft/eslint-formatter-sarif.svg)](https://npmjs.org/package/@microsoft/eslint-formatter-sarif) | A formatter for ESLint that produces output in the [SARIF][sarif] logs. |

## Development

This project uses the Volta tool manager to manage the tool dependencies in this project. This allows us to maintain consistency when developing across contributors.

The tool manager is available at [volta.sh](https://volta.sh/). Contributors should ensure this is installed before working in this project.

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

[@microsoft/jest-sarif]: https://github.com/microsoft/sarif-js-sdk/tree/main/packages/jest-sarif
[@microsoft/sarif-builder]: https://github.com/microsoft/sarif-js-sdk/tree/main/packages/sarif-builder
[@microsoft/eslint-formatter-sarif]: https://github.com/microsoft/sarif-js-sdk/tree/main/packages/eslint-formatter-sarif
[sarif]: https://github.com/oasis-tcs/sarif-spec
[jest]: https://facebook.github.io/jest/
