# EATDAY Landing — Motion System

---

## A. Motion Philosophy

**Principles**:
- **Calm but impactful**: Motion supports content, never competes with it.
- **Premium feel**: Smooth, refined transitions—no jarring or cheap effects.
- **Scroll-immersive**: Sections reveal as the user scrolls; scroll-linked scenes where appropriate.
- **Consistent**: Same patterns across sections create a cohesive experience.
- **Responsive & accessible**: Respect `prefers-reduced-motion`; motion is enhancement, not requirement.

**Avoid**:
- Noisy parallax or chaotic movement
- Aggressive bounces or overshoots
- Long, repetitive animations
- Motion that obscures or delays critical content

---

## B. Animation Token System

### Duration Tokens

| Token | Value | Use |
|-------|-------|-----|
| `durationFast` | 0.2s | Micro-interactions (hover, focus) |
| `durationStandard` | 0.3s | Standard transitions |
| `durationMedium` | 0.45–0.5s | Section reveals, card entrance |
| `durationSlow` | 0.6–0.7s | Hero, headline, dramatic reveals |
| `durationVerySlow` | 1s+ | Scroll-linked, ambient (breathing) |

### Easing Tokens

| Token | Value | Use |
|-------|-------|-----|
| `easeOut` | cubic-bezier(0.22, 0.61, 0.36, 1) | General purpose, feels natural |
| `easeInOut` | ease-in-out | Symmetric transitions |
| `easeOutExpo` | cubic-bezier(0.16, 1, 0.3, 1) | Snappy finishes |

### Stagger

| Token | Value | Use |
|-------|-------|-----|
| `staggerTight` | 0.05–0.06s | List items, bars |
| `staggerStandard` | 0.08–0.1s | Cards, list items |
| `staggerLoose` | 0.12–0.15s | Major blocks |

---

## C. Section Reveal Presets

### fadeUp (default)
```js
{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }
```

### fadeUpSlow
```js
{ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
```

### scaleIn
```js
{ initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } }
```

### slideLeft / slideRight
```js
// Left
{ initial: { opacity: 0, x: -24 }, animate: { opacity: 1, x: 0 } }
// Right
{ initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 } }
```

### staggerChildren
```js
{ staggerChildren: 0.08, delayChildren: 0.1 }
```

### Scroll-linked (ProblemEmpathy style)
- `useScroll` + `useTransform` for opacity/y per line
- First item visible at progress 0; others reveal sequentially

---

## D. Hover Presets

### Card
```js
whileHover={{ y: -4, transition: { duration: 0.2 } }}
// + shadow via CSS: hover:shadow-[var(--shadow-hover)]
```

### Button (primary)
```js
whileHover={{ y: -2 }}
// + hover:shadow-[0_8px_24px_rgba(74,124,89,0.25)]
```

### Chip / filter
```js
whileTap={{ scale: 0.97 }}
```

### Link
```js
// CSS: hover:text-[var(--accent-leaf)] transition-colors duration-200
```

---

## E. Reduced-Motion Rules

### Global (index.css)
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Component-level
- Use `useReducedMotion()` from Framer Motion when available
- For scroll-linked sections: when reduced, show all content immediately
- Avoid `repeat: Infinity` for non-essential motion
- CTA hover lift is acceptable (user-initiated)

### Fallback strategy
1. CSS `prefers-reduced-motion` shortens all durations
2. Framer Motion respects this; animations run but complete almost instantly
3. Scroll-linked opacity: consider showing all at opacity 1 when reduced

---

## F. Implementation Snippets

### Framer Motion Variants

Import from `@/motion` or `src/motion`:

```js
import { fadeUp, fadeUpSlow, scaleIn, staggerContainer, transition, hover } from "@/motion";

// Usage
<motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} />
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  {items.map(...)}
</motion.div>
<motion.a whileHover={hover.button}>CTA</motion.a>
```

### useInView Pattern

```js
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.2 });

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5 }}
>
```

### Sticky-Scroll Guidelines
- Use Framer Motion `useScroll` + `useTransform` for scroll-linked content
- Section height: 250vh–320vh for immersive sticky scroll
- Ensure first content visible at scrollProgress 0
- Sticky top offset: account for fixed header (72px)

---

## G. GSAP Usage Rules

**Use GSAP only when**:
- Framer Motion cannot achieve the effect (complex ScrollTrigger pinning, scrub)
- Pin + scrub sequences with multiple phases
- Timeline-based orchestration across many elements

**Prefer Framer Motion for**:
- Section reveals, hover, tap
- Simple scroll-linked opacity/y
- Accordion, tabs, AnimatePresence

**If using GSAP**:
- Add as optional dependency
- Keep ScrollTrigger scenes isolated
- Respect `prefers-reduced-motion` (disable or simplify)
