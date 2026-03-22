/**
 * EATDAY Motion System — Reusable variants and tokens
 * See docs/MOTION_SYSTEM.md for full spec
 */

/** @type {import('framer-motion').Variants} */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** @type {import('framer-motion').Variants} */
export const fadeUpSlow = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/** @type {import('framer-motion').Variants} */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
};

/** @type {import('framer-motion').Variants} */
export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

/** @type {import('framer-motion').Variants} */
export const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

/** @type {import('framer-motion').Variants} */
export const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** @type {import('framer-motion').Transition} */
export const transition = {
  standard: { duration: 0.3 },
  medium: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  slow: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

/** @type {import('framer-motion').Transition} */
export const easing = {
  smooth: [0.22, 0.61, 0.36, 1],
};

/** Hover presets */
export const hover = {
  card: { y: -4, transition: { duration: 0.2 } },
  button: { y: -2, transition: { duration: 0.2 } },
  chip: { scale: 0.97, transition: { duration: 0.15 } },
};
