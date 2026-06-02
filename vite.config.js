import { defineConfig } from 'vite'

import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proyectos: resolve(__dirname, 'proyectos.html'),
      },
    },
  },
});




import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],






})

