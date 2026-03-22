# EATDAY Landing — Before vs After Section Spec

---

## A. Concept Summary

**Purpose**: Turn the pain points from Problem Empathy into clear product differentiation. Not a static table—a **transformation narrative** that visually moves from friction (기존) to resolution (EATDAY).

**Approach**: Side-by-side comparison with **transition choreography**:
1. Before card enters from left—greyed, strike-through, “friction” feel
2. Arrow pulses between the two, signaling “transformation”
3. EATDAY card enters from right—green accent, check marks, “resolved” feel
4. After full reveal, Before card softens (overlay) to de-emphasize
5. EATDAY card gets hover lift + shadow for interactivity

**Tone**: Product storytelling, calm, confident. “Same goal, different way.”

---

## B. Copy

### Headline
| Element | Copy |
|---------|------|
| H2 | 왜 잇데이인가요 |
| Sub | 같은 목표, 다른 방식입니다. |

### Before (기존 식단 앱)
| # | Korean |
|---|--------|
| 1 | 음식마다 수동 검색 |
| 2 | g 단위 직접 입력 |
| 3 | 추상적인 경고만 |
| 4 | 외식하면 공백 |

### After (잇데이)
| # | Korean |
|---|--------|
| 1 | 검색·사진으로 기록 |
| 2 | 칼로리·영양소 자동 계산 |
| 3 | 실행 가능한 다음 선택 제안 |
| 4 | 근처 맛집·메뉴 컨텍스트 |

---

## C. Component Tree

```
BeforeAfter
├── section#features
│   ├── headline block
│   │   ├── h2 "왜 잇데이인가요"
│   │   └── p "같은 목표, 다른 방식입니다."
│   └── transformation container (flex-col md:grid 3-col)
│       ├── Before card (motion.div)
│       │   ├── overlay (softens after reveal)
│       │   ├── h3 "기존 식단 앱"
│       │   └── ul > 4× motion.li (circle + strike-through)
│       ├── transition arrow (motion.div)
│       │   └── arrow (↓ mobile, → desktop) + "전환"
│       └── EATDAY card (motion.div)
│           ├── glow accent (gradient)
│           ├── h3 "잇데이"
│           └── ul > 4× motion.li (check bullet + text)
```

---

## D. Animation Plan

| Element | Trigger | Animation |
|---------|---------|-----------|
| Headline | inView | opacity 0→1, y 20→0, 0.5s |
| Before card | inView | opacity 0→1, x -24→0, delay 0.1s, 0.6s |
| Before items | inView | stagger 0.1s, opacity + x -12→0 |
| Arrow | inView | opacity 0→1, scale 0.8→1, delay 0.5s |
| Arrow pulse | after reveal | opacity [0.6, 1, 0.6], 2.5s, infinite |
| EATDAY card | inView | opacity 0→1, x 24→0, scale 0.98→1, delay 0.3s |
| EATDAY items | inView | stagger 0.1s from 0.45s, opacity + x 12→0 |
| Before overlay | after reveal | opacity 0→0.7, delay 0.8s (softens card) |
| EATDAY hover | hover | -translate-y-1, shadow bloom, 0.3s |

---

## E. Code Reference

- `landing-react/src/components/BeforeAfter.jsx`

---

## F. Mobile Layout

| Breakpoint | Layout |
|------------|--------|
| &lt; md | Flex column: Before → ↓ → EATDAY |
| ≥ md | Grid 3-col: Before \| → \| EATDAY |

- Arrow: ↓ on mobile, → on desktop
- Cards: Full width on mobile, equal columns on desktop
- Padding: p-6 mobile, p-8 desktop
