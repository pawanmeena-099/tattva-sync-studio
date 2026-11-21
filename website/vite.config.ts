
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const envPort = (globalThis as { process?: { env?: Record<string, string | undefined> } })
  .process?.env?.PORT

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: Number(envPort) || 4173,
    allowedHosts: [
      'tattvasync.in',
      'www.tattvasync.in',
      '.up.railway.app',
    ],
  },
})