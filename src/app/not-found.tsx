import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">404</p>
      <h1 className="font-display text-4xl tracking-tight text-cream">Page not found</h1>
      <p className="max-w-md text-cream/55">
        That URL doesn&apos;t exist — or it moved. Head home or start a project conversation.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-void transition hover:bg-cream-dim"
        >
          Home
        </Link>
        <Link
          href="/connect"
          className="rounded-full border border-cream/25 px-6 py-3 text-sm text-cream/90 transition hover:border-amber-light hover:text-amber-light"
        >
          Connect
        </Link>
      </div>
    </div>
  );
}
