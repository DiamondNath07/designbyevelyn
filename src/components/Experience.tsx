import { experience } from "@/content/site";

export function Experience({ detailed = true }: { detailed?: boolean }) {
  return (
    <ol className="stagger divide-y divide-line border-y border-line">
      {experience.map((r) => (
        <li key={r.company} data-reveal className="row-hover grid gap-3 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8 print:grid-cols-[9rem_1fr] print:py-3">
          <div className="text-sm text-ink-3">
            <p>{r.dates}</p>
            {r.location && <p className="mt-0.5">{r.location}</p>}
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {r.title}, <span className="text-ink-2">{r.company}</span>
            </h3>
            <p className="mt-1 text-ink-2">{r.summary}</p>
            {detailed && (
              <ul className="mt-3 space-y-1.5 text-ink-2">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true" className="text-ink-3">
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
