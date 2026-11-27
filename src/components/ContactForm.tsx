"use client";

import { useRef, useState } from "react";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const field =
  "mt-2 block w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-ink-3 focus:border-ink";

export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const requestId = useRef<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    requestId.current ??= crypto.randomUUID();
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, requestId: requestId.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      requestId.current = null;
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-line bg-surface p-8">
        <p className="text-xl font-semibold">Thanks — your message is on its way.</p>
        <p className="mt-2 text-ink-2">I usually reply within two working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-medium">Name</span>
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="font-medium">Email</span>
          <input name="email" type="email" required maxLength={254} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="font-medium">Message</span>
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={6}
          placeholder="The role or project, the team, and timing"
          className={field}
        />
      </label>
      {/* Honeypot for bots — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-light" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-ink-3">
          Or email{" "}
          <a className="link" href={`mailto:${fallbackEmail}`}>
            {fallbackEmail}
          </a>
        </p>
      </div>
      <p role="alert" aria-live="polite" className="min-h-6 text-sm text-red-700">
        {status.kind === "error" ? status.message : ""}
      </p>
    </form>
  );
}
