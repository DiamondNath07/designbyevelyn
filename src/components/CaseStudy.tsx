import Link from "next/link";
import { ViewTransition } from "react";
import type { Feature, Figure, Project } from "@/content/projects";
import { getTestimonial } from "@/content/site";
import { CountUp } from "./CountUp";
import { FlowDiagram } from "./FlowDiagram";
import { Arrow, Plus } from "./Icons";
import { Video } from "./Media";
import { TestimonialCard } from "./TestimonialCard";
import { Words } from "./Words";

/* ---------- Small helpers for the full write-up ---------- */

function Paras({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((t) => (
        <p key={t}>{t}</p>
      ))}
    </div>
  );
}

function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="space-y-3">
      {items.map((t, i) => (
        <li key={t} className="flex gap-4">
          <span aria-hidden="true" className="mt-[2px] w-5 shrink-0 font-mono text-xs text-ink-3">
            {ordered ? String(i + 1).padStart(2, "0") : "—"}
          </span>
          <span>{t}</span>
        </li>
      ))}
    </Tag>
  );
}

function WriteUpBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="label mb-3">{title}</h4>
      <div className="leading-relaxed text-ink-2">{children}</div>
    </section>
  );
}

/* ---------- Figures ---------- */

function FigureVisual({ figure, feature }: { figure: Figure; feature: Feature }) {
  const screen = (n: 1 | 2) => `/media/${feature.deck.replace("/", "-")}-${n}.webp`;
  switch (figure.visual) {
    case "before":
      return <FlowDiagram flow={feature.currentFlow} />;
    case "after":
      return <FlowDiagram flow={feature.finalFlow} tone="accent" />;
    case "screen1":
    case "screen2":
      return (
        <div className="overflow-hidden rounded-[var(--radius-md)] bg-[#f3f3f5]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screen(figure.visual === "screen1" ? 1 : 2)}
            alt={`${feature.title}: ${figure.title}`}
            loading="lazy"
            decoding="async"
            className="mx-auto aspect-[10/9] h-full w-full object-cover"
          />
        </div>
      );
    default:
      return null;
  }
}

function FigureItem({ figure, n, feature }: { figure: Figure; n: number; feature: Feature }) {
  const label = (
    <p className="ledger">
      Fig. {n} <span className="ml-2 text-ink-2">{figure.title}</span>
    </p>
  );
  if (!figure.visual) {
    // Text-only figure: a pull statement
    return (
      <li data-reveal className="border-l border-line-2 py-1 pl-5 sm:pl-6">
        {label}
        <p className="serif-accent mt-3 !not-italic text-[1.375rem] leading-snug text-ink sm:text-[1.625rem]">
          {figure.body}
        </p>
      </li>
    );
  }
  return (
    <li data-reveal className="grid gap-4 sm:gap-5">
      {figure.visual === "before" || figure.visual === "after" ? (
        <FigureVisual figure={figure} feature={feature} />
      ) : (
        <div className="well !rounded-[var(--radius-lg)] bg-surface p-3 sm:p-5">
          <FigureVisual figure={figure} feature={feature} />
        </div>
      )}
      <div className="grid gap-2 sm:grid-cols-[14rem_1fr] sm:gap-6">
        {label}
        <p className="text-ink-2">{figure.body}</p>
      </div>
    </li>
  );
}

function Chapter({ feature, index, total }: { feature: Feature; index: number; total: number }) {
  return (
    <article id={feature.id} aria-labelledby={`${feature.id}-title`} className="scroll-mt-28">
      <header className="max-w-2xl">
        <p className="label" data-reveal="fade">
          {total > 1 ? `Part ${index + 1} of ${total}` : "Case study"}
        </p>
        <h2 id={`${feature.id}-title`} className="h-section mt-3">
          <Words parts={[feature.title]} />
        </h2>
        <p className="lede mt-4 !text-base sm:!text-lg" data-reveal style={{ ["--d" as string]: "200ms" }}>
          {feature.summary}
        </p>
      </header>

      <ol className="mt-10 space-y-12 sm:mt-14 sm:space-y-16">
        {feature.figures.map((f, i) => (
          <FigureItem key={f.title} figure={f} n={i + 1} feature={feature} />
        ))}
      </ol>

      {/* The full detail, for readers who want it */}
      <details className="group panel mt-12 !rounded-[var(--radius-md)] px-5 sm:px-7">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium [&::-webkit-details-marker]:hidden">
          Read the full write-up
          <span
            aria-hidden="true"
            className="grid size-7 shrink-0 place-items-center rounded-full border border-line-2 transition-transform duration-300 group-open:rotate-45"
          >
            <Plus className="size-3.5" />
          </span>
        </summary>
        <div className="grid gap-8 pb-8 sm:grid-cols-2 sm:gap-10">
          <WriteUpBlock title="Problem">
            <Paras items={feature.problem} />
          </WriteUpBlock>
          <WriteUpBlock title="Hypothesis">
            <Paras items={feature.hypothesis} />
          </WriteUpBlock>
          <WriteUpBlock title="Goals">
            <List items={feature.goals} />
            <p className="mt-3 text-sm text-ink-3">Measured by: {feature.measures}</p>
          </WriteUpBlock>
          <WriteUpBlock title="What I did">
            <List items={feature.process} ordered />
          </WriteUpBlock>
          <WriteUpBlock title="My role">
            <Paras items={feature.ownership} />
          </WriteUpBlock>
          <WriteUpBlock title="Solution">
            <Paras items={feature.solution} />
          </WriteUpBlock>
          <WriteUpBlock title="Key decisions">
            <List items={feature.decisions} ordered />
          </WriteUpBlock>
          <WriteUpBlock title="Trade-offs">
            <List items={feature.tradeoffs} />
          </WriteUpBlock>
          <WriteUpBlock title="Validation plan">
            <List items={feature.validation} ordered />
          </WriteUpBlock>
          <WriteUpBlock title="Outcome and next steps">
            <Paras items={[...feature.outcomes, ...feature.reflection]} />
          </WriteUpBlock>
        </div>
      </details>
    </article>
  );
}

/* ---------- Page ---------- */

export function CaseStudy({ project, others }: { project: Project; others: Project[] }) {
  const testimonial = project.testimonialId ? getTestimonial(project.testimonialId) : undefined;
  const facts = [
    { k: "Role", v: project.role },
    { k: "Timeline", v: project.dates },
    { k: "Team", v: project.team },
    { k: "Platform", v: project.platform },
  ];

  return (
    <>
      <header className="container-x pt-10 sm:pt-16">
        <nav aria-label="Breadcrumb" className="ledger">
          <Link href="/#work" className="hover:text-ink">
            [Back]
          </Link>
        </nav>
        <div className="mt-8 grid items-end gap-8 sm:mt-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <p className="ledger flex flex-wrap gap-x-3 gap-y-1">
              <span className="text-ink">{project.name}</span>
              {project.tags.map((t) => (
                <span key={t} className="flex gap-3">
                  <span aria-hidden="true">·</span>
                  {t}
                </span>
              ))}
            </p>
            <h1 className="h-display mt-5 !text-[clamp(1.875rem,4.2vw,3.25rem)]">
              <Words parts={[project.headline]} delay={80} />
            </h1>
            <p className="lede mt-5 !text-base sm:!text-lg" data-reveal style={{ ["--d" as string]: "350ms" }}>
              {project.summary}
            </p>
          </div>
          <ViewTransition name={`media-${project.slug}`} share="morph" default="none">
            <div className="well aspect-[4/3] !rounded-[var(--radius-lg)]">
              <Video
                src={project.motion.src}
                poster={project.motion.poster}
                label={`${project.name} product motion`}
                className="h-full w-full object-cover"
              />
            </div>
          </ViewTransition>
        </div>

        <dl className="stagger mt-10 grid grid-cols-2 border-y border-dashed border-line-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.k}
              data-reveal="fade"
              className={`border-dashed border-line-2 py-4 sm:py-5 ${i % 2 === 1 ? "border-l pl-4 sm:pl-5" : "pr-4"} ${
                i > 1 ? "border-t lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-5" : ""}`}
            >
              <dt className="label">{f.k}</dt>
              <dd className="mt-1.5 text-sm text-ink-2">{f.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="container-x mt-16 space-y-24 sm:mt-24 sm:space-y-32">
        <div className="mx-auto max-w-3xl space-y-24 sm:space-y-32">
          {project.features.map((f, i) => (
            <Chapter key={f.id} feature={f} index={i} total={project.features.length} />
          ))}

          {/* Results: three numbers and one honest close */}
          <section aria-labelledby="results-title">
            <h2 id="results-title" className="label" data-reveal="fade">
              Results
            </h2>
            <dl className="stagger mt-5 grid grid-cols-3 border-y border-dashed border-line-2">
              {project.stats.map((s, i) => (
                <div key={s.label} data-reveal="fade" className={`py-5 ${i > 0 ? "border-l border-dashed border-line-2 pl-3 sm:pl-5" : "pr-3"}`}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <CountUp value={s.value} className="figure block text-xl sm:text-3xl" />
                    <span className="ledger mt-2 block !normal-case !tracking-normal">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="serif-accent mt-8 !not-italic text-[1.375rem] leading-snug sm:text-[1.75rem]" data-reveal>
              {project.closing}
            </p>
            <p className="mt-6 text-ink-2" data-reveal>
              Want the full story?{" "}
              <Link href="/contact" className="grow-underline text-ink">
                Ask me for a walkthrough
              </Link>
              .
            </p>
          </section>
        </div>

        {testimonial && (
          <section aria-label="Testimonial">
            <TestimonialCard t={testimonial} large />
          </section>
        )}

        <section aria-labelledby="more-cases">
          <h2 id="more-cases" className="h-section">
            <Words parts={["More case studies"]} />
          </h2>
          <div className="stagger mt-8 grid gap-x-5 gap-y-10 md:grid-cols-2">
            {others.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} data-reveal className="group block">
                <div className="well aspect-[4/3] !rounded-[var(--radius-lg)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL ?? ""}/${p.motion.poster}`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <span>
                    <span className="ledger block !text-[12px] !text-ink sm:!text-[13px]">{p.caption}</span>
                    <span className="ledger mt-1.5 block">{p.name}</span>
                  </span>
                  <Arrow className="mt-0.5 size-4 shrink-0 text-ink-3 transition-colors group-hover:text-ink" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
