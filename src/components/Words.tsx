import type { ReactNode } from "react";

type Part = string | { text: string; className?: string };

/**
 * Headline text that reveals word by word as it scrolls into view.
 * Pass plain strings, or { text, className } parts to style phrases (e.g. dimmed words).
 * Words stay real text, so screen readers and search engines read the sentence normally.
 */
export function Words({ parts, delay = 0 }: { parts: Part[]; delay?: number }): ReactNode {
  let i = 0;
  return (
    <span className="words" style={{ ["--d" as string]: `${delay}ms` }}>
      {parts.map((part, pi) => {
        const { text, className } = typeof part === "string" ? { text: part, className: undefined } : part;
        return text
          .split(/(\s+)/)
          .filter(Boolean)
          .map((token, ti) =>
            /^\s+$/.test(token) ? (
              " "
            ) : (
              <span key={`${pi}-${ti}`} className={`w ${className ?? ""}`} style={{ ["--i" as string]: i++ }}>
                {token}
              </span>
            )
          );
      })}
    </span>
  );
}
