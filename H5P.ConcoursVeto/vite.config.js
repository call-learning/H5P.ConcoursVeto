import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        h5pconcoursveto: './src/main.jsx',
      },
      output: {
        format: 'umd',
        name: 'H5P.ConcoursVeto',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        },
      },
    }
  },
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, 'data'),
    },
  },
}))
