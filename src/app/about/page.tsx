import type { Metadata } from "next";
import Link from "next/link";
import { Experience } from "@/components/Experience";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/Section";
import { education, site, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Evelyn Joseph is a product designer in Lagos, Nigeria, specialising in visual, interaction and motion design.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const status = (
    <div className="panel p-5" data-reveal style={{ ["--d" as string]: "150ms" }}>
      <p className="flex items-center gap-3 font-medium">
        <span aria-hidden="true" className="live-dot size-2.5 shrink-0 rounded-full bg-[#4ade80]" />
        Ready for my next big product challenge
      </p>
      <p className="mt-4 flex items-center gap-3 border-t border-line pt-4 text-sm text-ink-2">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0 text-ink-3" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        <span className="flex flex-wrap gap-x-2">
          <span className="whitespace-nowrap">Based in Lagos, Nigeria</span>
          <span aria-hidden="true" className="max-[380px]:hidden">·</span>
          <span className="whitespace-nowrap">Open to remote roles</span>
        </span>
      </p>
    </div>
  );

  return (
    <>
      <PageHero
        label="About"
        title="I design the parts of a product people see, touch and feel."
        aside={
          <div className="flex gap-3">
            <Link href="/contact" className="btn btn-light">
              Let&apos;s chat <Arrow />
            </Link>
            <a href={site.cvPdf} download className="btn btn-outline">
              CV (PDF)
            </a>
          </div>
        }
      />

      <section
        className="container-x grid gap-10 pt-8 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:gap-14 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-20"
        aria-label="Biography"
      >
        <div className="space-y-4 md:sticky md:top-28 md:h-fit">
<div
            data-reveal
            aria-hidden="true"
            className="well grid aspect-[4/5] place-items-center !rounded-[var(--radius-lg)] bg-[radial-gradient(120%_90%_at_30%_20%,#262626,#0d0d0d)]"
          >
            <span className="serif-accent text-[7rem] leading-none text-result sm:text-[9rem]">EJ</span>
          </div>
          {status}
        </div>

        <div>
          <p className="label" data-reveal="fade">
            My story
          </p>
          <div className="stagger mt-6 space-y-6 text-lg leading-relaxed text-ink-2">
            <p data-reveal>
              <span className="serif-accent text-[1.6em] leading-none text-ink">I care about how a product feels.</span>{" "}
              I&apos;m a product designer in Lagos, and my focus is the part people actually see and touch: the visual
              design, the interactions and the motion that ties them together.
            </p>
            <p data-reveal>
              Since 2021 I&apos;ve worked on a cross-border payments platform at Swiftpoint, a multi-tenant enterprise
              workspace at AlsoIT, and Talstrike, a sports talent platform that reached 10,000+ subscribers in its first
              year.
            </p>
            <p data-reveal>
              My degree in accounting and financial technology helps me design money screens people trust: clear numbers,
              honest states and no surprises at the moment someone pays.
            </p>
            <p data-reveal>
              I work in Figma with design tokens and component libraries, bring flows to life with After Effects and
              Blender, and use AI tools where a team&apos;s{" "}
              <Link className="link text-ink" href="/process">
                policy
              </Link>{" "}
              allows.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pt-24" aria-labelledby="experience-title">
        <SectionHead id="experience-title" label="Experience" title="Where I've worked" />
        <div className="mt-10">
          <Experience />
        </div>
      </section>

      <section className="container-x grid gap-12 pt-24 lg:grid-cols-2" aria-label="Skills and education">
        <div>
          <SectionHead label="Skills" title="What I bring" />
          <dl className="stagger mt-8 space-y-5">
            {skills.map((s) => (
              <div key={s.group} data-reveal>
                <dt className="font-medium">{s.group}</dt>
                <dd className="mt-1 text-ink-2">{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <SectionHead label="Education" title="Background" />
          <ul className="stagger mt-8 space-y-3 text-ink-2">
            {education.map((e) => (
              <li key={e} data-reveal className="border-b border-line pb-3">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}
