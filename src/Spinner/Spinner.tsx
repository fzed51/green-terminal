import { useEffect, useState } from "react";
import "./Spinner.css";

type SpinnerVariant = "braille" | "line" | "dots" | "arrow" | "bar";

interface SpinnerProps {
  /** Jeu de caractères animés. Par défaut `"braille"`. */
  variant?: SpinnerVariant;
  /** Libellé affiché à droite du spinner. */
  label?: string;
  /** Durée d'une frame en millisecondes. Par défaut 80. Ignoré si `cycle` est défini. */
  speed?: number;
  /** Durée d'un cycle complet en millisecondes (répartie sur toutes les frames). Prioritaire sur `speed`. */
  cycle?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FRAMES: Record<SpinnerVariant, string[]> = {
  braille: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
  line: ["|", "/", "-", "\\"],
  dots: ["   ", ".  ", ".. ", "..."],
  arrow: ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"],
  bar: ["▖", "▘", "▝", "▗"],
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Spinner({
  variant = "braille",
  label,
  speed,
  cycle,
  className,
  style,
}: SpinnerProps) {
  const frames = FRAMES[variant];
  const [index, setIndex] = useState(0);

  if (cycle !== undefined && speed !== undefined) {
    console.warn(
      "[green-terminal] Spinner : `cycle` et `speed` sont tous deux définis — `speed` est ignoré au profit de `cycle`.",
    );
  }

  const frameDelay = cycle !== undefined ? cycle / frames.length : (speed ?? 80);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(
      () => {
        setIndex((i) => (i + 1) % frames.length);
      },
      Math.max(1, frameDelay),
    );
    return () => clearInterval(id);
  }, [frames.length, frameDelay]);

  return (
    <span
      className={`spinner${className ? ` ${className}` : ""}`}
      style={style}
      role="status"
      aria-busy
      aria-live="polite"
      aria-label={label ?? "chargement"}
    >
      <span className="spinner__frame" aria-hidden>
        {frames[index]}
      </span>
      {label && <span className="spinner__label">{label}</span>}
    </span>
  );
}
