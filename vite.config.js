import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react(), nodePolyfills({
    include: ['crypto', 'process', 'stream', 'util'],
    globals: { global: true, process: true },
  }),],
})
