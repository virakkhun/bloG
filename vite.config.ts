import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    plugins: [react()],
    logLevel: 'info',
    server: {
      port: 8000,
      host: true,
      proxy: {
        '/api': {
          target:
            mode === 'development'
              ? process.env.VITE_BASE_URL
              : 'https://api-blog.virak.me/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
