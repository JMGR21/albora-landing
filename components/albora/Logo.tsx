type LogoProps = {
  size?: number; // font-size en px, controla la escala del sol
  className?: string;
};

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="Albora"
      className={`inline-flex items-baseline font-bold leading-none tracking-[-0.036em] ${className}`}
      style={{ fontSize: size }}
    >
      alb
      <svg
        viewBox="0 0 52 50"
        aria-hidden="true"
        style={{ width: "0.58em", height: "0.558em", margin: "0 0.02em 0 0.03em" }}
      >
        <path d="M8 44 A18 18 0 0 1 44 44 Z" fill="var(--color-brass)" />
        <line
          x1="4"
          y1="46.5"
          x2="48"
          y2="46.5"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="18"
          x2="26"
          y2="9"
          stroke="var(--color-brass)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="9.5"
          y1="25"
          x2="4"
          y2="19.5"
          stroke="var(--color-brass)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="42.5"
          y1="25"
          x2="48"
          y2="19.5"
          stroke="var(--color-brass)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      ra
    </span>
  );
}
