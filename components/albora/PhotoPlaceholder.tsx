type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  dark?: boolean; // variante clara (bento/retratos) vs oscura (hero/pasos)
};

export default function PhotoPlaceholder({
  label,
  className = "",
  dark = false,
}: PhotoPlaceholderProps) {
  const stripe = dark
    ? "repeating-linear-gradient(135deg, #2F2B27 0 2px, #282420 2px 16px)"
    : "repeating-linear-gradient(135deg, #CFC8BE 0 2px, #D8D2C9 2px 16px)";
  const textColor = dark ? "#8F857A" : "#5E554B";

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden ${className}`}
      style={{ background: stripe }}
    >
      <span
        className="absolute left-4 top-4 right-4 text-[11px] font-bold uppercase tracking-[2px]"
        style={{ color: textColor }}
      >
        {label}
      </span>
    </div>
  );
}
