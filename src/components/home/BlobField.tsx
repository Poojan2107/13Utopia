export function BlobField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 mesh-premium opacity-70" />
      <div className="absolute inset-0 stage-grain" />
    </div>
  );
}

export function WaveDivider({ fill = "var(--color-cream)" }: { fill?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      className="block w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0,48 C180,90 360,8 540,42 C720,76 900,10 1080,46 C1260,82 1380,20 1440,36 L1440,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  );
}
