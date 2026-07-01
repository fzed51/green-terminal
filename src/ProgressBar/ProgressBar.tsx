import "./ProgressBar.css";

type ProgressBarVariant = "bar" | "ascii";

interface ProgressBarProps {
  /** Valeur courante (ignorée si `indeterminate`). Par défaut 0. */
  value?: number;
  /** Valeur maximale servant à normaliser `value`. Par défaut 100. */
  max?: number;
  /** Progression inconnue : animation en boucle sans valeur. */
  indeterminate?: boolean;
  /** Rendu : barre CSS pleine (`"bar"`) ou jauge ASCII (`"ascii"`). */
  variant?: ProgressBarVariant;
  /** Libellé affiché au-dessus de la barre. */
  label?: string;
  /** Affiche le pourcentage (mode déterminé uniquement). */
  showValue?: boolean;
  /** Largeur de la jauge ASCII en caractères. Par défaut 24. */
  cells?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ASCII_FILLED = "█";
const ASCII_EMPTY = "░";
const ASCII_BLOCK = 4;

function clampPercent(value: number, max: number): number {
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, (value / max) * 100));
}

export function ProgressBar({
  value = 0,
  max = 100,
  indeterminate = false,
  variant = "bar",
  label,
  showValue = false,
  cells = 24,
  className,
  style,
}: ProgressBarProps) {
  const percent = clampPercent(value, max);
  const rounded = Math.round(percent);
  const hasHeader = Boolean(label) || (showValue && !indeterminate);

  const ariaProps = indeterminate
    ? { "aria-busy": true as const }
    : { "aria-valuenow": rounded, "aria-valuemin": 0, "aria-valuemax": 100 };

  return (
    <div
      className={`progress-bar progress-bar--${variant}${
        indeterminate ? " progress-bar--indeterminate" : ""
      }${className ? ` ${className}` : ""}`}
      style={style}
      role="progressbar"
      {...ariaProps}
    >
      {hasHeader && (
        <div className="progress-bar__header">
          {label && <span className="progress-bar__label">{label}</span>}
          {showValue && !indeterminate && <span className="progress-bar__value">{rounded}%</span>}
        </div>
      )}

      {variant === "ascii" ? (
        <AsciiTrack percent={percent} indeterminate={indeterminate} cells={cells} />
      ) : (
        <BarTrack percent={percent} indeterminate={indeterminate} />
      )}
    </div>
  );
}

function BarTrack({ percent, indeterminate }: { percent: number; indeterminate: boolean }) {
  return (
    <div className="progress-bar__bar">
      <span className="progress-bar__bracket" aria-hidden>
        [
      </span>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={indeterminate ? undefined : { width: `${percent}%` }}
        />
      </div>
      <span className="progress-bar__bracket" aria-hidden>
        ]
      </span>
    </div>
  );
}

function AsciiTrack({
  percent,
  indeterminate,
  cells,
}: {
  percent: number;
  indeterminate: boolean;
  cells: number;
}) {
  if (indeterminate) {
    const scanMax = `${Math.max(cells - ASCII_BLOCK, 0)}ch`;
    return (
      <div
        className="progress-bar__ascii"
        style={{ "--gt-scan-max": scanMax } as React.CSSProperties}
      >
        <span className="progress-bar__ascii-track" aria-hidden>
          [{ASCII_EMPTY.repeat(cells)}]
        </span>
        <span className="progress-bar__ascii-scan" aria-hidden>
          {ASCII_FILLED.repeat(ASCII_BLOCK)}
        </span>
      </div>
    );
  }

  const filled = Math.round((percent / 100) * cells);
  const empty = cells - filled;
  return (
    <div className="progress-bar__ascii">
      <span aria-hidden>[</span>
      <span className="progress-bar__ascii-filled" aria-hidden>
        {ASCII_FILLED.repeat(filled)}
      </span>
      <span className="progress-bar__ascii-empty" aria-hidden>
        {ASCII_EMPTY.repeat(empty)}
      </span>
      <span aria-hidden>]</span>
    </div>
  );
}
