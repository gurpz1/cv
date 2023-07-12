import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

import { createHtmlPlugin } from 'vite-plugin-html'

import * as resume from './src/assets/resume.json'

var htmlInjectConfig = {
  entry: 'src/main.js',
  inject: {
    data: {
      previewDescription: `<meta  name="description" content="${resume.basics.summary}">`,
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer(),
    createHtmlPlugin(htmlInjectConfig)
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      usePolling: true,
    }
  }
})
