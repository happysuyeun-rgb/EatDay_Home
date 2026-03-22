# EATDAY Landing — Problem Empathy Section Spec

---

## A. Narrative Intent

The Problem Empathy section establishes *"this understands my problem"* before the product solution. It is not a feature grid—it is an editorial, scroll-driven story.

**Emotional arc**: Each sentence surfaces one pain point. As the user scrolls, prior lines soften and recede; the current line commands attention. By the end, the user has mentally nodded to four familiar frustrations, primed for the Before/After solution that follows.

**Tone**: Calm, direct, second-person. No accusation ("you failed") or melodrama. Simple declaratives that feel like a friend who gets it.

---

## B. Copy Set

### Primary (implemented)

| # | Pain point | Korean copy |
|---|------------|-------------|
| 1 | Logging meals is tedious | 식단 입력하다 지쳐 포기한 적 있죠. |
| 2 | Dining out breaks diet continuity | 외식하는 날엔 식단 관리가 흐트러지고. |
| 3 | Abstract numbers don't guide next steps | 숫자만 보여줘서, 다음엔 뭘 먹어야 할지 모르고. |
| 4 | Apps add effort, not real solutions | 앱은 쓰는데, 정작 해결은 안 됐어요. |

### Alternatives

| # | Alt A | Alt B |
|---|-------|-------|
| 1 | 입력에 지쳐 포기한 적 있잖아요. | 매끼 검색하고 g 단위 맞추다 지쳤죠. |
| 2 | 외식하면 식단 관리가 흐트러지고. | 밖에서 먹는 날엔 어떻게 해야 할지 몰랐어요. |
| 3 | 숫자만 보여줘서 뭘 먹어야 할지 모르고. | 칼로리는 쌓이는데, 다음 선택은 여전히 막막하고. |
| 4 | 선택의 순간에선 언제나 혼자였죠. | 앱은 만들어뒀는데, 해결은 안 됐죠. |

---

## C. Layout Structure

```
section (min-h: 250vh mobile, 320vh desktop)
├── background layer (absolute, blurred radial gradients)
│   ├── blush blob (top-center)
│   └── leaf tint blob (bottom-right)
└── sticky container (top: 72px, h: calc(100vh - 72px))
    └── centered content (max-w-2xl)
        └── 4 × motion.p (space-y-12 md:space-y-16 lg:space-y-20)
```

- **Tall section**: Creates scroll “room” so each line has its own reveal window.
- **Sticky center block**: Text stays fixed in viewport while user scrolls; scroll progress drives opacity/y per line.
- **Whitespace**: Large gaps between lines (48–80px) for editorial rhythm.

---

## D. Code Reference

- `landing-react/src/components/ProblemEmpathy.jsx`

---

## E. Animation Specification

### Scroll mapping (scrollYProgress 0 → 1)

| Line | Active window | Fade-in | Soften (prior) |
|------|---------------|---------|----------------|
| 0 | 0.08–0.32 | 0→0.08 | 0.32→0.5 |
| 1 | 0.32–0.58 | 0.2→0.32 | 0.58→0.7 |
| 2 | 0.52–0.78 | 0.4→0.52 | 0.78→0.9 |
| 3 | 0.72–0.95 | 0.6→0.72 | 0.95→1 |

### useTransform mappings

- **Opacity**: `[enterStart, enterEnd, holdStart, softenStart, softenEnd]` → `[0, 1, 1, 0.4, 0.25]` (last line holds at 0.4)
- **Y**: `[scrollStart, scrollEnd]` → `[24, 0]` for subtle upward reveal per line

### Typography

- Mobile: `text-xl` (20px)
- Tablet: `text-3xl` (30px)
- Desktop: `text-4xl` (36px)
- Line-height: 1.4–1.5

### Background

- Soft radial blurs: `bg-[var(--accent-blush)]/30`, `bg-[var(--accent-leaf)]/5`
- `blur-3xl` for no sharp edges
- Non-interactive, low visual weight

---

## F. Mobile Simplification

| Element | Desktop | Mobile |
|---------|---------|--------|
| Section height | 320vh | 250vh |
| Text size | 36px | 20px |
| Line spacing | 80px | 48px |
| Sticky top | 72px | 72px |

Shorter scroll distance on mobile reduces fatigue while preserving the sequential reveal.

---

## G. Performance Considerations

1. **useScroll + useTransform**: Framer Motion uses `requestAnimationFrame`; scroll-linked values update on each frame. No resize/scroll listeners managed manually.

2. **GPU-friendly**: `opacity` and `transform` (y) are composited; no layout thrash.

3. **Reduced motion**: `prefers-reduced-motion` in `index.css` shortens animation durations globally. Scroll-driven behavior remains user-initiated; consider a future enhancement to show all lines at once when reduced motion is preferred.

4. **Background blurs**: `blur-3xl` can be costly on low-end devices. If needed, replace with solid gradients or remove on mobile.

5. **No GSAP**: Implemented with Framer Motion only; no additional dependency.
