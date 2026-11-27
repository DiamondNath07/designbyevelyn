import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { Arrow } from "@/components/Icons";
import { HeadlineCarousel } from "@/components/HeadlineCarousel";
import { Img } from "@/components/Media";
import { ProjectCard, SmallWorkCard } from "@/components/ProjectCard";
import { SectionHead } from "@/components/Section";
import { moreWork, projects } from "@/content/projects";
import { clients, experience, site } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero: who, what, proof — nothing else */}
      <section className="relative overflow-hidden" aria-label="Introduction">
        <div aria-hidden="true" className="grid-bg absolute inset-0" />
        <div className="container-x relative pt-14 pb-12 sm:pt-28 sm:pb-20">
          <p className="ledger rise">Product designer</p>
          <div className="rise rise-2 mt-5 max-w-4xl">
            <HeadlineCarousel
              lead="I design"
              phrases={[
                "fintech people trust.",
                "interfaces that feel effortless.",
                "motion that explains.",
                "systems teams build on.",
              ]}
              srText={`${site.name}, product designer. I design fintech people trust, interfaces that feel effortless, motion that explains, and systems teams build on.`}
            />
          </div>
          <p className="lede mt-7 max-w-xl text-base sm:text-lg" data-reveal style={{ ["--d" as string]: "300ms" }}>
            5+ years of visual, interaction and motion design across fintech, SaaS and AI, on products like a sports
            platform with 10K+ subscribers and payments in 10 countries.
          </p>
          <div
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            data-reveal
            style={{ ["--d" as string]: "420ms" }}
          >
            <div className="flex gap-3">
              <Link href="#work" className="btn btn-light flex-1 sm:flex-none">
                View work <Arrow />
              </Link>
              <a href={site.cvPdf} download className="btn btn-outline flex-1 sm:flex-none">
                Download CV
              </a>
            </div>
            <Link href="/contact" className="group flex items-center gap-2.5 text-sm text-ink-2 hover:text-ink sm:ml-2">
              <span aria-hidden="true" className="live-dot size-2 shrink-0 rounded-full bg-result" />
              <span>
                Building something interesting? <span className="grow-underline text-ink">Let&apos;s talk</span>
              </span>
            </Link>
          </div>

          {/* Results statement */}
          <p className="ledger mt-12 sm:mt-14" data-reveal="fade" style={{ ["--d" as string]: "500ms" }}>
            Products I&apos;ve contributed to
          </p>
          <dl
            className="stagger mt-4 grid grid-cols-2 border-y border-dashed border-line-2 sm:grid-cols-4"
            data-reveal="fade"
            style={{ ["--d" as string]: "520ms" }}
          >
            {[
              ["10K+", "subscribers in year one"],
              ["+85%", "sign-ups after V2"],
              ["10", "countries supported"],
              ["3×", "valuation growth"],
            ].map(([v, l], i) => (
              <div
                key={l}
                className={`border-dashed border-line-2 px-4 py-5 ${
                  ["!pl-0", "border-l", "border-t !pl-0 sm:border-t-0 sm:border-l sm:!pl-4", "border-t border-l sm:border-t-0"][i]
                }`}
              >
                <dt className="sr-only">{l}</dt>
                <dd>
                  <CountUp value={v} className="figure block text-[1.75rem] sm:text-4xl" />
                  <span className="ledger mt-2 block !text-[10px] sm:!text-[11px]">{l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Teams — a calm, continuous logo band that works at any width */}
      <section aria-labelledby="clients-title" className="border-y border-line py-6 sm:py-8">
        <h2 id="clients-title" className="ledger container-x">
          Teams I&apos;ve worked with
        </h2>
        <div className="marquee mt-5 overflow-hidden" data-reveal="fade">
          <ul className="marquee-track items-center">
            {[...clients, ...clients].map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                data-dup={i >= clients.length ? "" : undefined}
                aria-hidden={i >= clients.length ? true : undefined}
                className="flex h-12 shrink-0 items-center px-5 sm:h-14 sm:px-10"
              >
                <Img src={c.logo} alt={i >= clients.length ? "" : c.name} sizes="160px" className="h-9 w-auto opacity-75 sm:h-10" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="container-x scroll-mt-28 pt-20 sm:pt-32" aria-labelledby="work-title">
        <SectionHead
          id="work-title"
          label="Selected work"
          title="Case studies"
          action={<p className="ledger">Two-minute reads</p>}
        />
        <div className="stagger mt-8 grid gap-x-5 gap-y-10 sm:mt-10 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.slug} className="md:col-span-2">
              <ProjectCard project={p} featured />
            </div>
          ))}
        </div>

        <p className="ledger mt-16 sm:mt-20" data-reveal="fade">
          More projects
        </p>
        <div className="stagger mt-5 grid gap-5 md:grid-cols-2">
          {moreWork.map((m) => (
            <SmallWorkCard key={m.name} item={m} />
          ))}
        </div>
      </section>

      {/* Experience at a glance */}
      <section className="container-x pt-24 sm:pt-32" aria-labelledby="exp-title">
        <SectionHead
          id="exp-title"
          label="Experience"
          title="5+ years in product design"
          action={
            <Link href="/about" className="btn btn-outline">
              More about me <Arrow />
            </Link>
          }
        />
        <ol className="stagger mt-10 divide-y divide-line border-y border-line">
          {experience.map((r) => (
            <li key={r.company} data-reveal className="row-hover grid gap-1 py-5 sm:grid-cols-[1fr_1.4fr_auto] sm:items-baseline sm:gap-6">
              <span className="font-medium">{r.company}</span>
              <span className="text-ink-2">{r.title}</span>
              <span className="ledger tabular-nums">{r.dates}</span>
            </li>
          ))}
        </ol>
      </section>

    </>
  );
}
