import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true,  // Listen on all IP addresses (0.0.0.0)
    port: process.env.PORT || 3000,  // Use the PORT from Render, or fallback to 3000
    strictPort: true  // Fail if the port is already in use
  }
})
