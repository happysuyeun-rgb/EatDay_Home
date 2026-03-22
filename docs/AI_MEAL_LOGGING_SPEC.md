# EATDAY Landing — AI Meal Logging Section Spec

---

## A. Product Storytelling Intent

**Purpose**: Show that meal recording is **fast, easy, and believable**. This section must make the product feel real—no empty phone placeholders.

**Narrative**: "Complex input" → "One search" → "Automatic calories and macros" → "Saved." The user sees a realistic flow: type a food name, get an instant result card with nutrition, watch it save, and see the daily total update.

**Emotional beat**: Less manual effort. Simple. Modern. Practical. Soft health-tech.

---

## B. Copy

### Headline & Sub
| Element | Copy |
|---------|------|
| Label | 식단 기록 |
| H2 | 복잡한 입력 대신,<br />기록이 바로 남는 방식 |
| Body | 검색 한 번이면 칼로리와 탄단지가 자동으로 정리됩니다. |

### UI Labels
| Element | Copy |
|---------|------|
| Search placeholder | 먹은 음식 검색 |
| Demo query | 닭가슴살 샐러드 |
| Result serving | 1인분 |
| Saved state | 저장됨 |
| Daily summary | 오늘 기록 |

---

## C. UI Spec

### Search Input
- Label: "먹은 음식 검색" (caption)
- Typed demo: "닭가슴살 샐러드"
- Blinking cursor during typing
- Background: oat, border, rounded-xl

### Food Result Card
- Thumbnail: 56×56 rounded-lg (lime tint placeholder)
- Food name: bold, 14px
- Serving: caption
- Calorie: large, leaf green
- Saved badge: "저장됨" pill, appears after macro bars

### Macro Bars
- 탄수화물 / 단백질 / 지방
- Bar + value (g)
- Colors: lime, leaf, amber

### Daily Summary
- "오늘 기록"
- 1,240 / 2,000 kcal
- Current value in leaf

---

## D. Code Reference

- `app/src/components/AIMealLogging.jsx`

---

## E. Animation Notes

### Sequence (on inView)
1. **0–0.6s**: Copy fades in
2. **0.6s+**: Typed search, ~80–120ms per char
3. **+0.4s after typing**: Result card appears (opacity, y, scale)
4. **+0.6s**: Macro bars animate (opacity, x, bar width)
5. **+1.2s**: "저장됨" badge appears
6. **+0.5s**: Daily summary fades in

### Micro-interactions
- Result card: `whileHover` y: -2
- Cursor: opacity [1, 0, 1], 1s, infinite (while typing)
- Bar growth: width 0→pct%, 0.5s, ease-out

### Phase state
- 0: typing
- 1: result card visible
- 2: macro bars visible
- 3: saved badge visible

---

## F. Mobile Layout

| Breakpoint | Layout |
|------------|--------|
| &lt; md | Stack: copy above mockup |
| ≥ md | Grid 2-col: copy left, mockup right |

- Mockup: max-w-[340px], centered on mobile
- Typography: H2 text-2xl on mobile, text-3xl on desktop
- Touch: result card tap has no special behavior; hover is desktop-only
