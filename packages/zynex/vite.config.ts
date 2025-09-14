import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Zynex',
      fileName: (format) => `zynex.${format}.js`,
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
})
