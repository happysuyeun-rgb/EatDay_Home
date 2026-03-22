# EATDAY Landing — Community + Report Section Spec

---

## A. Concept Summary

**Purpose**: Explain how EATDAY supports **continuity** through social encouragement and personal insight. Not gamification. Not competition-first.

**Principles**:
- Community: sharing, likes/comments, featured post—feels supportive, not competitive
- Report: balance status, macro bars, personalized feedback—insight, not scores
- Calm, practical, sustained-habit framing

---

## B. Copy

| Element | Copy |
|---------|------|
| H2 | 혼자 기록하면 끊기기 쉽고, 함께 보면 조금 더 오래 갑니다 |
| Body | 식단을 공유하고, 일일 리포트로 내 흐름을 확인해보세요. |
| Feed label | 커뮤니티 |
| Featured badge | 오늘의 인기 |
| Report label | 리포트 |
| Tabs | 오늘 · 이번 주 |
| Daily summary | 단백질 섭취가 목표의 92%예요. 저녁에 가볍게 보충하면 좋아요. |
| Weekly summary | 목표 7일 중 5일 기록했어요. 꾸준히 잘 이어가고 있어요. |

---

## C. Layout

```
section#community
├── header (h2, body)
└── grid (2-col desktop)
    ├── Left: Community
    │   ├── h3 "커뮤니티"
    │   └── 3 × feed card
    │       ├── thumb, featured badge (if any)
    │       ├── meal name
    │       └── kcal · 좋아요 n · 댓글 n
    └── Right: Report
        ├── h3 "리포트"
        ├── tab bar (오늘 | 이번 주)
        └── content
            ├── Daily: count, feedback, macro bars
            └── Weekly: count, trend chart
```

---

## D. Motion

| Element | Behavior |
|---------|----------|
| Header | fade-up |
| Feed cards | slide from left, stagger 0.1s |
| Feed hover | y: -3 |
| Report card | slide from right |
| Tab switch | instant content swap |
| CountUp | ease-out, 800ms |
| Macro bars | width 0→pct%, stagger 0.08s |
| Weekly chart | bar height 0→pct%, stagger 0.05s |

---

## E. Code Reference

- `landing-react/src/components/CommunityReport.jsx`

---

## F. Mobile

- Stack: Community above Report
- Feed cards: full width
- Report: full width, same tab layout
- Chart: compact bar heights
