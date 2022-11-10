import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    logLevel: 'info',
    server: {
      port: 8000,
      host: true
    }
  }
})
