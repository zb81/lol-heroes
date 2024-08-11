import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PUBLIC_BASE } = loadEnv(mode, process.cwd())

  return {
    base: VITE_PUBLIC_BASE,
    plugins: [react()],
    server: {
      open: true,
    },
  }
})
