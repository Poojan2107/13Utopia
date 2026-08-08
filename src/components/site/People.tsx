import Image from "next/image";
import Link from "next/link";
import type { StudioPerson } from "@/data/people";

export function PersonCard({ person }: { person: StudioPerson }) {
  return (
    <article className="group flex flex-col rounded-[1.25rem] border hairline p-5 transition hover:border-amber/40 sm:p-6">
      <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-[1rem] bg-void-soft">
        {person.portrait ? (
          <Image src={person.portrait} alt={person.name} fill className="object-cover" sizes="280px" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgba(196,165,116,0.18),transparent_60%)]">
            <span className="font-display text-4xl tracking-tight text-amber-light/80">{person.initials}</span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-cream/30">Portrait soon</span>
          </div>
        )}
      </div>
      <h3 className="font-display text-xl text-cream">{person.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-amber-light/70">{person.role}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/50">{person.bio}</p>
    </article>
  );
}

export function PeopleGrid({ people }: { people: StudioPerson[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {people.map((p) => (
        <li key={p.id}>
          <Link
            href="/collective"
            className="flex items-center gap-3 rounded-full border hairline bg-void-soft/50 py-2 pl-2 pr-4 transition hover:border-amber/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 font-display text-sm text-amber-light">
              {p.initials}
            </span>
            <span>
              <span className="block text-sm text-cream">{p.name}</span>
              <span className="block text-[0.65rem] text-cream/40">{p.role}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
