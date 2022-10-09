import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import visualizer from 'rollup-plugin-visualizer';
import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";

export default defineConfig(({ command }) => {
  return {
    base: './',
    plugins: [
      react(),
      optimizeLodashImports(),
      command==='build' && visualizer()
    ],
    resolve: {
      alias: command === 'build' ? {
        'lodash': 'lodash-es',
      } : {
        'rjsf-bulma/scss': __dirname + '/../scss/',
        'rjsf-bulma': __dirname + '/../src/',
      },
    },
    build: {
      // minify: false,
      // sourcemap: true,
      outDir: 'out',
      rollupOptions: {
        input: {
          index: __dirname + '/index.html',
          bulma: __dirname + '/bulma.html',
          default: __dirname + '/default.html',
        },
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        }
      }
    }
  };
});
