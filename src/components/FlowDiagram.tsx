import type { Flow } from "@/content/projects";

/**
 * Accessible flow diagram: an ordered list styled as connected steps.
 * Screen readers get the steps in order plus the loop as text.
 */
export function FlowDiagram({ flow, tone = "muted" }: { flow: Flow; tone?: "muted" | "accent" }) {
  const accent = tone === "accent";
  return (
    <figure
      className={`h-full rounded-2xl border p-5 sm:p-6 ${
        accent ? "border-accent/40 bg-surface" : "border-line bg-surface-2/60"
      }`}
    >
      <figcaption className="label mb-5 flex items-center gap-2">
        <span
          aria-hidden="true"
          className={`inline-block size-2 rounded-full ${accent ? "bg-accent" : "bg-ink-3"}`}
        />
        {flow.caption}
      </figcaption>
      <ol className="relative space-y-2.5">
        {flow.steps.map((step, i) => {
          const isDecision = step.trim().endsWith("?");
          const loopsBack = flow.loop && flow.loop.from === i;
          const loopTarget = flow.loop && flow.loop.to === i;
          return (
            <li key={step} className="relative">
              <div
                className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm ${
                  isDecision
                    ? "border-dashed border-ink-3 bg-transparent italic"
                    : accent
                      ? "border-accent/30 bg-bg"
                      : "border-line bg-surface"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`grid size-6 shrink-0 place-items-center rounded-full font-mono text-[11px] ${
                    accent ? "bg-accent text-accent-ink" : "bg-surface-2 text-ink-2"
                  }`}
                >
                  {i + 1}
                </span>
                <span>{step}</span>
                {loopTarget && (
                  <span aria-hidden="true" className="ml-auto font-mono text-[11px] text-ink-3">
                    ↺
                  </span>
                )}
              </div>
              {loopsBack && flow.loop && (
                <p className="mt-1.5 pl-12 text-xs text-ink-3">
                  <span aria-hidden="true">↺ </span>
                  {flow.loop.label} (back to step {flow.loop.to + 1})
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
