import Link from "next/link";
import { ViewTransition } from "react";
import type { Project } from "@/content/projects";
import { CountUp } from "./CountUp";
import { Arrow } from "./Icons";
import { Video } from "./Media";

/** Image-first project card: product motion, then a one-line caption (Kristian Phoenix-style). */
export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const href = `/work/${project.slug}`;
  const lead = project.stats[0];
  return (
    <article data-reveal className="group relative">
      <ViewTransition name={`media-${project.slug}`} share="morph" default="none">
        <div className={`well !rounded-[var(--radius-lg)] ${featured ? "aspect-[4/3] md:aspect-[16/8]" : "aspect-[4/3]"}`}>
          <Video
            src={project.motion.src}
            poster={project.motion.poster}
            label={`${project.name} product motion`}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          />
        </div>
      </ViewTransition>
      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className="min-w-0">
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            <span className="ledger block !text-[12px] !text-ink sm:!text-[13px]">{project.caption}</span>
            <span className="ledger mt-1.5 block">{project.name}</span>
          </Link>
        </h3>
        <p className="hidden shrink-0 text-right sm:block">
          <CountUp value={lead.value} className="figure block text-lg" />
          <span className="ledger block !normal-case !tracking-normal">{lead.label}</span>
        </p>
        <Arrow className="mt-0.5 size-4 shrink-0 text-ink-3 transition-colors group-hover:text-ink sm:hidden" />
      </div>
    </article>
  );
}

export function SmallWorkCard({
  item,
}: {
  item: { name: string; title: string; role: string; tags: string[]; motion: { src: string; poster: string } };
}) {
  return (
    <div data-reveal className="h-full">
    <article className="panel lift group flex h-full flex-col gap-5 p-4 sm:p-5">
      <div className="well aspect-[4/3]">
        <Video src={item.motion.src} poster={item.motion.poster} label={`${item.name} motion`} className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]" />
      </div>
      <div className="px-1 pb-1">
        <p className="ledger flex flex-wrap gap-x-3">
          <span className="text-ink">{item.name}</span>
          {item.tags.map((t) => (
            <span key={t} className="flex gap-3">
              <span aria-hidden="true">·</span>
              {t}
            </span>
          ))}
        </p>
        <h3 className="mt-3 text-lg font-medium leading-snug tracking-[-0.015em]">{item.title}</h3>
        <p className="mt-2 text-sm text-ink-3">{item.role}</p>
      </div>
    </article>
    </div>
  );
}
