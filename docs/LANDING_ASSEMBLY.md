# EATDAY Landing — Full Assembly

---

## A. File Structure

```
app/
├── public/
│   └── assets/
│       └── coree.png
├── vercel.json              # SPA routing for /terms, /privacy
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProblemEmpathy.jsx
│   │   ├── BeforeAfter.jsx
│   │   ├── AIMealLogging.jsx
│   │   ├── ActionableFeedback.jsx
│   │   ├── RestaurantMap.jsx
│   │   ├── CommunityReport.jsx
│   │   ├── RealLifeScenarios.jsx
│   │   ├── ColiWarmth.jsx
│   │   ├── FAQ.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── Terms.jsx
│   │   └── Privacy.jsx
│   ├── motion/
│   │   ├── index.js
│   │   └── variants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## B. Component Architecture

```
App (Routes)
├── /          → LandingPage
│   ├── Header
│   └── main
│       ├── Hero
│       ├── ProblemEmpathy
│       ├── BeforeAfter
│       ├── AIMealLogging
│       ├── ActionableFeedback
│       ├── RestaurantMap
│       ├── CommunityReport
│       ├── RealLifeScenarios
│       ├── ColiWarmth
│       ├── FAQ
│       ├── FinalCTA
│       └── Footer
├── /terms     → Terms
└── /privacy   → Privacy
```

---

## C. Section Order

1. Header + Hero
2. Problem empathy
3. Before vs After (#features)
4. AI meal logging
5. Actionable feedback
6. Diet-friendly restaurant map (#map)
7. Community + report (#community)
8. Real-life use scenarios
9. Coli brand warmth
10. FAQ (#faq)
11. Final CTA
12. Footer

---

## D. Route Implementation

| Route | Component | Notes |
|-------|-----------|-------|
| `/` | LandingPage | Full landing |
| `/terms` | Terms | 이용약관 placeholder |
| `/privacy` | Privacy | 개인정보처리방침 placeholder |

**SPA fallback**: `vercel.json` rewrites all routes to `/` for client-side routing. For other hosts, add equivalent rewrite/redirect.

---

## E. Polish Checklist

- [x] All 12 sections in order
- [x] React Router for /terms, /privacy
- [x] Footer legal links use Link (client-side nav)
- [x] Header logo links to /
- [x] Semantic main, footer role
- [x] Mobile responsiveness
- [x] Framer Motion on sections
- [x] Tailwind design tokens
- [ ] `/assets/coree.png` present in public
- [ ] Verify nav anchors (#features, #map, #community, #faq)
- [ ] Test /terms, /privacy in dev and preview
