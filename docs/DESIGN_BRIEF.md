# EATDAY Landing Page — Creative Direction & Implementation Brief

---

## A. Creative Direction Summary

**Positioning**: EATDAY is a calm, premium, AI-powered diet management platform. The landing page communicates sophistication, clarity, and emotional resonance—not gamification, mascots, or generic startup energy.

**User Journey**:  
*"this feels fresh"* → *"this understands my problem"* → *"this product is actually smart"* → *"this solves real diet pain points"* → *"this feels calm and easy to use"* → *"I want to try it"*

**Core Messages**:
1. Less effort to record meals
2. More clarity in what to eat next
3. Support for real-life eating (dining out)
4. Sustainable use through community and reports

**Coli**: Supporting brand element only—never the hero. Subtle presence in feedback and CTA moments.

---

## B. Design System

### Colors

| Token | Value | Use |
|-------|-------|-----|
| `--bg-cream` | #FAF9F7 | Primary background |
| `--bg-oat` | #F5F3EF | Section alternates |
| `--bg-sand` | #EDEAE4 | Subtle contrast |
| `--text-primary` | #1A1A1A | Headlines, body |
| `--text-secondary` | #5C5C5C | Muted copy |
| `--text-tertiary` | #8A8A8A | Captions |
| `--accent-leaf` | #4A7C59 | Primary CTA, links |
| `--accent-forest` | #2D5A3D | Strong emphasis |
| `--accent-lime` | #7FB069 | Soft highlights |
| `--accent-blush` | #E8DED5 | Tiny supporting details |
| `--border` | rgba(0,0,0,0.06) | Card borders |
| `--border-soft` | rgba(0,0,0,0.04) | Dividers |

### Typography

- **Font**: Pretendard, -apple-system, system-ui
- **H1**: 44–52px, 700–800, letter-spacing -0.02em, line-height 1.15
- **H2**: 28–36px, 700, letter-spacing -0.01em
- **H3**: 20–24px, 600
- **Body**: 16–18px, 400–450, line-height 1.6
- **Caption**: 13–14px, 500
- **Editorial headline**: large, generous line spacing, short lines

### Spacing

- Section gap: 120px desktop, 80px mobile
- Container max: 1200px
- Container padding: 24px
- Card padding: 24–32px
- Element gaps: 8, 12, 16, 24, 32, 48

### Card Style

- Background: white or rgba(255,255,255,0.9)
- Border-radius: 20–24px
- Border: 1px solid var(--border)
- Shadow: 0 4px 24px rgba(0,0,0,0.04)
- Hover: subtle lift, shadow bloom

### Buttons

- **Primary**: leaf green bg, white text, 16px, 600, padding 16px 32px
- **Secondary**: transparent, leaf border, leaf text
- Hover: soft lift + shadow
- Border-radius: 16px

### Iconography

- Line icons, 1.5px stroke
- Minimal, calm
- No playful or cartoon style

---

## C. Section-by-Section Plan

### Section 1 — Hero

| Item | Spec |
|------|------|
| **Purpose** | Immediate brand desire, clarity, intrigue |
| **Layout** | Left: headline, subcopy, CTA. Right: layered dashboard mockup + floating chips |
| **Copy** | 헤드라인: "기록은 가볍게, 식단 관리는 더 똑똑하게" / 서브: "오늘 먹은 것부터, 다음 한 끼 선택까지" / 태그: AI 식단 분석부터 맛집 지도까지, 잇데이 하나로 |
| **UI** | App cards, chips: 오늘 1,240 kcal / 단백질 부족 / 근처 고단백 맛집 3곳 |
| **Interaction** | CTA hover lift, card micro-tilt |
| **Animation** | Line-by-line headline reveal, subcopy fade-up, chips soft drift, dashboard assemble |
| **Mobile** | Stack, 1 key screen + 2 chips |

---

### Section 2 — Problem Empathy

| Item | Spec |
|------|------|
| **Purpose** | Deep emotional understanding |
| **Layout** | Sticky scroll, one sentence at a time |
| **Copy** | "입력에 지쳐 포기한 적 있잖아요." / "외식하면 식단 관리가 흐트러지고." / "숫자만 보여줘서 뭘 먹어야 할지 모르고." / "선택의 순간에선 언제나 혼자였죠." |
| **UI** | Centered text, optional blurred UI fragments in background |
| **Animation** | Sticky, sentence-by-sentence fade-in, previous softens |
| **Mobile** | Shorter lines, tighter sticky |

---

### Section 3 — Before vs After

| Item | Spec |
|------|------|
| **Purpose** | Product advantage transformation |
| **Layout** | Split or vertical comparison |
| **Copy** | 기존: 수동 검색·g 단위 입력·추상적 경고·외식 시 공백 / EATDAY: 검색·사진 기록·자동 영양·실행 가능한 제안·근처 맛집·메뉴 컨텍스트 |
| **Animation** | Old → new transition, strike-through friction, green accent on EATDAY |
| **Mobile** | Stacked sequence |

---

### Section 4 — AI Meal Logging

| Item | Spec |
|------|------|
| **Purpose** | Easy, modern recording |
| **Layout** | Left copy, right app mockup |
| **Copy** | "입력은 줄이고, 기록은 더 정확하게." / 검색만으로 칼로리·탄단지 정리 |
| **Animation** | Typed search demo, result card, nutrition bars grow |
| **Mobile** | Mockup dominant, compact copy |

---

### Section 5 — Actionable Feedback

| Item | Spec |
|------|------|
| **Purpose** | Differentiator: next-step guidance |
| **Layout** | Central feedback card, supporting text |
| **Copy** | "분석만이 아니라, 다음 선택까지." / 오늘 식단 요약 → 부족 항목 → 추천: 그릭요거트, 닭가슴살 샐러드 |
| **Coli** | Small helper near recommendation |
| **Animation** | Summary → deficiency → recommendation expand |
| **Mobile** | Stacked cards |

---

### Section 6 — Diet-Friendly Restaurant Map

| Item | Spec |
|------|------|
| **Purpose** | Real-world utility |
| **Layout** | Map center, copy + filter chips one side, list other |
| **Copy** | "외식 중에도 식단 흐름을 이어가세요." / 저칼로리·고단백·비건 |
| **Animation** | Map zoom-in, pins appear, card expands on selection |
| **Mobile** | Swipeable cards + compact map |

---

### Section 7 — Community + Report

| Item | Spec |
|------|------|
| **Purpose** | Sustained habit, non-gamified |
| **Layout** | Left feed, right report card |
| **Copy** | "혼자보다 같이, 숫자만큼 인사이트도." |
| **Animation** | Feed slide-in, report numbers count, chart fill |
| **Mobile** | Stacked |

---

### Section 8 — Real-Life Scenarios

| Item | Spec |
|------|------|
| **Purpose** | Self-identification |
| **Layout** | Horizontal scenario cards |
| **Copy** | 회식 많은 직장인 / 학식·편의점 대학생 / 고단백 운동러 / 외식 중 흐름 유지 |
| **Animation** | Perspective slide, selected card enlarges |
| **Mobile** | Swipe carousel |

---

### Section 9 — Coli Brand Warmth

| Item | Spec |
|------|------|
| **Purpose** | Brand warmth, restrained |
| **Layout** | Clean interlude, one Coli visual, small assist states |
| **Copy** | "기록과 피드백, 리포트까지. 필요한 순간마다 함께합니다." |
| **Animation** | Breathing float, soft spotlight |
| **Mobile** | Simpler visual, stronger copy |

---

### Section 10 — FAQ

| Item | Spec |
|------|------|
| **Layout** | Premium accordion |
| **Questions** | 음식 기록 / 맛집 찾기 / 무료 여부 / 기록 보관 / 커뮤니티 |
| **Animation** | Height + opacity expand, icon rotate |
| **Mobile** | Full-width accordion |

---

### Section 11 — Final CTA

| Item | Spec |
|------|------|
| **Copy** | "건강한 습관은 거창한 결심보다, 가벼운 기록에서 시작됩니다." |
| **Animation** | Statement drift, chips fade, CTA warm pulse |
| **Mobile** | Clear hierarchy |

---

## D. Motion System

### Entrance Patterns
- `fadeUp`: opacity 0→1, y 20→0, duration 0.6s
- `fadeUpBlur`: + filter blur(8px)→0
- `stagger`: delay 0.08s per child
- `maskReveal`: clip-path inset
- `scaleIn`: scale 0.98→1

### Scroll Patterns
- Sticky scroll with opacity/blur transitions
- IntersectionObserver for reveal
- ScrollTrigger for pinned sections (GSAP)

### Hover Patterns
- Card: translateY(-4px), shadow bloom
- Button: translateY(-2px)
- Chip: subtle scale 1.02

### Transitions
- Standard: 0.3s ease-out
- Slow: 0.5s ease-out
- Spring: stiffness 100, damping 20

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## E. Component Architecture

```
App
├── Header
├── Hero
├── ProblemEmpathy
├── BeforeAfter
├── AIMealLogging
├── ActionableFeedback
├── RestaurantMap
├── CommunityReport
├── RealLifeScenarios
├── ColiWarmth
├── FAQ
├── FinalCTA
└── Footer
```

Shared: `Container`, `Section`, `Button`, `Card`, `FloatingChip`

---

## F. Implementation Guidance

1. Semantic HTML, ARIA where needed
2. CSS variables for design tokens
3. Framer Motion variants for consistency
4. Lazy-load below-fold sections
5. Image optimization (WebP, srcset)
6. Mobile-first responsive
7. CLS minimization
8. `prefers-reduced-motion` respected

---

## G. Final Notes — Avoid

- Generic startup template look
- Overly corporate or cute tone
- Excessive emojis
- Gamification / 콜리 키우기 / 레벨업 / 보상박스 강조
- Dark cyber-tech
- Noisy glassmorphism
- Chaotic parallax
- Aggressive CTA placement
- Fake empty placeholders
