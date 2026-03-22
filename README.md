# EATDAY Home (랜딩)

## ⚠️ "localhost 연결을 거부했습니다"가 나올 때

**원인:** 개발 서버가 **실행 중이 아닐 때**입니다. `index.html`만 더블클릭으로 열면 안 됩니다.

### 1) 터미널에서 서버 켜기 (필수)

**방법 A — 프로젝트 루트(`EatDay_Home`)에서:**

```bash
cd app
npm install
npm run dev
```

**방법 B — 루트에 한 번만 `npm install` 후:**

```bash
cd app && npm install
cd ..
npm run dev
```

(루트 `package.json`이 `app`으로 위임합니다. 첫 실행 전에는 **`app` 폴더 안에서 `npm install`**이 필요합니다.)

### 2) 브라우저 주소

서버가 뜨면 터미널에 나온 주소로 접속하세요.

- **권장:** [http://127.0.0.1:5173](http://127.0.0.1:5173)
- 또는: `http://localhost:5173`

> 이전에 `3000` 포트를 쓰셨다면, 지금은 **5173** 입니다. (Vite 기본값)

### 3) 그래도 안 되면

- 터미널에 **에러가 없는지** 확인 (빨간 글씨)
- 방화벽이 Node/Vite를 막는지 확인
- 다른 터미널에서 이미 `npm run dev`가 돌아가는지 확인 (포트 충돌 시 터미널에 다른 포트 번호가 표시됨)

---

## 프로덕션 미리보기

```bash
cd app
npm run build
npm run preview
```

→ [http://127.0.0.1:4173](http://127.0.0.1:4173)

---

## 프로젝트 위치

- **실제 앱은 `app/` 폴더만 사용합니다.** 배포는 루트 `vercel.json`이 `app`을 빌드합니다.
