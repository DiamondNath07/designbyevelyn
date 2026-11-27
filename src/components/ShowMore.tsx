"use client";

import { Children, useState, type ReactNode } from "react";

/**
 * On phones, shows the first `initial` items and a "See more" button for the rest.
 * From the `md` breakpoint up, every item is always visible and the button is hidden.
 */
export function ShowMore({
  children,
  initial = 1,
  label = "See more projects",
  className = "",
}: {
  children: ReactNode;
  initial?: number;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const items = Children.toArray(children);
  const hidden = items.length - initial;

  return (
    <>
      <div className={className}>
        {items.map((child, i) => (
          <div key={i} className={!open && i >= initial ? "max-md:hidden" : undefined}>
            {child}
          </div>
        ))}
      </div>
      {hidden > 0 && !open && (
        <button type="button" onClick={() => setOpen(true)} className="btn btn-outline mt-5 w-full md:hidden">
          {label} <span className="ledger !tracking-normal">+{hidden}</span>
        </button>
      )}
    </>
  );
}
