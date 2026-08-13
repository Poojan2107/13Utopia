function seed(value: string) {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) h = (h * 33 + value.charCodeAt(i)) >>> 0;
  return h;
}

const spots = [
  "ellipse_at_28%_18%",
  "ellipse_at_72%_24%",
  "ellipse_at_40%_78%",
  "ellipse_at_78%_68%",
] as const;

/** On-brand stage until locked case media lands. Never pair mismatched legacy images. */
export function CasePlaceholder({
  label,
  kicker,
  ghost,
  showLabel = true,
  variant = "cover",
  className = "",
}: {
  label: string;
  kicker?: string;
  ghost?: string;
  showLabel?: boolean;
  variant?: "cover" | "frame" | "mark";
  className?: string;
}) {
  const spot = spots[seed(label) % spots.length];

  if (variant === "mark") {
    return <ClientMark name={label} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-void-soft ${className}`}>
      <div className="absolute inset-0 mesh-premium opacity-55" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(${spot}, rgba(196,165,116,0.22), transparent 55%)`,
        }}
      />
      {ghost ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-[clamp(7rem,22vw,16rem)] leading-none tracking-[-0.08em] text-cream/[0.06] tabular-nums"
        >
          {ghost}
        </span>
      ) : null}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        {kicker ? (
          <p className="relative text-[0.58rem] uppercase tracking-[0.22em] text-cream/28">{kicker}</p>
        ) : null}
        {showLabel ? (
          <p
            className={`relative max-w-[14ch] text-center font-serif leading-[0.95] tracking-tight text-cream/18 ${
              variant === "frame"
                ? "text-[clamp(1.2rem,2.4vw,2rem)]"
                : "text-[clamp(1.6rem,3.5vw,3rem)]"
            }`}
          >
            {label}
          </p>
        ) : null}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
    </div>
  );
}

export function ClientMark({ name, className = "" }: { name: string; className?: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex h-14 w-14 items-center justify-center border border-cream/15 bg-void-soft font-serif text-lg tracking-tight text-amber-light/80 ${className}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
