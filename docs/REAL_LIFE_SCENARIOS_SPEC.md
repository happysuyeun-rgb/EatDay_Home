# EATDAY Landing — Real-Life Scenarios Section Spec

---

## A. Strategy

**Purpose**: Help users imagine themselves using EATDAY in familiar daily situations. Situational, concise, visually stylish—not long persona storytelling.

**Principles**:
- One relatable situation line per card
- Mini UI overlays show app context (map, search, macro, menu)
- Premium, airy tone
- Horizontal scroll on mobile (swipe), grid on desktop

---

## B. Copy

| Scenario | Title | Situation |
|----------|-------|-----------|
| 1 | 회식이 잦은 직장인 | 내일 회식인데, 오늘 뭘 먹을까 |
| 2 | 학식·편의점 위주 대학생 | 편의점 도시락, 영양소가 궁금해 |
| 3 | 단백질 챙기는 운동러 | 오늘 단백질 부족한데 뭐 먹지 |
| 4 | 외식 중 흐름 유지 | 식당 메뉴판 보면서 선택 고민 |

| Element | Copy |
|---------|------|
| H2 | 이런 상황에서 쓰고 있어요 |
| Sub | 익숙한 일상 속에서 잇데이를 어떻게 쓰는지. |
| CTA | 시작하기 → |

---

## C. Layout

```
section
├── header (h2, sub)
└── card container
    ├── Mobile: horizontal scroll, snap, 280px cards
    └── Desktop: grid 2×2 (lg: 4 cols)
    └── per card
        ├── title
        ├── situation
        ├── mini overlay (oat bg, type-specific UI)
        └── CTA link
```

---

## D. Motion

| Element | Behavior |
|---------|----------|
| Cards | fade-up, scale 0.96→1, stagger 0.08s |
| Hover | y: -6, scale: 1.02 |
| Mini overlay | fade-up, delay 0.4 + i*0.08 |
| Macro bar (overlay) | width 0→68%, delay 0.6 |

---

## E. Code Reference

- `landing-react/src/components/RealLifeScenarios.jsx`

---

## F. Mobile Behavior

- Horizontal scroll, snap-x snap-mandatory
- Card width: 280px
- Swipe-friendly, scrollbar hidden
- CTA tap opens app
