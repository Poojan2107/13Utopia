"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

const interests = [
  "Growth & Marketing",
  "Branding & Creative",
  "Digital Products",
  "AI & Automation",
  "Cloud & Engineering",
  "Strategy & Consulting",
  "Something else",
] as const;

type Status = "idle" | "sending" | "sent" | "error";

export function ConnectForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formspree = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const company = String(data.get("company") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    if (formspree) {
      setStatus("sending");
      try {
        const res = await fetch(`https://formspree.io/f/${formspree}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error("submit failed");
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Project inquiry — ${name || company || "13UTOPiA"}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Company" name="company" autoComplete="organization" />
      </div>
      <label className="block space-y-2 text-sm">
        <span className="text-cream/55">Interest</span>
        <select name="interest" className="field" defaultValue={interests[0]}>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </label>
      <label className="block space-y-2 text-sm">
        <span className="text-cream/55">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="field resize-y"
          placeholder="What are you trying to launch, grow, or fix?"
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </button>
        <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost w-full sm:w-auto">
          Prefer WhatsApp
        </a>
      </div>
      {status === "sent" && (
        <p className="text-sm text-cream/50">
          {formspree
            ? "Got it — we’ll reply with a discovery path."
            : "Opening your email client… You can also reach us on WhatsApp."}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-cream/50">
          Something went wrong. Email{" "}
          <a href={`mailto:${site.email}`} className="text-amber-light">
            {site.email}
          </a>{" "}
          or WhatsApp us.
        </p>
      )}
      {!formspree && (
        <p className="text-[0.7rem] text-cream/30">
          Tip: set <code className="text-cream/45">NEXT_PUBLIC_FORMSPREE_ID</code> on Vercel for inbox delivery without mailto.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block space-y-2 text-sm">
      <span className="text-cream/55">{label}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className="field" />
    </label>
  );
}
