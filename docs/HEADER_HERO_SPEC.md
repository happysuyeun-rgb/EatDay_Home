# EATDAY Landing — Header + Hero Section Spec

---

## A. UX Rationale

### Header
- **Sticky + translucent on scroll**: Top-of-page reads clean; on scroll, header gains subtle backdrop blur and border to maintain readability over content. Avoids jarring opaque bar.
- **Logo left, nav right**: F-pattern reading; brand first, actions and navigation in natural scan path. EATDAY (영문) for modern tech feel; 일관된 로고 사용.
- **Primary CTA right**: Highest-contrast action at end of nav flow. "무료로 시작하기" is direct, low-friction.
- **Mobile hamburger**: Single-tap access; transforms to X on open for clear affordance. Legal links (이용약관, 개인정보처리방침) stay in footer only—no header clutter.

### Hero
- **Editorial left, product right**: Copy establishes value; dashboard mockup proves it. Z-pattern: tagline → headline → subcopy → CTAs.
- **Line-by-line headline**: Builds anticipation; each line lands with subtle motion. "기록은 가볍게" then "식단 관리는 더 똑똑하게" creates a clear before/after.
- **Layered dashboard**: Main card + overlapping meal card reads as real app. Coli small and near card—warmth without dominating.
- **Floating chips**: Contextual in-app hints (kcal, deficiency, nearby spots) show product intelligence at a glance. Gentle drift = alive, not noisy.
- **CTA hierarchy**: Primary green, secondary text link. Hover lift on primary reinforces premium feel.
- **Bottom gradient**: Soft fade into ProblemEmpathy (oat bg) for seamless section flow.

---

## B. Copy Options

### Primary (implemented)
| Element | Copy |
|---------|------|
| Tagline | AI 식단 분석부터 맛집 지도까지, 잇데이 하나로 |
| Headline L1 | 기록은 가볍게, |
| Headline L2 | 식단 관리는 더 똑똑하게 |
| Subcopy | 오늘 먹은 것부터, 다음 한 끼 선택까지. |
| CTA Primary | 무료로 시작하기 |
| CTA Secondary | 기능 살펴보기 |

### Alternatives
| Element | Alt A | Alt B |
|---------|-------|-------|
| Tagline | 기록·분석·맛집까지, 하나로 | smarter diet, lighter effort |
| Headline | 가벼운 기록, 똑똑한 한 끼 | 한 끼 한 끼, 더 나은 선택 |
| Subcopy | AI가 분석하고, 맛집이 제안하고. | 기록만으로 충분해요. |

---

## C. Component Structure

```
Header
├── logo (a → #)
├── nav (hidden md:flex)
│   └── navLinks [#features, #map, #community, #faq]
├── cta (hidden md:inline)
└── mobile menu button + AnimatePresence drawer
    └── nav links + cta

Hero
├── gradient overlay (bottom fade)
├── grid (2-col desktop, stack mobile)
│   ├── left: copy block
│   │   ├── tagline (motion.p)
│   │   ├── h1 with line-by-line spans
│   │   ├── subcopy
│   │   └── cta group
│   └── right: dashboard block
│       ├── main card (nutrition + macro bars)
│       ├── meal card (overlapping)
│       ├── Coli avatar
│       └── floating chips (3)
```

---

## D. Code Reference

- `landing-react/src/components/Header.jsx`
- `landing-react/src/components/Hero.jsx`

---

## E. Animation Notes

### Header
- **Entrance**: `y: -20 → 0`, `opacity: 0 → 1`, 0.4s easeOut
- **Scroll state**: `scrolled` toggles at `scrollY > 24`; background `transparent → white/85`, border, shadow
- **Mobile menu**: `height: 0 → auto`, `opacity: 0 → 1`, 0.25s; hamburger bars → X (top/bottom rotate 45°/-45°, middle fade)

### Hero — Copy
- **Tagline**: fadeUp, 0.5s
- **Headline L1**: fadeUp, delay 0.08s, 0.6s, ease [0.22,0.61,0.36,1]
- **Headline L2**: fadeUp, delay 0.2s, 0.6s
- **Subcopy**: fadeUp, delay 0.35s
- **CTAs**: fadeUp, delay 0.45s

### Hero — Dashboard
- **Container**: scale 0.98→1, opacity 0→1, delay 0.2s, 0.7s
- **Main card**: y 24→0, scale 0.96→1, delay 0.35s, 0.6s
- **Meal card**: opacity, y, x, delay 0.55s
- **Coli**: opacity, scale 0.8→1, delay 0.9s
- **Macro bars**: width 0→pct%, stagger 0.08s from 0.8s

### Hero — Chips
- **Entrance**: opacity 0→1, x 16→0, per-chip delay 0.6 / 0.8 / 1s
- **Float**: `y: [0, -4, 0]`, 3.5–4.3s, repeat Infinity, easeInOut, delay 1.2–1.8s

### CTA Hover
- **Primary**: `-translate-y-1.5`, `shadow-[0_12px_32px_rgba(74,124,89,0.28)]`, 0.3s easeOut

### Reduced Motion
- `prefers-reduced-motion` in `index.css` forces `animation-duration: 0.01ms`, `transition-duration: 0.01ms` globally.

---

## Mobile Adaptation

| Element | Behavior |
|---------|----------|
| Header | Full-width; hamburger replaces nav; CTA in drawer |
| Hero layout | Stack: dashboard first (order-1), copy second (order-2) |
| Dashboard | Single main card; meal card -left-4; chips right 2–6% to avoid overflow |
| Chips | Smaller text (text-xs), tighter padding |
| Headline | text-4xl, same line breaks |
| Section fade | Same gradient; ProblemEmpathy bg-oat continues |
