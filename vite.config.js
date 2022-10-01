const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      formats: ['es', 'cjs'],
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [/node_modules/],
      output: {
        exports: 'named',
      }
    },
  },
});
