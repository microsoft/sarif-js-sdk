const fs = require('fs');
const path = require('path');
const { EOL } = require('os');
const ejs = require('ejs');
const fetch = require('sync-fetch');
const prettier = require('prettier');
const startCase = require('lodash.startcase');
const camelCase = require('lodash.camelcase');
const kebabCase = require('lodash.kebabcase');

const AUTOGENERATED_HEADER = '// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.';
const sarifSchema = fetch(
  'https://schemastore.azurewebsites.net/schemas/json/sarif-2.1.0-rtm.5.json'
).json();
const definitions = Object.keys(sarifSchema.definitions);

function generateDefinitions() {
  const definitionPath = path.join(__dirname, '..', 'src', 'types', 'definition.ts');
  const definitionSource = `
  ${AUTOGENERATED_HEADER}

  export type Definition = ${definitions.map((definition) => `"${definition}"`).join(` | ${EOL}`)};
`;

  writeFile(definitionPath, definitionSource);
}

function generateMatchers() {
  const matchersData = [
    {
      definition: 'log',
      type: 'Log',
      matcherName: 'toBeValidSarifLog',
      matcherPath: 'to-be-valid-sarif-log',
    },
  ];
  const template = getTemplate('to-be-valid-sarif-template.ts');

  // Generate ./src/matchers/to-be-valid-sarif-<matcherName>.ts
  for (const definition of definitions) {
    const destinationPath = getSourcePath(`to-be-valid-sarif-${kebabCase(definition)}`);
    const type = startCase(camelCase(definition)).replace(/ /g, '');
    const data = {
      definition,
      type,
      maybeType: `Maybe${type}`,
      matcherName: `toBeValidSarif${type}`,
    };

    const renderedMatcher = template(data);

    writeFile(destinationPath, renderedMatcher);

    matchersData.push(
      Object.assign({}, data, {
        matcherPath: `to-be-valid-sarif-${kebabCase(definition)}`,
      })
    );
  }

  // Generate ./src/matchers/index.ts
  matchersData.sort();

  const indexTemplate = getTemplate('index.ts');

  const renderedIndex = indexTemplate({
    matchers: matchersData,
  });

  writeFile(getSourcePath('index'), renderedIndex);

  // Generate README.md matchers docs
  const readmeTemplate = getTemplate('readme.md');

  const renderedReadme = readmeTemplate({
    matchers: matchersData,
  });
  const readmePath = path.join(__dirname, '..', 'README.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf8');

  const readmeNewContent = readmeContent.replace(
    /<!--MATCHERS_START-->[\S\s]*<!--MATCHERS_END-->/,
    `<!--MATCHERS_START-->\n\n${renderedReadme}\n\n<!--MATCHERS_END-->`
  );

  writeFile(readmePath, readmeNewContent, { parser: 'markdown' });
}

function getTemplate(templateName) {
  const templateSource = fs.readFileSync(
    path.join(__dirname, '..', 'templates', `${templateName}.ejs`),
    { encoding: 'utf-8' }
  );

  return ejs.compile(templateSource);
}

function getSourcePath(fileName) {
  return path.join(__dirname, '..', 'src', 'matchers', `${fileName}.ts`);
}

function writeFile(filePath, contents, prettierOptions = {}) {
  const mergedPrettierOptions = Object.assign({}, { parser: 'babel-ts' }, prettierOptions);

  prettier.resolveConfig(filePath).then((options) => {
    const formatted = prettier.format(contents, Object.assign({}, mergedPrettierOptions, options));

    fs.writeFileSync(filePath, formatted);
  });
}

generateDefinitions();
generateMatchers();
