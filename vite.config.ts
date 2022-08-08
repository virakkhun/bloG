import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    logLevel: 'info',
    server: {
      proxy: {
        '/weather': {
          target: env.VITE_WEATHER_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/weather/, '')
        },
        '/post': {
          target: env.VITE_JSON_PLACE_HOLDER,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/post/, '')
        }
      }
    }
  }
})
