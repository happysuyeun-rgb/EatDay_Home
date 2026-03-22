import { motion, useReducedMotion } from "framer-motion";

/**
 * Editorial beat between major scenes — not a generic divider.
 */
export default function SceneRibbon({ label, sub }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative w-full overflow-hidden py-8 md:py-12 px-4"
      aria-hidden={!sub}
      role={sub ? "presentation" : undefined}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-3">
        <div className="flex w-full items-center gap-4 md:gap-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent-leaf)]/20 to-[var(--accent-leaf)]/35" />
          {label && (
            <motion.span
              initial={reduceMotion ? false : { letterSpacing: "0.42em" }}
              whileInView={reduceMotion ? undefined : { letterSpacing: "0.28em" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 text-[10px] md:text-[11px] font-bold text-[var(--accent-forest)]/80 uppercase tracking-[0.28em]"
            >
              {label}
            </motion.span>
          )}
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--accent-leaf)]/20 to-[var(--accent-leaf)]/35" />
        </div>
        {sub && (
          <p className="text-xs text-[var(--text-tertiary)] tracking-wide max-w-md text-center">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
