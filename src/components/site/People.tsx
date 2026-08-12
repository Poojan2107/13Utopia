import Image from "next/image";
import Link from "next/link";
import type { StudioPerson } from "@/data/people";

export function PersonCard({ person }: { person: StudioPerson }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-cream/10 bg-[#0b0b0b] transition hover:border-amber-light/35">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-void-soft">
        {person.portrait ? (
          <Image src={person.portrait} alt={person.name} fill className="object-cover" sizes="320px" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgba(196,165,116,0.16),transparent_60%)]">
            <span className="font-serif text-5xl tracking-tight text-amber-light/75">{person.initials}</span>
            <span className="text-[0.6rem] uppercase tracking-[0.22em] text-cream/30">Portrait soon</span>
          </div>
        )}
      </div>
      <div className="px-5 py-5">
        <h3 className="font-serif text-xl text-cream">{person.name}</h3>
        <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-amber-light/70">{person.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-cream/50">{person.bio}</p>
      </div>
    </article>
  );
}

export function PeopleGrid({ people }: { people: StudioPerson[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((p) => (
        <li key={p.id}>
          <PersonCard person={p} />
        </li>
      ))}
    </ul>
  );
}

export function PeopleStrip({ people }: { people: StudioPerson[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {people.map((p) => (
        <li key={p.id}>
          <Link
            href="/collective"
            className="flex items-center gap-3 rounded-full border border-cream/10 bg-[#0b0b0b] px-4 py-2.5 transition hover:border-amber-light/35"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber/25 bg-amber/10 font-serif text-sm text-amber-light">
              {p.initials}
            </span>
            <span>
              <span className="block text-sm text-cream">{p.name}</span>
              <span className="block text-[0.65rem] uppercase tracking-[0.14em] text-cream/40">{p.role}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
