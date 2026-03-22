# EATDAY Landing — Coli Brand Warmth Section Spec

---

## A. Brand Rationale

**Purpose**: Add memorability and warmth without making the page childish or mascot-first.

**Principles**:
- Coli is NOT the main product
- Coli is NOT gamification, growth, or rewards
- Coli is a subtle companion that softens the experience of logging and understanding food data

---

## B. Copy

| Element | Copy |
|---------|------|
| H2 | 콜리는 잇데이의 기록 파트너입니다 |
| Body | 필요한 순간, 조금 더 편안하게 식단 관리를 이어갈 수 있도록 돕습니다. |
| Hints | 기록 안내 · 피드백 안내 · 리포트 안내 |

---

## C. Layout

```
section
├── spotlight gradient (radial, lime tint, soft)
└── content block (centered)
    ├── Coli visual (circle, lime bg)
    │   ├── image or fallback emoji
    │   └── 3 × tiny hint (top, right, bottom)
    ├── h2
    └── p
```

---

## D. Motion

| Element | Behavior |
|---------|----------|
| Spotlight | static gradient |
| Coli | fade + scale 0.96→1; y [0, -4, 0] breathing, 4s, infinite |
| Hints | fade + scale 0.9→1, stagger delay 0.5 / 0.7 / 0.9 |
| Copy | fade-up, delay 0.2 / 0.3 |

---

## E. Code Reference

- `landing-react/src/components/ColiWarmth.jsx`

---

## F. Mobile Simplification

- Right hint hidden on small screens (sm:inline)
- Coli size: w-20 h-20 on mobile, w-24 h-24 on desktop
- Copy: text-lg on mobile, text-xl on desktop
