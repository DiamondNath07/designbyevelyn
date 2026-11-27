import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CaseStudy } from "@/components/CaseStudy";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name}: ${project.headline}`,
    description: `${project.tagline} ${project.role}, ${project.dates}.`,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

async function CaseStudyContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const others = projects.filter((p) => p.slug !== slug);
  return <CaseStudy project={project} others={others} />;
}

export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  // Known slugs are fully prerendered at build time; the boundary only matters for unknown URLs.
  return (
    <Suspense fallback={<div className="container-x min-h-[60vh] pt-24" aria-busy="true" />}>
      <CaseStudyContent params={params} />
    </Suspense>
  );
}
