Deprecated as of 10.7.0. highlight(lang, code, ...args) has been deprecated.
Deprecated as of 10.7.0. Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277

## sarif-matcher-utils@1.0.0-beta.0 (2022-05-24)

#### :rocket: Enhancement
* `jest-sarif`, `sarif-matcher-utils`
  * [#59](https://github.com/microsoft/sarif-js-sdk/pull/59) Adds new package @microsoft/sarif-matcher-utils ([@scalvert](https://github.com/scalvert))

#### :house: Internal
* `jest-sarif`, `sarif-builder`, `sarif-matcher-utils`
  * [#60](https://github.com/microsoft/sarif-js-sdk/pull/60) Add prepublishOnly script to package.json files in TS packages ([@scalvert](https://github.com/scalvert))

#### Committers: 1
- Steve Calvert ([@scalvert](https://github.com/scalvert))


## eslint-formatter-sarif@3.0.0 (2022-04-29)

#### :boom: Breaking Change
* `eslint-formatter-sarif`, `jest-sarif`, `sarif-builder`
  * [#43](https://github.com/microsoft/sarif-js-sdk/pull/43) Bumps Node to 14 ([@scalvert](https://github.com/scalvert))

#### :rocket: Enhancement
* `eslint-formatter-sarif`
  * [#23](https://github.com/microsoft/sarif-js-sdk/pull/23) Moves @microsoft/eslint-formatter from sarif-sdk to sarif-js-sdk ([@scalvert](https://github.com/scalvert))
* `jest-sarif`
  * [#13](https://github.com/microsoft/sarif-js-sdk/pull/13) feat: Expanding API surface area by adding single matcher: toBeValidSarifFor(definition) ([@scalvert](https://github.com/scalvert))
* `jest-sarif`, `sarif-builder`
  * [#9](https://github.com/microsoft/sarif-js-sdk/pull/9) Adds a new package: @microsoft/jest-sarif ([@scalvert](https://github.com/scalvert))

#### :bug: Bug Fix
* `jest-sarif`
  * [#21](https://github.com/microsoft/sarif-js-sdk/pull/21) Adding tslib to dependencies ([@scalvert](https://github.com/scalvert))
  * [#16](https://github.com/microsoft/sarif-js-sdk/pull/16) Updates jsdoc with correct method name ([@scalvert](https://github.com/scalvert))
  * [#15](https://github.com/microsoft/sarif-js-sdk/pull/15) Updates jest-sarif build to include SARIF schema file in output ([@scalvert](https://github.com/scalvert))
  * [#11](https://github.com/microsoft/sarif-js-sdk/pull/11) Fixes public exports to ensure types are correctly accessible ([@scalvert](https://github.com/scalvert))

#### :memo: Documentation
* Other
  * [#49](https://github.com/microsoft/sarif-js-sdk/pull/49) Adding eslint-formatter-sarif to readme ([@eddynaka](https://github.com/eddynaka))
* `jest-sarif`, `sarif-builder`
  * [#20](https://github.com/microsoft/sarif-js-sdk/pull/20) Adding top-level readme with appropriate links. Adds badges to all readmes. ([@scalvert](https://github.com/scalvert))
* `jest-sarif`
  * [#16](https://github.com/microsoft/sarif-js-sdk/pull/16) Updates jsdoc with correct method name ([@scalvert](https://github.com/scalvert))

#### :house: Internal
* `eslint-formatter-sarif`, `jest-sarif`, `sarif-builder`
  * [#57](https://github.com/microsoft/sarif-js-sdk/pull/57) Updates release-it with package specific release names for GH releases ([@scalvert](https://github.com/scalvert))
  * [#55](https://github.com/microsoft/sarif-js-sdk/pull/55) Update release-it setup to each package vs monorepo ([@scalvert](https://github.com/scalvert))
* Other
  * [#56](https://github.com/microsoft/sarif-js-sdk/pull/56) Resets root level version number ([@scalvert](https://github.com/scalvert))
  * [#42](https://github.com/microsoft/sarif-js-sdk/pull/42) Bumps NPM to latest version in volta config ([@scalvert](https://github.com/scalvert))
  * [#17](https://github.com/microsoft/sarif-js-sdk/pull/17) Updated release-it-yarn-workspaces ([@scalvert](https://github.com/scalvert))
  * [#2](https://github.com/microsoft/sarif-js-sdk/pull/2) Adding release-it configuration with workspaces publishing support ([@scalvert](https://github.com/scalvert))
  * [#8](https://github.com/microsoft/sarif-js-sdk/pull/8) Regenerates the lockfile to include specific package name ([@scalvert](https://github.com/scalvert))
  * [#4](https://github.com/microsoft/sarif-js-sdk/pull/4) Setup basic GitHub Actions CI ([@rwjblue](https://github.com/rwjblue))
  * [#1](https://github.com/microsoft/sarif-js-sdk/pull/1) Repository infrastructure setup ([@scalvert](https://github.com/scalvert))
* `eslint-formatter-sarif`
  * [#40](https://github.com/microsoft/sarif-js-sdk/pull/40) Merge latest changes from Sarif-sdk ([@yongyan-gh](https://github.com/yongyan-gh))
  * [#27](https://github.com/microsoft/sarif-js-sdk/pull/27) Add no rule metadata test case to sarif-test and fix that test failure. ([@zhanwang626](https://github.com/zhanwang626))
* `eslint-formatter-sarif`, `jest-sarif`
  * [#30](https://github.com/microsoft/sarif-js-sdk/pull/30) Fix test failure when dependabot try to bumps semver-regex from 3.1.2 to 3.1.3 ([@shaopeng-gh](https://github.com/shaopeng-gh))
* `jest-sarif`, `sarif-builder`
  * [#22](https://github.com/microsoft/sarif-js-sdk/pull/22) Release 1.0.0-beta.1 ([@scalvert](https://github.com/scalvert))
  * [#19](https://github.com/microsoft/sarif-js-sdk/pull/19) Release 1.0.0-beta.0 ([@scalvert](https://github.com/scalvert))
  * [#18](https://github.com/microsoft/sarif-js-sdk/pull/18) Adding publishConfig.access to package.json of sub-packages ([@scalvert](https://github.com/scalvert))
  * [#10](https://github.com/microsoft/sarif-js-sdk/pull/10) Updates package.json to use npm over yarn ([@scalvert](https://github.com/scalvert))
* `jest-sarif`
  * [#12](https://github.com/microsoft/sarif-js-sdk/pull/12) Adds badges to @microsoft/jest-sarif README ([@scalvert](https://github.com/scalvert))
* `sarif-builder`
  * [#6](https://github.com/microsoft/sarif-js-sdk/pull/6) Update .gitignore to ensure inclusion of package files ([@scalvert](https://github.com/scalvert))

#### Committers: 6
- Eddy Nakamura ([@eddynaka](https://github.com/eddynaka))
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))
- Shaopeng ([@shaopeng-gh](https://github.com/shaopeng-gh))
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- Yong Yan ([@yongyan-gh](https://github.com/yongyan-gh))
- Zhan Wang ([@zhanwang626](https://github.com/zhanwang626))

