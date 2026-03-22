# EATDAY Landing — Footer Spec

---

## A. Footer Structure

```
footer
├── top block (flex: brand | legal + service)
│   ├── brand
│   │   ├── EATDAY (link to #)
│   │   └── tagline
│   └── legal + service
│       ├── nav (이용약관, 개인정보처리방침)
│       └── 서비스 바로가기
└── copyright (border-top)
```

---

## B. Copy

| Element | Copy |
|---------|------|
| Brand | EATDAY |
| Tagline | 가벼운 기록으로 시작하는 식단 관리 |
| Legal | 이용약관 · 개인정보처리방침 |
| Service link | 서비스 바로가기 → |
| Copyright | © {year} EATDAY |

---

## C. Code Reference

- `app/src/components/Footer.jsx`

---

## D. Style Notes

- **Background**: bg-oat/50, border-t
- **Spacing**: py-16 md:py-20, gap-10 md:gap-8
- **Typography**: Brand semibold, tagline/link text-sm, copyright text-xs
- **Hover**: text-[var(--accent-leaf)]
- **Layout**: Stack on mobile, row on md+
