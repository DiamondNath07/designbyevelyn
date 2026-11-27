import type { Metadata } from "next";
import { Lato } from "next/font/google";
import type { ReactNode } from "react";
import { Arrow } from "@/components/Icons";
import { cv } from "@/content/cv";
import { site } from "@/content/site";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], display: "swap" });

export const metadata: Metadata = {
  title: "CV",
  description: "CV of Nathaniel Diamond, senior product designer.",
  alternates: { canonical: "/cv" },
};

const NAVY = "text-[#1f3864]";

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className={`border-b-[1.5px] border-[#1f3864] pb-1 text-[13px] font-bold tracking-[0.1em] uppercase ${NAVY}`}>
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

type Entry = { company: string; title: string; dates: string; points: string[] };

function Role({ r }: { r: Entry }) {
  return (
    <div className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-bold text-[#111]">{r.company}</h3>
        <span className="font-bold text-[#111] tabular-nums">{r.dates}</span>
      </div>
      <p className={`italic ${NAVY}`}>{r.title}</p>
      <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-[#111]">
        {r.points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
    </div>
  );
}

/** The CV as a white sheet, matching the downloadable PDF. */
export default function CVPage() {
  return (
    <div className="container-x pt-10 pb-8 sm:pt-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="label">CV</p>
        <a href={site.cvPdf} download className="btn btn-light">
          Download PDF <Arrow />
        </a>
      </div>

      <article
        data-reveal
        className={`${lato.className} mx-auto max-w-[52rem] rounded-[var(--radius-md)] bg-white px-6 py-10 text-[14px] leading-[1.5] text-[#222] sm:px-14 sm:py-14`}
      >
        <header className="text-center">
          <h1 className={`text-[28px] font-bold tracking-[0.06em] uppercase sm:text-[34px] ${NAVY}`}>{cv.name}</h1>
          <p className={`mt-1 text-[15px] font-bold ${NAVY}`}>{cv.title}</p>
          <p className="mt-1 flex flex-wrap justify-center gap-x-3 text-[13px] sm:gap-x-2 text-[#555]">
            {cv.contact.map((c, i) => (
              <span key={c.label} className="flex gap-2">
                {i > 0 && <span aria-hidden="true" className="max-sm:hidden">|</span>}
                {c.href ? (
                  <a href={c.href} className={`inline-block min-h-6 leading-6 ${c.href.startsWith("https") ? `underline ${NAVY}` : "hover:underline"}`}>
                    {c.label}
                  </a>
                ) : (
                  c.label
                )}
              </span>
            ))}
          </p>
        </header>

        <CvSection title="Professional summary">
          <p className="sm:text-justify">{cv.summary}</p>
        </CvSection>

        <CvSection title="Professional experience">
          <div className="space-y-3">
            {cv.experience.map((r) => (
              <Role key={r.company} r={r} />
            ))}
          </div>
        </CvSection>

        <CvSection title="Skills">
          <ul className="space-y-1">
            {cv.skills.map((s) => (
              <li key={s.group}>
                <span className="font-bold text-[#111]">{s.group}:</span> {s.text}
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title="Education & certifications">
          <div className="space-y-2">
            {cv.education.map((e) => (
              <div key={e.degree}>
                <p className="font-bold text-[#111]">{e.degree}</p>
                <p>{e.school}</p>
              </div>
            ))}
            <p>{cv.certifications.join("  |  ")}</p>
          </div>
        </CvSection>

        <CvSection title="Honours & awards">
          <ul className="list-disc space-y-1 pl-5 marker:text-[#111]">
            {cv.awards.map((a) => (
              <li key={a.title}>
                <span className="font-bold text-[#111]">{a.title}:</span> {a.text}
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title="Volunteering">
          {cv.volunteering.map((r) => (
            <Role key={r.company} r={r} />
          ))}
        </CvSection>
      </article>
    </div>
  );
}
