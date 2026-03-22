# EATDAY Landing — FAQ Section Spec

---

## A. Copy (Korean)

| Q | A |
|---|---|
| 음식은 어떻게 기록하나요? | 검색으로 음식 이름을 입력하면 칼로리와 영양소가 자동으로 표시됩니다. 사진 기록도 지원하고, 검색 결과에 없으면 직접 입력할 수 있어요. |
| 맛집 정보는 어떻게 찾나요? | 지도에서 현재 위치 기준으로 다이어트에 맞는 식당을 찾을 수 있어요. 저칼로리·고단백·비건 등 필터로 골라보고, 메뉴 정보와 칼로리도 확인할 수 있습니다. |
| 지금은 무료인가요? | 네, 현재는 무료로 이용할 수 있어요. 유료 전환이 예정되어 있으면 미리 안내드릴 예정입니다. |
| 내 기록은 어떻게 보관되나요? | 기록은 서비스 내에 저장되며, 본인만 열람할 수 있습니다. 탈퇴 시 처리 방식은 개인정보처리방침을 참고해 주세요. |
| 커뮤니티 기능은 어떤 방식인가요? | 식단을 공유하고 다른 사용자와 서로 응원할 수 있는 공간이에요. 공유는 선택 사항이며, 원하시는 범위로 참여하실 수 있습니다. |

---

## B. UX Behavior

- **Accordion**: Single-open (one item expanded at a time)
- **Trigger**: Full-width button, question left, chevron right
- **Expand**: Height + opacity, 0.3s ease-out
- **Icon**: Chevron rotates 180° when open
- **Content**: Slight delay (0.08s) + fade-up on reveal
- **Hover**: Question text color → leaf
- **Focus**: Visible ring (2px leaf, offset 2px)

---

## C. Code Reference

- `landing-react/src/components/FAQ.jsx`

---

## D. Accessibility Checklist

- [x] `aria-expanded` on trigger
- [x] `aria-controls` links trigger to panel
- [x] `aria-labelledby` links panel to trigger
- [x] `role="region"` on panel
- [x] `role="list"` / `role="listitem"` on container
- [x] `focus-visible:ring` for keyboard focus
- [x] Semantic `<h2>` / `<h3>` structure
- [x] Unique `id` per item for ARIA references
