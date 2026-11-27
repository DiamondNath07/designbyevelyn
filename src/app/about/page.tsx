import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Experience } from "@/components/Experience";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { awards, education, site, skills, testimonials } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nathaniel Diamond is a remote senior product designer with 7+ years across fintech, enterprise SaaS and consumer platforms.",
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
          <span className="whitespace-nowrap">Based in Manchester, UK</span>
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
        title="I design for moments where getting it wrong costs people money or opportunity."
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
          <figure data-reveal className="portrait well overflow-hidden !rounded-[var(--radius-lg)]">
            <Image
              src="/images/nathaniel-diamond.webp"
              alt="Portrait of Nathaniel Diamond"
              width={880}
              height={1100}
              sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, 100vw"
              priority
              className="h-auto w-full object-cover"
            />
          </figure>
          {status}
        </div>

        <div>
          <p className="label" data-reveal="fade">
            My story
          </p>
          <div className="stagger mt-6 space-y-6 text-lg leading-relaxed text-ink-2">
            <p data-reveal>
              <span className="serif-accent text-[1.6em] leading-none text-ink">My first design job wasn&apos;t in tech.</span>{" "}
              It was a student job at a printing press back in 2017, during my undergraduate degree, designing whatever came through
              the door that week. Real clients, real deadlines, and no room for something that only looked good on
              screen.
            </p>
            <p data-reveal>
              That&apos;s where the web caught my attention. I started building websites, and that led me into software
              development. I loved making things work, but I kept noticing that the part I cared about most wasn&apos;t
              the code. It was how the screen felt to the person using it.
            </p>
            <p data-reveal>
              So I followed that. I moved into product design, and Figma became my main tool, with After Effects and Blender for motion.
            </p>
            <p data-reveal>
              That path gave me an unusual mix. I design like a designer, think about how it will be built like an
              engineer, and, thanks to my finance degrees, ask whether it makes business sense. The screens I care about
              solve a real problem for people and earn their place in the product.
            </p>
            <p data-reveal>
              These days AI is part of how I work, within each company&apos;s{" "}
              <Link className="link text-ink" href="/process">
                policy
              </Link>
              . It gets me from an idea to something testable faster and makes working with engineers smoother. Outside
              client work, I design websites for charities with Reach Volunteering.
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
          <SectionHead label="Education & awards" title="Learning and recognition" />
          <ul className="stagger mt-8 space-y-3 text-ink-2">
            {[...education, ...awards].map((e) => (
              <li key={e} data-reveal className="border-b border-line pb-3">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x pt-24" aria-labelledby="testimonials-title">
        <SectionHead id="testimonials-title" label="Testimonials" title="From people I've worked with" />
        <div className="stagger mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </section>
    </>
  );
}
