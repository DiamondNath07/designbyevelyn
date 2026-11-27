import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PolicyProcess } from "@/components/PolicyProcess";
import { SectionHead } from "@/components/Section";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Evelyn Joseph's end-to-end product design process, from discovery to delivery, and how she adapts it to a company's AI policy: no AI, approved tools only, or AI-first.",
  alternates: { canonical: "/process" },
};

const constants = [
  {
    title: "Real users, every time",
    body: "I run interviews and usability tests myself. Tools can summarise sessions; they don't replace watching people use the product.",
  },
  {
    title: "Decisions stay human",
    body: "Problem framing, trade-offs and design direction are made by me and the team, and I can explain the reasoning behind each one.",
  },
  {
    title: "Accessibility checked by hand",
    body: "I design to WCAG from the start and verify with keyboard and assistive technology, not only automated checks.",
  },
  {
    title: "Your data stays within policy",
    body: "Confidential or personal data never goes into a tool your company hasn't approved. When in doubt, I ask first.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero label="Process" title="A proven process, with or without AI.">
        Whatever the tools, I follow the same end-to-end process: discover, define, ideate, prototype, test and
        deliver. How much AI I use depends on your company&apos;s policy, from none at all to AI-first.
      </PageHero>

      <section className="container-x" aria-labelledby="process-title">
        <SectionHead id="process-title" label="End to end" title="One process, adapted to your policy" />
        <PolicyProcess />
      </section>

      <section className="container-x pt-24" aria-labelledby="constants-title">
        <SectionHead id="constants-title" label="Constants" title="What never changes" />
        <ul className="stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {constants.map((c) => (
            <li key={c.title} data-reveal className="panel p-6">
              <h3 className="text-lg font-medium tracking-[-0.01em]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>

    </>
  );
}
