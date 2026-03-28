import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // SPA는 루트 절대 경로 사용 (/terms/ 등에서도 /assets/* 로드됨). "./" 는 trailing slash URL에서 JS 404 → 빈 화면
  base: "/",
  plugins: [react()],
  server: {
    // Windows에서 연결 거부 방지: 반드시 서버를 띄운 뒤 아래 주소로 접속
    host: "127.0.0.1",
    port: 5173,
    strictPort: false,
    open: true,
  },
  preview: {
    // true = 0.0.0.0 바인딩 → 같은 네트워크에서 http://<PC IP>:4173 접속 가능
    host: true,
    port: 4173,
    strictPort: true,
    open: true,
  },
})
