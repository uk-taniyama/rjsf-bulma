const { defineConfig } = require("vite");
const dts = require('vite-plugin-dts');

module.exports = defineConfig({
  plugins: [
    dts({
      exclude: ['src/stories'],
      staticImport: true,
      skipDiagnostics: false,
      logDiagnostics: true,
      rollupTypes: true,
      insertTypesEntry: true
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [/node_modules/],
      output: {
        sourcemapExcludeSources: true,
        exports: 'named',
      },
    },
    target: 'esnext',
    minify: false,
  },
});
