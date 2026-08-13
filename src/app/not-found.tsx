import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-28 sm:px-8 lg:px-10">
      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">404</p>
      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-cream/30">Be Unreal Be Unreasonable</p>
      <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
        Lost in
        <br />
        the void.
      </h1>
      <p className="max-w-md text-cream/50">
        That URL doesn&apos;t exist — or it moved. Head home or start a project conversation.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/connect" className="btn-ghost">
          Connect
        </Link>
      </div>
    </div>
  );
}
