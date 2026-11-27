import type { ReactNode } from "react";
import { Plus } from "./Icons";
import { Words } from "./Words";

export function SectionHead({
  label,
  title,
  id,
  children,
  action,
}: {
  label: string;
  title: string;
  id?: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="label" data-reveal="fade">
          {label}
        </p>
        <h2 id={id} className="h-section mt-3">
          <Words parts={[title]} />
        </h2>
        {children && (
          <div className="mt-3 text-ink-2" data-reveal style={{ ["--d" as string]: "150ms" }}>
            {children}
          </div>
        )}
      </div>
      {action && (
        <div data-reveal="fade" style={{ ["--d" as string]: "200ms" }}>
          {action}
        </div>
      )}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <details key={item.q} className="group panel !rounded-2xl px-5 sm:px-6" data-reveal>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line-2 transition-transform duration-300 group-open:rotate-45">
              <Plus className="size-3.5" />
            </span>
          </summary>
          <div className="pb-5 leading-relaxed text-ink-2">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
