"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Arrow } from "./Icons";

type Mode = "none" | "approved" | "ai";

const modes: { id: Mode; label: string; title: string; body: string }[] = [
  {
    id: "none",
    label: "No AI",
    title: "The full process, industry-standard toolkit",
    body: "For teams that don't allow AI tools. Every stage still happens, with nothing lost in quality.",
  },
  {
    id: "approved",
    label: "Approved tools",
    title: "The same process, plus what your company signs off",
    body: "A mixed setup: the standard toolkit stays, and I add only the AI tools your security and legal teams approve, with anonymised data.",
  },
  {
    id: "ai",
    label: "AI-first",
    title: "The fastest route to a tested, coded prototype",
    body: "For teams that embrace AI. Same stages, but synthesis, exploration and prototyping move from weeks to days.",
  },
];

const stages: { name: string; goal: string; output: string; how: Record<Mode, string> }[] = [
  {
    name: "Discover",
    goal: "Understand the users, the business and the constraints.",
    output: "Research insights, problem map",
    how: {
      none: "Stakeholder and user interviews, analytics review, competitor audit and affinity mapping in FigJam.",
      approved: "The same research, with an approved assistant drafting interview guides and summarising anonymised notes.",
      ai: "Claude clusters themes across interviews, tickets and surveys. I check every theme against the source and still talk to users myself.",
    },
  },
  {
    name: "Define",
    goal: "Frame the right problem and agree what success looks like.",
    output: "Problem statement, journey map, success metrics",
    how: {
      none: "Jobs-to-be-done, journey mapping in UXPressia, how-might-we framing and a prioritisation workshop with product and engineering.",
      approved: "Approved tools draft journeys and edge-case lists from the research, which the team reviews in the workshop.",
      ai: "Claude stress-tests problem statements and drafts metrics and edge cases. The team makes the decisions.",
    },
  },
  {
    name: "Ideate",
    goal: "Explore many directions before committing to one.",
    output: "User flows, sketches, wireframes",
    how: {
      none: "Sketching, Crazy 8s, user flows and low-fidelity wireframes in Figma, then a structured critique.",
      approved: "Figma AI, where enabled, for first-draft layouts and content variants on the design system.",
      ai: "Claude Design and Figma Make generate several directions quickly. I choose and refine them against the system and the brief.",
    },
  },
  {
    name: "Prototype",
    goal: "Make it real enough to test with people.",
    output: "Interactive prototype",
    how: {
      none: "High-fidelity Figma or ProtoPie prototypes built from components and variables, with real content and key states.",
      approved: "Figma prototypes, plus coded prototypes where your approved coding assistant allows it.",
      ai: "Coded prototypes with Cursor, Claude Code and v0, using real data and loading, empty and error states, built in days.",
    },
  },
  {
    name: "Test",
    goal: "Learn from real users and iterate.",
    output: "Findings, iteration plan",
    how: {
      none: "Moderated and unmoderated usability tests in Maze or Lookback, measuring task success and time on task, then iteration.",
      approved: "The same tests, with approved tools for transcripts and first-pass summaries of anonymised sessions.",
      ai: "Users test the coded prototype and Claude tags session notes. I watch every session and decide the findings.",
    },
  },
  {
    name: "Deliver & measure",
    goal: "Ship it with engineering, then check it worked.",
    output: "Specs, design-system components, release metrics",
    how: {
      none: "Specs in Figma Dev Mode, tokenised components, tickets in Jira, design QA, an accessibility audit and analytics after launch.",
      approved: "Approved tools draft specs and edge-case checklists, which I review with engineers before handoff.",
      ai: "Claude Code drafts specs and token-mapped components. I pair with engineers and verify accessibility by hand.",
    },
  },
];

type Tool = { name: string; ai?: boolean };
const t = (...names: string[]): Tool[] => names.map((name) => ({ name }));
const a = (...names: string[]): Tool[] => names.map((name) => ({ name, ai: true }));

const toolkit: Record<Mode, { group: string; tools: Tool[] }[]> = {
  none: [
    { group: "Research", tools: t("Google Analytics", "Hotjar", "Typeform", "Zoom") },
    { group: "Synthesis & define", tools: t("FigJam", "Miro", "Dovetail", "UXPressia") },
    { group: "Design", tools: t("Figma", "Design tokens", "Component libraries") },
    { group: "Prototype", tools: t("Figma prototyping", "ProtoPie") },
    { group: "Test", tools: t("Maze", "Lookback", "UserTesting") },
    { group: "Handoff & QA", tools: t("Figma Dev Mode", "Jira", "Storybook", "axe DevTools") },
  ],
  approved: [
    { group: "Research", tools: [...t("Google Analytics", "Hotjar", "Zoom"), ...a("Microsoft Copilot")] },
    { group: "Synthesis & define", tools: [...t("FigJam", "Dovetail", "UXPressia"), ...a("ChatGPT Enterprise")] },
    { group: "Design", tools: [...t("Figma", "Design tokens"), ...a("Figma AI")] },
    { group: "Prototype", tools: [...t("Figma prototyping", "ProtoPie"), ...a("GitHub Copilot")] },
    { group: "Test", tools: [...t("Maze", "Lookback"), ...a("Gemini for Workspace")] },
    { group: "Handoff & QA", tools: [...t("Figma Dev Mode", "Jira", "Storybook"), ...a("Atlassian Intelligence")] },
  ],
  ai: [
    { group: "Research", tools: [...a("Claude"), ...t("Google Analytics", "Zoom")] },
    { group: "Synthesis & define", tools: [...a("Claude"), ...t("FigJam", "UXPressia")] },
    { group: "Design", tools: [...a("Claude Design", "Figma Make"), ...t("Figma")] },
    { group: "Prototype", tools: a("Cursor", "Claude Code", "v0") },
    { group: "Test", tools: [...t("Maze"), ...a("Claude")] },
    { group: "Handoff & QA", tools: [...a("Claude Code"), ...t("Figma variables", "GitHub")] },
  ],
};

const handoff: Record<Mode, { title: string; body: string[] }> = {
  none: {
    title: "Designs engineers can build from",
    body: [
      "I hand over in Figma Dev Mode: annotated specs, every state designed (loading, empty, error) and components built on design tokens that match the codebase.",
      "I pair with engineers during the build, run design QA against the spec and check accessibility before release.",
    ],
  },
  approved: {
    title: "Faster drafts, same sign-off",
    body: [
      "Approved assistants draft specs, edge-case lists and UX copy from my designs. I review every line before it reaches engineering.",
      "Where your approved coding assistant allows it, I add a coded prototype for complex interactions; where it doesn't, Figma prototypes do the job.",
    ],
  },
  ai: {
    title: "I build with Claude",
    body: [
      "I use Claude and Claude Code to turn designs into working, coded prototypes: real states, real data and real interactions that teams can test before engineering commits.",
      "It lets me hand engineers something closer to production, and spend more of my time on the decisions that need a designer.",
    ],
  },
};

const aiPrinciples = [
  {
    title: "Ask for intent before results",
    body: "At Talstrike, scouts describe the opportunity first. Good AI output starts with a clear brief, so the interface collects one.",
  },
  {
    title: "Make flexibility explicit",
    body: "Hard requirements decide eligibility; soft preferences change ranking. People can see, and change, how the system is weighing things.",
  },
  {
    title: "Keep people responsible for the decision",
    body: "AI surfaces candidates; the scout evaluates them. The design leads straight from results into the person's own judgement.",
  },
  {
    title: "Measure relevance, not just speed",
    body: "Reaching an unsuitable result quickly isn't success. I test no-match states, incomplete data and refinement, not only the happy path.",
  },
];

const swiftpoint = [
  { title: "Concept to clickable prototype in 1 week", body: "A Figma prototype the founders could put in front of users, followed by a live MVP within a few months." },
  { title: "Three months of payment research", body: "Interviews and testing behind a unified bill-payments page with one shared transaction log." },
  { title: "Designed with payments engineers", body: "Every gateway response mapped to a confirmation, status or failure screen, so people never pay twice." },
  { title: "Research across 10 markets", body: "Regional friction found in the field, then multi-currency flows simplified with progressive disclosure." },
];

function SubHead({ label, title, action }: { label: string; title: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="label">{label}</p>
        <h3 className="mt-3 text-[1.625rem] font-medium leading-tight tracking-[-0.025em] sm:text-[2rem]">{title}</h3>
      </div>
      {action}
    </div>
  );
}

/** The same process with the AI level switchable to match a company's policy. Everything below the switch follows it. */
export function PolicyProcess() {
  const [mode, setMode] = useState<Mode>("none");
  const [touched, setTouched] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const top = useRef<HTMLDivElement>(null);
  const index = modes.findIndex((m) => m.id === mode);
  const current = modes[index];
  const next = modes[(index + 1) % modes.length];

  const choose = (m: Mode) => {
    setMode(m);
    setTouched(true);
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (i + dir + modes.length) % modes.length;
    choose(modes[n].id);
    tabs.current[n]?.focus();
  };

  const goNext = () => {
    choose(next.id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    top.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="mt-10">
      <div ref={top} className="scroll-mt-24 sm:scroll-mt-28">
        <p className="text-lg font-medium tracking-[-0.01em]">Choose a company AI policy to see how my workflow changes.</p>
        <p className="mt-1 text-ink-3">Everything below this switch updates: the stages, my toolkit, how I hand over and the work I show.</p>
      </div>

      {/* Switch: pinned under the header while you read the section */}
      <div className="sticky top-[76px] z-30 -mx-4 mt-6 bg-bg/95 px-4 py-3 backdrop-blur-xl sm:top-[92px] sm:py-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <div className={`policy-switch relative rounded-full sm:w-[30rem] ${touched ? "" : "is-idle"}`}>
            <div role="tablist" aria-label="Company AI policy" className="relative grid grid-cols-3 rounded-full border border-line-2 bg-panel p-1">
              <span
                aria-hidden="true"
                className="absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(${index * 100}%)` }}
              />
              {modes.map((m, i) => (
                <button
                  key={m.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${m.id}`}
                  aria-selected={mode === m.id}
                  aria-controls="policy-panel"
                  tabIndex={mode === m.id ? 0 : -1}
                  onClick={() => choose(m.id)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`relative min-h-11 cursor-pointer rounded-full px-2 text-[13px] font-medium transition-colors duration-300 sm:text-sm ${
                    mode === m.id ? "text-bg" : "text-ink-2 hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
          <p className="ledger flex items-center gap-2" aria-hidden="true">
            {touched ? (
              <>
                <span className="tabular-nums text-ink-2">{String(index + 1).padStart(2, "0")}</span> / 03 workflows
              </>
            ) : (
              <>
                <span className="live-dot" /> 3 workflows · tap to compare
              </>
            )}
          </p>
        </div>
      </div>

      <div id="policy-panel" role="tabpanel" aria-labelledby={`tab-${mode}`} aria-live="polite">
        <div key={`intro-${mode}`} className="swap mt-6 max-w-2xl">
          <p className="text-lg font-medium tracking-[-0.01em]">{current.title}</p>
          <p className="mt-1 text-ink-2">{current.body}</p>
        </div>

        {/* Stages */}
        <ol className="mt-8 border-t border-line">
          {stages.map((s, i) => (
            <li
              key={s.name}
              className="grid gap-3 border-b border-line py-6 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_minmax(0,13rem)] md:gap-8"
            >
              <div>
                <p className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-medium tracking-[-0.015em]">{s.name}</span>
                </p>
                <p className="mt-1 text-sm text-ink-3 md:pl-7">{s.goal}</p>
              </div>
              <p key={`${s.name}-${mode}`} className="swap leading-relaxed text-ink-2">
                {s.how[mode]}
              </p>
              <p className="text-sm">
                <span className="label block">Output</span>
                <span className="mt-1 block text-ink-2">{s.output}</span>
              </p>
            </li>
          ))}
        </ol>

        {/* Toolkit */}
        <div className="mt-20">
          <SubHead label="Toolkit" title={mode === "none" ? "Industry-standard tools, every stage" : mode === "approved" ? "Standard tools, plus an approved AI layer" : "AI-first stack, every stage"} />
          {mode !== "none" && (
            <p className="mt-3 flex items-center gap-2 text-sm text-ink-3">
              <span className="inline-block size-2 rounded-full bg-result" aria-hidden="true" />
              AI tools{mode === "approved" ? ". These are examples; I use whichever your company approves." : ""}
            </p>
          )}
          <dl key={`tools-${mode}`} className="swap mt-8 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {toolkit[mode].map((g) => (
              <div key={g.group} className="bg-bg p-5 sm:p-6">
                <dt className="label">{g.group}</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {g.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className={`rounded-full border px-3 py-1 text-sm ${
                        tool.ai ? "border-result/40 bg-result/10 text-result" : "border-line-2 text-ink-2"
                      }`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Handoff */}
        <div className="mt-20 max-w-3xl">
          <SubHead label="Handoff" title={handoff[mode].title} />
          <div key={`handoff-${mode}`} className="swap mt-6 space-y-4 text-ink-2">
            {handoff[mode].body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Work that shows it */}
        <div className="mt-20">
          {mode === "none" ? (
            <>
              <SubHead
                label="In practice"
                title="Swiftpoint: a classic process, shipped in 10 countries"
                action={
                  <Link href="/work/swiftpoint" className="btn btn-outline shrink-0">
                    Read the case study <Arrow />
                  </Link>
                }
              />
              <ul key="swift" className="swap mt-8 grid gap-4 sm:grid-cols-2">
                {swiftpoint.map((p) => (
                  <li key={p.title} className="panel p-6 sm:p-8">
                    <h4 className="text-lg font-medium tracking-[-0.01em]">{p.title}</h4>
                    <p className="mt-2 leading-relaxed text-ink-2">{p.body}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <SubHead
                label="Designing AI products"
                title="Principles from shipping AI search"
                action={
                  <Link href="/work/talstrike#ai-athlete-discovery" className="btn btn-outline shrink-0">
                    Read the case study <Arrow />
                  </Link>
                }
              />
              <ul key="ai" className="swap mt-8 grid gap-4 sm:grid-cols-2">
                {aiPrinciples.map((p) => (
                  <li key={p.title} className="panel p-6 sm:p-8">
                    <h4 className="text-lg font-medium tracking-[-0.01em]">{p.title}</h4>
                    <p className="mt-2 leading-relaxed text-ink-2">{p.body}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <button type="button" onClick={goNext} className="btn btn-light mt-12 w-full cursor-pointer sm:w-auto">
        See the {next.label} workflow <Arrow />
      </button>
    </div>
  );
}
