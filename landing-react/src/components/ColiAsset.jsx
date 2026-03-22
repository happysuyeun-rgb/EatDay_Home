import { useState } from "react";

const ASSET_PATHS = ["/assets/Colly.png", "/assets/coree.png", "/assets/coree.svg"];

/**
 * Coli character asset. Tries PNG first, then SVG, then falls back to emoji.
 * Does not fail if files are missing.
 */
export default function ColiAsset({ className = "", size = "md" }) {
  const [fallback, setFallback] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);
  const src = ASSET_PATHS[sourceIndex];
  const isLast = sourceIndex >= ASSET_PATHS.length - 1;

  const sizeClass =
    size === "sm"
      ? "w-6 h-6"
      : size === "md"
      ? "w-8 h-8"
      : size === "lg"
      ? "w-12 h-12 md:w-16 md:h-16"
      : "w-8 h-8";

  const handleError = () => {
    if (isLast) setFallback(true);
    else setSourceIndex((i) => i + 1);
  };

  if (fallback) {
    return (
      <span
        className={`${sizeClass} flex items-center justify-center text-lg md:text-2xl`}
        aria-hidden
      >
        🥦
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      role="presentation"
      className={`${sizeClass} object-contain text-[var(--accent-leaf)] ${className}`}
      onError={handleError}
    />
  );
}
