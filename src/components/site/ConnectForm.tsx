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

export function ConnectForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const company = String(data.get("company") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

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
      className="space-y-5 rounded-[1.35rem] border hairline bg-void-soft/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Company" name="company" autoComplete="organization" />
      </div>
      <label className="block space-y-2 text-sm">
        <span className="text-cream/55">Interest</span>
        <select
          name="interest"
          className="field"
          defaultValue={interests[0]}
        >
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
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send inquiry
      </button>
      {status === "sent" && (
        <p className="text-sm text-cream/50">Opening your email client… You can also reach us on WhatsApp.</p>
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
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field"
      />
    </label>
  );
}
