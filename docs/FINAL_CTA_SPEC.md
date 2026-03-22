# EATDAY Landing — Final CTA Section Spec

---

## A. Rationale

**Purpose**: End the page with emotional calm and a strong but gentle conversion moment.

**Tone**: Warm, grounded, non-salesy, quietly motivating. Not pushy or flashy.

---

## B. Copy

| Element | Copy |
|---------|------|
| Headline | 건강한 습관은 거창한 결심보다, 가벼운 기록에서 시작됩니다. |
| Supporting | 오늘 식단부터, 잇데이로 부담 없이 시작해보세요. |
| CTA | 무료로 시작하기 |
| Chips | AI 식단 기록 · 맛집 지도 · 일일 리포트 |

---

## C. Structure

```
section
├── soft radial gradient (bottom)
└── content (centered)
    ├── headline (h2)
    ├── supporting copy (p)
    ├── product chips (3 × pill)
    └── CTA block
        ├── primary button
        └── subtle Coli (40×40)
```

---

## D. Motion

| Element | Behavior |
|---------|----------|
| Headline | fade-up, y 24→0, 0.6s |
| Supporting | fade-up, delay 0.15s |
| Chips | fade-in, delay 0.3s |
| CTA button | fade-up, delay 0.35s; hover: y -2, shadow bloom |
| Coli | fade + scale, delay 0.5s |

---

## E. Code Reference

- `landing-react/src/components/FinalCTA.jsx`

---

## F. Mobile Adaptation

- Padding: py-28 md:py-36
- Headline: text-2xl on mobile
- Chips: flex-wrap, centered
- CTA: full tap target (h-14)
- Coli: same size, not intrusive
