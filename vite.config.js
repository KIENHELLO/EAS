import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ssgPlugin } from 'vite-plugin-ssg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({
      pages: [
        'src/pages/index.jsx',
        'src/pages/universities.jsx',
        'src/pages/compare.jsx',
        'src/pages/university'
      ],
      config: {
        outDir: 'dist',
        baseUrl: '',
        js: {
          minify: false
        }
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
