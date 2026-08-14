import Link from "next/link";
import { collectiveLine } from "@/data/home";
import { Capsule } from "@/components/home/Capsule";

const rooms = [
  { label: "Leadership", href: "/collective/leadership" },
  { label: "Creative studio", href: "/collective/creative-studio" },
  { label: "Engineering", href: "/collective/engineering" },
  { label: "Growth", href: "/collective/growth-specialists" },
  { label: "Culture", href: "/collective/culture" },
  { label: "Careers", href: "/careers" },
] as const;

export function CollectiveHome() {
  return (
    <section id="collective" data-field="art" className="bg-cream text-void">
      <div className="flex h-[100svh] flex-col overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between">
          <Capsule invert>13 / 09</Capsule>
          <Capsule invert>Collective</Capsule>
        </div>
        <div className="flex flex-1 flex-col justify-end pb-4 md:justify-center md:pb-0">
          <h2 className="max-w-[14ch] font-serif text-[clamp(2.4rem,5.8vw,5.8rem)] leading-[0.94] tracking-[-0.045em]">
            {collectiveLine}
          </h2>
          <ul className="mt-10 flex flex-wrap gap-2">
            {rooms.map((room) => (
              <li key={room.href}>
                <Link href={room.href} className="no-underline">
                  <Capsule invert>{room.label}</Capsule>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
