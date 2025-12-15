import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path';

export default defineConfig({
  // root: 'src', // убираем, потому что index.html в корне
  build: {
    outDir: 'dist', // собираем в dist в корне
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // путь к index.html в корне
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [injectHTML(), FullReload([resolve(__dirname, '**/*.html')])],
});
