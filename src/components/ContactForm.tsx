"use client";

import { useState } from "react";

const field =
  "mt-2 block w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-ink-3 focus:border-ink";

/**
 * Basic email contact: no server or email service. Submitting opens the visitor's own email app
 * with the message addressed to `to`, the subject and body filled in from the form.
 * Without JavaScript, the form's mailto action does the same thing in plain-text form.
 */
export function ContactForm({ to, brand }: { to: string; brand: string }) {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `${brand} enquiry — ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form action={`mailto:${to}`} method="post" encType="text/plain" onSubmit={onSubmit} className="space-y-5">
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
          maxLength={2000}
          rows={6}
          placeholder="The role or project, the team, and timing"
          className={field}
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-light cursor-pointer">
          Send message
        </button>
        <p className="text-sm text-ink-3">
          Or email{" "}
          <a className="link" href={`mailto:${to}`}>
            {to}
          </a>
        </p>
      </div>
      <p role="status" aria-live="polite" className="min-h-6 text-sm text-ink-2">
        {opened
          ? `Your email app should now be open with the message ready to send. If nothing happened, email ${to} directly.`
          : ""}
      </p>
    </form>
  );
}
