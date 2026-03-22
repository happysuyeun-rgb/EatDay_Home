# EATDAY 랜딩 페이지 리디자인 전략

**목표**: 기존 완성본을 더 몰입감 있고, 트렌디하며, 리듬감 있고, 감성적으로 기억에 남는 프리미엄 랜딩으로 변환.  
**원칙**: 메시지와 제품 구조는 유지, 프레젠테이션을 재설계. 시네마틱·씬 기반 경험.

---

## A. Redesign Diagnosis

### 현재 문제 진단

#### 1. 시각적 단조로움
- **배경**: cream ↔ oat만 번갈아 사용. 섹션 간 대비가 거의 없음.
- **카드**: 거의 모든 섹션이 `rounded-2xl white bg border shadow` 패턴. 반복적.
- **타이포**: H2가 2xl~3xl로 통일, 헤드라인 무게감 부족.

#### 2. 히어로 약세
- H1이 `text-4xl~5xl` 수준으로 프리미엄 제품에 비해 작음.
- 대시보드 목업이 `min-h-[320px]`로 보여지는 비중이 작음.
- 칩이 3개 뿐이고, 공간 활용이 수동적.

#### 3. 제품 UI 목업 규모 부족
- AIMealLogging: `max-w-[340px]` — 너무 작음.
- RestaurantMap: 지도 높이 `min(52vw,280px)` — 존재감 약함.
- ActionableFeedback: `max-w-lg` 단일 카드 — 차별화 약함.

#### 4. 섹션 리듬 단조
- Hero 이후: ProblemEmpathy → BeforeAfter → AIMealLogging → … 전부 **좌/우 또는 중앙 정렬 + 카드**.
- “이 섹션과 저 섹션의 차이”가 시각적으로 드러나지 않음.
- 다음 섹션에 대한 기대감·전환 감각 부족.

#### 5. 모션 부족
- 대부분 `opacity 0→1`, `y 16→0` 정도의 단순 fade-up.
- 스크롤과 연동된 스토리텔링, sticky, parallax 없음.
- 제품 데모(타이핑 등) 외에는 “살아있는” 느낌 부족.

#### 6. 감성적 페이싱 부족
- ProblemEmpathy가 한 번에 4문장 등장 → 순차 감정 축적 없음.
- CTA가 “그냥 버튼 하나” 수준.
- 전체가 정보 문서처럼 읽히고, **장면(씬)**으로 느껴지지 않음.

#### 7. 화이트스페이스 활용 미흡
- 여백이 많지만 방향성·초점이 약함.
- 그라데이션·포커스 라이트가 은은해 시선 유도가 약함.

---

## B. What Exactly to Change in Visual Rhythm

### 1. 배경 톤 다변화
| 섹션 | 현재 | 제안 |
|------|------|------|
| Hero | cream | cream + 대형 radial gradient(leaf/lime, 약 15% opacity)로 히어로 집중 |
| ProblemEmpathy | oat | oat + 약간 어두운 톤(forest 3% 오버레이) — 공감·내면 감정 |
| BeforeAfter | cream | sand/oat 그라데이션 — 전환·변화 감각 |
| AIMealLogging | oat | cream + 좌측 라이트 스포트라이트 |
| ActionableFeedback | oat | white/card 중심, 배경은 매우 연한 leaf 블러 |
| RestaurantMap | cream | oat + 지도가 “창”처럼 보이도록 그림자·프레임 강화 |
| CommunityReport | oat | cream, 편안한 톤 |
| RealLifeScenarios | cream | sand/oat 미세 그라데이션 |
| ColiWarmth | cream | oat + 중앙 스포트라이트 유지 |
| FAQ | oat | cream |
| FinalCTA | cream | oat → leaf 그라데이션, CTA를 위한 시각적 클라이맥스 |

### 2. 카드·블록 변주
- **BeforeAfter**: 기존 카드가 아닌 “막대형 비교” 또는 “타임라인형 전환” 고려.
- **AIMealLogging**: 단일 카드가 아니라 **검색창 + 결과 카드 + 일일 요약** 3단 레이어.
- **ActionableFeedback**: 카드 내부에 “단계별 펼침” 느낌(1→2→3 순차).
- **RestaurantMap**: 지도를 “풀블리드 섹션”처럼, 카드가 아닌 **창문·뷰**로 취급.
- **CommunityReport**: 피드와 리포트를 6:4 비율이 아니라 **피드가 스크롤 스냅**, 리포트가 **sticky** 형태로.

### 3. 타이포그래피 스케일 상향
- Hero H1: `4xl~5xl` → **6xl~7xl** (lg 기준 4rem~4.5rem).
- 섹션 H2: `2xl~3xl` → **3xl~4xl**, 섹션별 차등 적용.
- Editorial moment: ProblemEmpathy, FinalCTA 등은 **더 큰 라인 하이트, 짧은 라인**.
- 서브카피: `text-base~lg` → 필요 시 `text-lg~xl`로 핵심 문장 강조.

### 4. 섹션 간 전환
- 각 섹션 경계에 **숨은 구분선**, **그라데이션 페이드**, 또는 **약한 구분 영역**.
- ProblemEmpathy → BeforeAfter: “공감에서 해결책으로” 전환을 시각적으로 표시.
- BeforeAfter → AIMealLogging: “이제 실제로 어떻게 쓰는지”로 자연스럽게 이어지도록.

---

## C. Section-by-Section Redesign Strategy

### 1. Hero — “첫 인상이 프리미엄이어야 한다”
- **레이아웃**: 좌 45% / 우 55% 비율로 시각 쪽 비중 확대.
- **H1**: 두 줄 유지하되 크기 2단계 상향. 첫 줄은 더 굵게.
- **서브카피**: “오늘 먹은 것부터, 다음 한 끼 선택까지”를 **한 줄 또는 짧은 2줄**로, 라인 하이트 넉넉하게.
- **목업**: 대시보드 카드를 **더 크게**(min-h 420px 이상), 2~3장 레이어드 + 부유 칩 4~5개.
- **배경**: 화면 중앙~우측으로 leaf/lime radial gradient, 매우 부드럽게.
- **모션**: 헤드라인 stagger, 목업은 **살짝 들어오는 + scale 0.98→1**, 칩은 **부유 + staggered delay**.

### 2. ProblemEmpathy — “한 문장씩 마음에 남기기”
- **스크롤**: 다시 **sticky scroll** 검토. 한 문장이 중심에 있을 때 이전 문장은 흐려지고, 다음 문장이 드러나는 방식.
- **문장 크기**: `text-3xl~4xl` → **4xl~5xl**, 짧은 라인 유지.
- **배경**: oat + 상단/하단에 블러 오버레이로 “무대” 느낌.
- **대안**: useInView stagger 유지하되, **각 문장을 별도 블록**으로 두고 `min-h-[40vh]`씩 확보해 스크롤 페이싱 강화.

### 3. BeforeAfter — “변화를 한눈에”
- **구조**: 기존 3열(Before | 화살표 | After)을 유지하되 **시각적 대비** 강화.
- Before: 색상 톤 다운(sand/oat), border 약하게.
- After: leaf 액센트 라인, **glow·그림자**로 “해결” 느낌.
- **애니메이션**: Before 항목에 `line-through`가 **순차 등장**, After 항목은 **체크 + fade-in**.
- **레이아웃 변주**: 세로 스택일 때 Before → 화살표 → After 순으로, “위에서 아래로의 변화” 강조.

### 4. AIMealLogging — “제품의 스마트함이 보여야 한다”
- **목업 비중**: 전체 섹션의 **55~60%**를 목업이 차지.
- **목업 크기**: `max-w-[340px]` → **min-w 400px, max-w 480px**.
- **구성**: 검색창 → 타이핑 → 결과 카드 → 일일 요약의 **순차 시퀀스**를 유지하되, **각 단계가 더 크게** 보이게.
- **배경**: 좌측(카피 쪽)에 연한 radial gradient로 시선 유도.
- **모션**: phase 전환 시 **이전 요소가 살짝 축소·흐려짐**, 다음 요소가 **강조**.

### 5. ActionableFeedback — “다른 앱과 다른 점”
- **카드**: 단일 카드가 아니라 **3단계 펼침** 느낌.
  1. 요약(항상 노출)
  2. 부족 항목(펼쳐짐)
  3. 추천(하이라이트 블록)
- **카드 크기**: `max-w-lg` → **max-w-xl**, 패딩 확대.
- **Coli**: 추천 블록 옆에 작게, “도우미” 느낌 유지.
- **배경**: 카드 주변을 약간 어둡게 하거나, 카드에 **glow**를 줘서 “해결책” 포커스.

### 6. RestaurantMap — “지도가 메인이다”
- **지도 비중**: 섹션의 **60%** 이상. 높이 **min 360px, desktop 420px**.
- **레이아웃**: 지도를 **전체 너비** 또는 **오른쪽 2/3**로 배치. 카피·필터는 좌측 또는 상단.
- **지도 톤**: 기존 그라데이션 + 그리드 유지하되, **프레임(rounded + shadow)** 강화해 “앱 창” 느낌.
- **핀**: 선택된 핀에 **pulse ring** 애니메이션.
- **상세 카드**: 선택 시 카드가 **슬라이드·페이드**로 등장.

### 7. CommunityReport — “함께하는 느낌”
- **구조**: 피드(왼) + 리포트(오른) 유지.
- **피드**: 카드 3장을 **세로 스크롤 스냅** 또는 **부유 카드** 느낌으로.
- **리포트**: 탭 전환 시 **컨텐츠 crossfade**.
- **CountUp, 차트**: 기존 유지, 등장 시 **stagger** 살짝 강화.

### 8. RealLifeScenarios — “상황별로 와닿게”
- **카드**: 4장을 **2x2 그리드** 또는 **가로 스크롤** 중 선택. 가로 스크롤 시 **카드 너비 300px+**.
- **미니 오버레이**: 현재보다 **더 구체적인 UI 스니펫** (예: 검색 결과, 지도 핀, 메뉴 카드).
- **호버**: 카드가 **살짝 확대 + 다른 카드 약간 축소**로 포커스 강조.

### 9. ColiWarmth — “브랜드 톤, 과하지 않게”
- **비중**: 현재보다 **축소** — Coli가 너무 크면 안 됨.
- **레이아웃**: Coli + 짧은 카피. 힌트(기록/피드백/리포트)는 **더 작게** 또는 툴팁 스타일.
- **모션**: float 애니메이션 유지, **저자세**로.

### 10. FAQ — “깔끔한 정리”
- **스타일**: premium accordion 유지.
- **배경**: cream으로 구분감.
- **첫 1~2개**: 기본 펼침 상태로 “바로 읽을 수 있음” 강조.

### 11. FinalCTA — “클라이맥스”
- **패딩**: `py-28~36` → **py-32~40**.
- **H2**: `2xl~3xl` → **3xl~4xl**, 짧은 2줄.
- **배경**: leaf 그라데이션이 **CTA 근처로 모이는** 느낌.
- **버튼**: `h-14` → **h-16**, `px-10` → **px-12**. shadow, hover 시 살짝 scale.
- **칩**: “AI 식단 기록, 맛집 지도, 일일 리포트” — 클릭 시 해당 섹션으로 스크롤(선택).

---

## D. Motion and Interaction Upgrade Plan

### 1. 스크롤 연동
- **ProblemEmpathy**: sticky + `scrollYProgress` 기반 opacity 전환. 각 문장이 **진입 시점**에 맞춰 등장.
- **RestaurantMap**: 지도가 뷰포트에 들어올 때 **zoom-in 1.05→1** (0.8s).
- **ActionableFeedback**: 카드가 뷰포트 50%에 오면 **3단계 시퀀스** 자동 재생(선택).

### 2. 섹션 진입
- **fadeUp**: 기존 유지, `y: 24` → `y: 32`로 약간 확대.
- **staggerChildren**: `0.08s` → `0.12s`로 여유 확보.
- **새 패턴**: `maskReveal` — clip-path로 위에서 아래로 “커튼 열리듯” (선택 섹션).

### 3. 호버·마이크로 인터랙션
- **카드**: `translateY(-4px)` + `shadow` bloom.
- **버튼**: `translateY(-2px)` + shadow 강화.
- **시나리오 카드**: 호버 시 scale 1.02, 나머지 0.98.
- **맵 핀**: 호버 시 scale 1.15, 선택 시 pulse ring.

### 4. 제품 데모 시퀀스
- **AIMealLogging**: 타이핑 속도, phase 전환 타이밍 미세 조정. “저장됨” 배지 등장 시 **작은 체크 애니메이션**.
- **ActionableFeedback**: 요약 → 부족 → 추천 순서에 **0.4s 간격** stagger.

### 5. Reduced Motion
- `prefers-reduced-motion` 시 모든 애니메이션 **duration 0.01ms** 또는 **즉시 최종 상태**.
- Sticky scroll → 일반 스크롤 + 모든 문장 동시 노출.

---

## E. Specific Implementation Guidance

### 1. 타이포그래피
- H1: `text-5xl md:text-6xl lg:text-7xl` + `leading-[1.1]` + `tracking-tight`.
- 섹션 H2: `text-3xl md:text-4xl` (Hero 직후 2~3개), 이후 `text-2xl md:text-3xl`.
- Editorial: `text-2xl md:text-4xl` + `leading-relaxed` + `max-w-2xl`.

### 2. 간격
- 섹션 패딩: `py-24 md:py-32` → **py-28 md:py-36** (일부 섹션).
- Hero: `pt-28 pb-20` → **pt-32 pb-24**.
- 컨테이너 gap: `gap-12 md:gap-16` → **gap-16 md:gap-24** (제품 섹션).

### 3. 목업 스케일
- Hero 대시보드: `min-h-[320px]` → `min-h-[400px] md:min-h-[480px]`.
- AIMealLogging: `max-w-[340px]` → `max-w-[420px] md:max-w-[480px]`.
- RestaurantMap 지도: `h-[min(52vw,280px)]` → `h-[min(60vw,360px)] md:h-[420px]`.

### 4. 색상·그라데이션
- Hero: `radial-gradient(ellipse 80% 60% at 70% 40%, rgba(127,176,105,0.12), transparent 60%)`.
- FinalCTA: `radial-gradient(ellipse 100% 80% at 50% 100%, rgba(74,124,89,0.08), transparent 60%)`.
- ProblemEmpathy: `linear-gradient(to bottom, rgba(45,90,61,0.02) 0%, transparent 50%)` 오버레이.

### 5. 카드 변주
- 기본: `rounded-2xl`, `shadow-[0_4px_24px_rgba(0,0,0,0.04)]`.
- 강조 카드(ActionableFeedback, EATDAY 카드): `shadow-[0_8px 40px rgba(74,124,89,0.08)]`.
- 지도 컨테이너: `rounded-2xl`, `shadow-[0_12px 48px rgba(0,0,0,0.06)]`.

### 6. 컴포넌트 수정 우선순위
1. **Hero** — H1, 목업 스케일, 배경.
2. **ProblemEmpathy** — sticky scroll 또는 taller blocks + stagger.
3. **AIMealLogging** — 목업 크기, 배치.
4. **RestaurantMap** — 지도 비중, 레이아웃.
5. **ActionableFeedback** — 카드 강조, 3단계 시각화.
6. **BeforeAfter** — Before/After 대비.
7. **FinalCTA** — 스케일, 배경.

---

## F. Revised Hierarchy and Layout Recommendations

### 전체 스크롤 플로우
```
[HERO]        — 강한 첫인상, 큰 헤드라인, 큰 목업
     ↓
[EMPATHY]     — 공감, 스크롤 또는 stagger로 한 문장씩
     ↓
[BEFORE/AFTER] — 전환, “이제 다르다”
     ↓
[AI MEAL]     — 제품 데모 1: 기록
     ↓
[FEEDBACK]    — 제품 데모 2: 피드백 (차별화)
     ↓
[MAP]         — 제품 데모 3: 맛집 (실생활)
     ↓
[COMMUNITY]   — 제품 데모 4: 함께하기
     ↓
[SCENARIOS]   — “나의 상황”
     ↓
[COLI]        — 브랜드 톤, 짧게
     ↓
[FAQ]         — 정리
     ↓
[CTA]         — 클라이맥스
```

### 시각적 리듬 요약
| 구간 | 톤 | 주요 변화 |
|------|-----|----------|
| Hero | 밝음, 집중 | 큰 타이포, 큰 목업 |
| Empathy | 차분 | 큰 문장, 순차 등장 |
| BeforeAfter | 대비 | Before 타이브다운, After 강조 |
| AI Meal | 명료 | 목업 확대, 시퀀스 |
| Feedback | 포커스 | 카드 glow, 3단계 |
| Map | 열림 | 지도 확대, 창 느낌 |
| Community | 편안 | 피드 + 리포트 |
| Scenarios | 다양 | 카드 그리드/스크롤 |
| Coli | 은은 | 작은 터치 |
| FAQ | 정돈 | accordion |
| CTA | 클라이맥스 | 큰 버튼, 그라데이션 |

---

## 요약 체크리스트

- [ ] Hero: H1 2단계 상향, 목업 1.3x 이상 확대
- [ ] ProblemEmpathy: sticky 또는 tall blocks + 순차 등장
- [ ] BeforeAfter: Before/After 시각 대비 강화
- [ ] AIMealLogging: 목업 400~480px, 좌측 그라데이션
- [ ] ActionableFeedback: 카드 max-w-xl, glow, 3단계 시각화
- [ ] RestaurantMap: 지도 360~420px, 프레임 강화
- [ ] CommunityReport: 피드·리포트 레이아웃 정교화
- [ ] RealLifeScenarios: 카드 300px+, 미니 UI 강화
- [ ] ColiWarmth: 저자세 유지
- [ ] FinalCTA: H2·버튼 확대, leaf 그라데이션
- [ ] 섹션별 배경 톤 변주
- [ ] 모션: scroll-linked, stagger, hover 강화
