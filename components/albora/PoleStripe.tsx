type PoleStripeProps = {
  className?: string;
};

export default function PoleStripe({ className = "" }: PoleStripeProps) {
  return (
    <div
      aria-hidden="true"
      className={`h-2.5 md:h-[10px] ${className}`}
      style={{
        background:
          "repeating-linear-gradient(-45deg, #B2342A 0 12px, #F3EEE6 12px 24px, #1F3A5F 24px 36px, #F3EEE6 36px 48px)",
      }}
    />
  );
}
