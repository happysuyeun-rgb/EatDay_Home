# EATDAY Landing — Actionable Feedback Section Spec

---

## A. Concept

**Purpose**: Show the core differentiator—EATDAY does not stop at analysis. It suggests **what to do next**.

**Narrative flow**: Today's summary → Deficiency state → Recommendation (integrated, not gamified). The recommendation expands naturally from the deficiency, like a logical next step.

**Tone**: Practical, calm, modern. Recommendation feels like friendly advice, not a reward or challenge.

---

## B. Copy

### Header
| Element | Copy |
|---------|------|
| Label | AI 피드백 |
| H2 | 분석만이 아니라, 다음 선택까지 |
| Body | 탄단지 비율과 부족한 영양소를 확인하고, 지금 먹으면 좋은 음식을 추천해드려요. |

### Feedback card
| Block | Copy |
|-------|------|
| Summary | 오늘 식단 요약 / 3끼 · 1,240 kcal / 탄 45% · 단 28% · 지 27% |
| Deficiency | 단백질이 조금 부족해요 |
| Recommendation label | 추천 |
| Recommendation body | 다음 한 끼는 그릭요거트나 닭가슴살 샐러드로 가볍게 채워보세요 |
| Balance | 오늘 균형 / 보완 필요 |

---

## C. UI Structure

```
section
├── header (label, h2, sub)
└── main card
    ├── 1. Summary block (border-bottom)
    │   ├── "오늘 식단 요약"
    │   └── "3끼 · 1,240 kcal" + "탄 45% · 단 28% · 지 27%"
    ├── 2. Deficiency
    │   └── "단백질이 조금 부족해요"
    ├── 3. Recommendation block
    │   ├── left accent border
    │   ├── "추천" label
    │   ├── recommendation text
    │   └── Coli (tiny, 40×40)
    └── 4. Balance status (border-top)
        ├── "오늘 균형" + "보완 필요"
        └── progress bar
```

---

## D. Motion / Interaction

### Sequence (on inView)
1. **0.25s**: Card container fade-up
2. **0.35s**: Summary block
3. **0.5s**: Deficiency (fade + x -8→0)
4. **0.65s**: Recommendation block (height 0→auto, opacity)
5. **0.85s**: Balance status
6. **0.9s**: Coli icon
7. **0.95s**: Balance bar width

### Interactions
- No hover gamification
- Recommendation block: soft left border accent (visual only)
- Coli: static, supportive, 40×40px

---

## E. Code Reference

- `landing-react/src/components/ActionableFeedback.jsx`

---

## F. Mobile Behavior

- Card: full width within container, p-6
- Stack unchanged (summary → deficiency → recommendation → balance)
- Coli: same size, right of text
- Balance bar: full width
