const { default: resolve } = require('@rollup/plugin-node-resolve');
const { default: esbuild } = require('rollup-plugin-esbuild');
const { default: dts } = require('rollup-plugin-dts');
const json = require('@rollup/plugin-json');

const watch = process.env.ROLLUP_WATCH === 'true';

const commonPlugins = [
  json(),
  esbuild({
    exclude: ['**/*test*', 'test/**'],
    sourceMap: true,
  }),
  resolve({
    mainFields: ['module', 'main'],
    extensions: ['.ts', '.mjs', '.cjs', '.js', '.jsx', '.json', '.node'],
    modulesOnly: true,
  }),
];

const dtsPlugins = [
  dts(),
];

module.exports = [
  { format: 'esm', ext: '.js', plugins: commonPlugins },
  { format: 'cjs', ext: '.js', plugins: commonPlugins },
  { format: 'es', ext: '.d.ts', plugins: dtsPlugins },
]
  .filter(({ format }) => watch === false || format === 'esm')
  .map(({ format, ext, plugins }) => ['.']
    .map((dir) => ({
      plugins,
      input: `src/${dir}/index.ts`.replace('/./', '/'),
      output: {
        format,
        exports: 'named',
        file: `dist/${format}/${dir}/index${ext}`.replace('/./', '/'),
      },
      external: /node_modules/,
    })))
  .reduce((prev, curr) => [...prev, ...curr], []);
