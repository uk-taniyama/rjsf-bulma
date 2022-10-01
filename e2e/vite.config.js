import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      'rjsf-bulma/stories': __dirname + '/../src/stories',
    },
  },
  build: {
    outDir: 'out',
    rollupOptions: {
      input: {
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
})
);
