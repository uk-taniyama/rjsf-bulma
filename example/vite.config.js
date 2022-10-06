import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    base: './',
    plugins: [react()],
    resolve: {
      alias: command === 'build' ? {} : {
        'rjsf-bulma/scss': __dirname + '/../scss/',
        'rjsf-bulma': __dirname + '/../src/',
      },
    },
    build: {
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
