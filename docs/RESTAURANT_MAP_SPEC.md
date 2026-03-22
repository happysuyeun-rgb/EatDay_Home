# EATDAY Landing — Restaurant Map Section Spec

---

## A. Rationale

**Purpose**: Show that EATDAY supports **real-world dining**—finding diet-friendly spots nearby with menu context. This is a standout MVP feature, so the section should feel memorable without noisy visuals.

**Principles**: Map-like composition (not a real map embed), progressive pins, interactive filters, and a clear selected-state card. Calm health-tech, not gamified.

---

## B. Copy

| Element | Copy |
|---------|------|
| Label | 맛집 지도 |
| H2 | 다이어트는 집 밖에서 무너지기 쉬우니까 |
| Body | 내 주변 저칼로리·고단백 식당을 바로 찾고, 메뉴 정보까지 확인하세요. |
| Chips | 저칼로리 · 고단백 · 비건 |
| Distance bar | 현재 위치 기준 · 반경 500m |
| Location dot | 현재 위치 |

---

## C. UI Composition

```
section#map
├── grid (2-col desktop)
│   ├── Left: label, H2, body, filter chips (buttons)
│   └── Right: map card
│       ├── Map surface (gradient + grid + radial wash)
│       ├── Current location (center pin + label)
│       ├── 3 × pin buttons (absolute % positions)
│       ├── Distance context bar (bottom)
│       └── Desktop: detail card (border-t, AnimatePresence)
└── Mobile: bottom-sheet style card below map (handle bar, spring transition)
```

---

## D. Motion Rules

| Element | Behavior |
|---------|----------|
| Map container | inView: opacity + scale 0.92→1 |
| Map inner | scale 1.08→1 (soft zoom-in) |
| Pins | stagger 0.12s, scale 0→1, opacity |
| Active pin | infinite pulse ring (scale + opacity) |
| Dimmed pins | opacity 0.35 when filter excludes them |
| Filter chip | active: leaf bg + shadow; tap scale 0.97 |
| Detail card | AnimatePresence, key=id, fade + y |
| Mobile sheet | spring (stiffness 380, damping 32) |

---

## E. Code Reference

- `app/src/components/RestaurantMap.jsx`

---

## F. Mobile Design

- Map height: `min(52vw, 280px)` for proportional feel
- Filters stay under copy (order-2 on mobile so map appears first for impact)
- Detail card: rounded sheet with drag-handle affordance (decorative bar)
- Pins: same hover/tap; larger touch targets via padding on button
