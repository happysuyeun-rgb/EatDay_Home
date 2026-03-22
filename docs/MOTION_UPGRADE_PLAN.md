# EATDAY 랜딩 — 모션·인터랙션 업그레이드 계획

**목표**: 정적·평면감을 줄이고, 스크롤 인지형·프리미엄한 모션으로 몰입감 강화  
**원칙**: 과하지 않게, 성능·모바일·접근성 우선

---

## A. Global Motion Philosophy

### 역할

1. **섹션 페이싱**: 스크롤할 때마다 “다음 장면”으로 넘어가는 느낌
2. **제품 이해**: 기록 → 결과 → 피드백 → 지도 등 **순서**가 눈에 보이게
3. **기대감**: 다음 요소가 살짝 늦게 나타나 “무슨 일이 일어날지” 읽히게
4. **톤**: 차분·고급 — 스프링 과장, 번쩍이는 효과 금지

### 설계 원칙

| 원칙 | 설명 |
|------|------|
| **한 번에 하나의 주목** | 같은 뷰포트에서 동시에 크게 움직이는 요소 2~3개 이하 |
| **의미 있는 지연** | stagger는 0.05~0.15s — 읽기 리듬을 해치지 않게 |
| **스크롤 트리거 우선** | 대부분 `inView` 또는 `scrollProgress` — 자동 루프는 제한적 |
| **GPU 친화** | `transform`, `opacity` 위주; `width` 애니메이션은 짧게 또는 `scaleX` 대안 검토 |
| **모바일 단순화** | 동일 패턴이면 duration -10~15%, stagger 줄이기 |

### 기존 문서와의 관계

- `docs/MOTION_SYSTEM.md`의 duration / easing / stagger 토큰을 **기준**으로 사용
- 본 문서는 **섹션별 적용**과 **업그레이드 우선순위**를 보완

---

## B. Section-by-Section Motion Recommendations

### Header

| 요소 | 모션 | 비고 |
|------|------|------|
| 진입 | y -12→0, opacity | 짧게 (0.35s) |
| 스크롤 후 배경 | blur + border + shadow transition | 0.3s ease |

---

### Hero

| 요소 | 모션 | 비고 |
|------|------|------|
| 태그 | fadeUp | 0.45s |
| H1 | **line-by-line** fadeUp, y 28~36 | stagger 0.12~0.14s |
| 서브 | fadeUp | delay H1 후 |
| CTA | fadeUp | delay |
| 메인 카드 | **layered**: scale 0.96→1, y 24→0, opacity | 0.7~0.85s |
| 오버랩 카드 | slide x 16→0, y 16→0 | delay 0.2s |
| 탄단지 바 | **width 0→pct** | stagger 0.06s |
| 플로팅 칩 | fadeIn + **blur 6→0**, 이후 **soft drift** y [0,-3,0] 4~5s loop |
| Coli | scale 0.85→1 | 짧게, 보조 |

---

### Problem / Empathy

| 요소 | 모션 | 비고 |
|------|------|------|
| 각 beat | fadeUp + **blur 8→0** (선택) | inView, once |
| Sticky narrative (선택) | scrollYProgress로 문장 교차 페이드 | 구현 난이도↑, 키프레임 넓게 |
| 배경 orb | 정적 또는 opacity 20s+ 초미세 | 루프 최소화 |

---

### Before / After

| 요소 | 모션 | 비고 |
|------|------|------|
| 헤드라인 | fadeUp | |
| Before 카드 | slideLeft x -24→0 | |
| 화살표 | scale 0.9→1 + **opacity pulse** (무한, 아주 약하게) | 2.5~3s |
| After 카드 | slideRight x 24→0 | |
| 리스트 항목 | stagger fadeUp | 0.08s |

---

### AI Meal Logging

| 요소 | 모션 | 비고 |
|------|------|------|
| 카피 | fadeUp stagger | |
| 검색창 | fadeIn | |
| 타이핑 | 문자 단위 (70~90ms) | phase 0 |
| 결과 카드 | **layered** scale 0.98→1, y 12→0 | phase 1 |
| 영양 바 | **growth** width 0→목표 | stagger 0.07s, phase 2 |
| 저장 배지 | scale 0.9→1 | phase 3 |
| 일일 요약 strip | fadeUp | phase 2+ |

---

### Actionable Feedback

| 요소 | 모션 | 비고 |
|------|------|------|
| 카피 | fadeUp | |
| 외곽 프레임 | scale 0.98→1 | |
| 요약 블록 | fadeIn | |
| 부족 문장 | slide x -8→0 | |
| 추천 블록 | **height auto** 펼침 또는 opacity + y | “해결” 강조 |
| 균형 바 | width 0→72% | |
| Coli | scale 0.85→1 | delay 추천 후 |

---

### Restaurant Map

| 요소 | 모션 | 비고 |
|------|------|------|
| 카피 | fadeUp | |
| 지도 컨테이너 | scale 0.98→1, y 32→0 | |
| 지도 내부 | **zoom** scale 1.08→1 | 1~1.2s, 진입 1회 |
| 현재 위치 마커 | scale 0→1 | |
| 핀 | stagger **spring** pop | |
| 선택 핀 | **pulse ring** scale 1→1.5→1, opacity | infinite, 2~2.5s |
| 카드 전환 | AnimatePresence y 12→0 / exit y -8 | |

---

### Community + Report

| 요소 | 모션 | 비고 |
|------|------|------|
| 카피 | fadeUp | |
| 피드 행 | stagger y 12→0 | 0.08s |
| 리포트 패널 | slide x 16→0 + opacity | |
| 탭 전환 | crossfade | 0.25~0.35s |
| **Count-up** | 숫자 0→목표 | 0.8s easeOutQuad |
| 탄단지·주간 바 | height/width growth | stagger |

---

### Real-Life Scenarios

| 요소 | 모션 | 비고 |
|------|------|------|
| 카드 | stagger fadeUp + scale 0.98→1 | |
| 호버 | y -6~8, duration 0.2s | |
| 미니 오버레이 | delay 후 fadeIn | |

---

### Coli Warmth

| 요소 | 모션 | 비고 |
|------|------|------|
| 인용문 | fadeUp + blur 감소 (선택) | |
| Coli | 아주 느린 **float** y [0,-4,0] 4s | 또는 정적 |

---

### FAQ

| 요소 | 모션 | 비고 |
|------|------|------|
| 아이콘 | rotate 0→45 (닫힘 시 +) | 0.25s |
| 패널 | height auto + opacity | 0.3s |

---

### Final CTA

| 요소 | 모션 | 비고 |
|------|------|------|
| H2 | fadeUp y 32~40 | 0.75s |
| 서브·칩 | stagger fadeUp | |
| 버튼 | scale 0.98→1, y 12→0 | |
| 호버 | **lift** y -2, scale 1.02, shadow 강화 | |
| 배경 gradient | opacity 0→1 | 1s, 진입 1회 |

---

### Footer

| 요소 | 모션 | 비고 |
|------|------|------|
| 링크 호버 | color, underline | CSS만 |

---

## C. What to Animate vs What NOT to Animate

### Animate (권장)

- 섹션 진입 시 **헤드라인·서브** (fadeUp / line stagger)
- **제품 UI** 등장 (카드, 바, 핀) — 이해를 돕는 순서
- **호버**: 카드·버튼 lift, 칩 미세 scale
- **데모 시퀀스**: AI 기록, 피드백 펼침, 맵 핀 선택
- **Count-up**: 리포트 숫자
- **무한 루프**: 칩 drift, 선택 핀 pulse만 — 최소한으로

### Do NOT Animate (또는 최소화)

- **본문 장문** 전체에 stagger 글자 단위 (과함)
- **배경** 강한 parallax 다층
- **로고·네비** 과한 bounce
- **스크롤할 때마다** 같은 fade가 모든 섹션에 동일 패턴 (단조) — 섹션마다 1~2가지 차별 패턴
- **layout shift** 유발하는 height 애니메이션 without reserve space
- **자동 재생** 긴 영상·GIF
- **cursor trail**, 과한 particle

---

## D. Reduced-Motion Strategy

### `prefers-reduced-motion: reduce`

| 유형 | 처리 |
|------|------|
| CSS 전역 | 기존처럼 `animation-duration: 0.01ms` 등 (주의: transition도 무력화될 수 있음) |
| Framer | `useReducedMotion()` → variants를 `initial === animate` 또는 duration 0 |
| 스크롤 연동 | sticky 교체 → 정적 스택 |
| 타이핑 | 즉시 전체 문자열 표시 |
| Count-up | 즉시 최종 값 |
| 무한 루프 | 전부 제거 |
| blur | 제거 (어지러움 방지) |

### 권장

- **콘텐츠는 항상 읽 가능** — 모션 없이도 의미 전달 완료
- **포커스 링**은 모션과 무관하게 유지

---

## E. Implementation Stack Suggestions

### Framer Motion (현재 사용 중) — **권장 유지**

| 장점 | 용도 |
|------|------|
| React 선언적 API | `motion.*`, `useInView`, `AnimatePresence`, variants |
| 레이아웃 애니메이션 | `layout` (FAQ 등, 신중히) |
| `useScroll` / `useTransform` | sticky narrative, 지도 zoom (검증된 offset) |

**권장**: 대부분의 섹션 reveal, 호버, 시퀀스, 탭 전환

---

### GSAP + ScrollTrigger

| 장점 | 용도 |
|------|------|
| 타임라인 정밀 제어 | 복작한 스크롤 시퀀스, pin 여러 단계 |
| 성능 | 많은 요소 동시 애니메이션 시 |

**사용 시점**: ProblemEmpathy 다단계 sticky가 Framer로 불안정할 때만 검토  
**단점**: 번들 크기, React와 imperative 동기화 비용

**권장**: **1차는 Framer로 충분** — GSAP는 필요 시 점진 도입

---

### CSS

| 장점 | 용도 |
|------|------|
| 제로 JS 오버헤드 | `transition` on hover, `color`, `border`, `box-shadow` |
| `@media (prefers-reduced-motion)` | 전역 안전망 |

**권장**: Header 스크롤 스타일, 링크·버튼 기본 hover, FAQ 아이콘 회전 (Framer와 중복 시 하나만)

---

### 조합 요약

| 레이어 | 도구 |
|--------|------|
| 기본 | Framer Motion |
| 미세 인터랙션 | CSS `transition` |
| 고급 스크롤 서사 (선택) | GSAP ScrollTrigger 또는 Framer `useScroll` 검증 후 |
| 접근성 | `useReducedMotion` + CSS |

---

## F. Performance & Mobile Notes

- **will-change**: 진행 중인 요소에만, 애니메이션 끝 후 제거 (과사용 금지)
- **IntersectionObserver**: `rootMargin`으로 약간 일찍 트리거해 “빈 화면” 방지
- **모바일**: `stagger` 간격 축소, `y` 이동 거리 축소 (16→12)
- **저사양**: `reduce motion` 외에 저전력 모드 감지는 표준 없음 — 애니메이션 개수 제한으로 대응

---

## G. 우선순위 (구현 순서 제안)

1. **Hero** — line stagger, 칩 drift, 카드 레이어, 바 growth  
2. **AI Meal + Feedback** — phase 시퀀스 정교화  
3. **Restaurant Map** — 진입 zoom, 핀 pulse  
4. **Community Report** — count-up, 탭 crossfade  
5. **Problem Empathy** — blur fadeUp 또는 sticky (안정성 확인 후)  
6. **Final CTA** — 버튼 lift/glow  
7. **전역** — `useReducedMotion` 일괄 점검  

---

*코드 없음 — `MOTION_SYSTEM.md`와 함께 구현 가이드로 사용.*
