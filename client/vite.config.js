import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/auth/register': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },

      '/auth/login': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },

      '/auth/token': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
