import Link from "next/link";
import { Capsule } from "@/components/home/Capsule";

export function PerspectiveQuiet() {
  return (
    <section id="perspective" data-field="art" className="bg-cream text-void">
      <div className="flex h-[100svh] flex-col overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between">
          <Capsule invert>13 / 07</Capsule>
          <Capsule invert>Perspective</Capsule>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="type-hero max-w-[10ch] text-[clamp(2.6rem,7.4vw,7.2rem)] text-void">
            <span className="block whitespace-nowrap">Story.</span>
            <span className="block whitespace-nowrap">Vision.</span>
            <span className="block whitespace-nowrap">Mission.</span>
          </h2>
          <p className="mt-10 max-w-[42ch] text-sm leading-7 text-void/55">
            Not About Us. How we think, what we refuse, and the work we will not invent a reason for.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            <Link href="/perspective/our-story" className="no-underline">
              <Capsule invert>Our story</Capsule>
            </Link>
            <Link href="/perspective/vision" className="no-underline">
              <Capsule invert>Vision</Capsule>
            </Link>
            <Link href="/perspective/mission" className="no-underline">
              <Capsule invert>Mission</Capsule>
            </Link>
            <Link href="/perspective/why-13-utopia" className="no-underline">
              <Capsule invert>Why 13UTOPiA</Capsule>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
