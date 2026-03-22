import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    // Windows에서 연결 거부 방지: 반드시 서버를 띄운 뒤 아래 주소로 접속
    host: "127.0.0.1",
    port: 5173,
    strictPort: false,
    open: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: false,
    open: true,
  },
})
