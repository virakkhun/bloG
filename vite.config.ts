import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const isDev = mode === 'development'
  return {
    plugins: [react()],
    logLevel: 'info',
    server: {
      port: 8000,
      host: true,
      proxy: {
        '/api': {
          target: process.env.VITE_BASE_URL,
          changeOrigin: !isDev,
          secure: !isDev,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
