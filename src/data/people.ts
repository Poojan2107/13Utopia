export type StudioPerson = {
  id: string;
  name: string;
  role: string;
  room: "leadership" | "creative-studio" | "growth-specialists" | "engineering";
  initials: string;
  bio: string;
  /** Set when portrait lands in public/team/[id].webp */
  portrait?: string;
};

/**
 * Named seats for Collective / Team. Portraits optional —
 * initials render until files drop in public/team/.
 */
export const studioPeople: StudioPerson[] = [
  {
    id: "studio-lead",
    name: "Studio Lead",
    role: "Direction & client outcomes",
    room: "leadership",
    initials: "SL",
    bio: "Owns engagement goals, decision rights, and the line between craft and commercial reality.",
  },
  {
    id: "creative-director",
    name: "Creative Director",
    role: "Taste & systems",
    room: "creative-studio",
    initials: "CD",
    bio: "Identity, UI, motion, and CGI — making sure the brand still holds after the campaign ends.",
  },
  {
    id: "growth-lead",
    name: "Growth Lead",
    role: "Demand & measurement",
    room: "growth-specialists",
    initials: "GL",
    bio: "SEO, performance, content, and experiments — honest loops on what moved and what didn’t.",
  },
  {
    id: "product-engineer",
    name: "Product Engineer",
    role: "Build & ship",
    room: "engineering",
    initials: "PE",
    bio: "Web, apps, automation, and cloud — the stack that makes strategy survive handoff.",
  },
  {
    id: "brand-designer",
    name: "Brand Designer",
    role: "Identity & craft",
    room: "creative-studio",
    initials: "BD",
    bio: "Marks, systems, and campaign assets that feel premium without becoming theatre.",
  },
];

export function peopleByRoom(room: StudioPerson["room"]) {
  return studioPeople.filter((p) => p.room === room);
}
