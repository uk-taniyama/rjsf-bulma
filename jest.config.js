// eslint-disable-next-line import/no-extraneous-dependencies
const yargs = require('yargs');

const args = yargs(process.argv).parse();

const coverage = args.coverage === true;
const reporters = ['default'];
if (coverage) {
  reporters.push(['jest-html-reporters', {
    publicPath: './test-result/html',
    filename: 'report.html',
    openReport: true,
  }]);
}

const esmodules = [
  'nanoid',
  'lodash-es',
].join('|');

module.exports = {
  roots: [
    '<rootDir>/test',
  ],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.(tsx|ts)',],
  setupFilesAfterEnv: ['jest-extended/all', 'expect-playwright'],
  transformIgnorePatterns: [
    `node_modules/(?!(${esmodules})/)`,
  ],
  coverageDirectory: './test-result/coverage/',
  reporters,
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs',
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};
