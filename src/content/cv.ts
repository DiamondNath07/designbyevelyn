/** Full CV content, mirrored from public/Evelyn-Joseph-CV.pdf. */

export const cv = {
  name: "Evelyn Joseph",
  title: "Product Designer | Visual, Interaction & Motion Design",
  contact: [
    { label: "Lagos, Nigeria" },
    { label: "ifeoma.joseph.ux@gmail.com", href: "mailto:ifeoma.joseph.ux@gmail.com" },
    { label: "+234 703 600 2415", href: "tel:+2347036002415" },
    { label: "designbyevelyn.vercel.app", href: "https://designbyevelyn.vercel.app" },
  ],
  summary:
    "Product Designer with 5+ years designing B2B SaaS, fintech and consumer products across iOS, Android and web, specialising in visual, interaction and motion design. Contributed to a 0-1 talent-discovery platform that reached 10,000+ subscribers in its first year, a cross-border payments product that expanded into 10 countries, and an enterprise SaaS platform that grew 3x in valuation before acquisition. Crafts polished interfaces and component libraries in Figma, defines interaction patterns and states, and uses motion to make complex flows easy to follow.",
  experience: [
    {
      company: "Talstrike",
      title: "Product Designer",
      dates: "Feb 2024 – Present",
      points: [
        "Contributed to the visual, interaction and motion design of a 0-1 sports scouting and talent-discovery platform across iOS, Android and web, which reached 10,000+ subscribers in its first year.",
        "Designed high-fidelity screens and interaction details for V2, contributing to an 85% increase in sign-ups after launch.",
        "Designed the interaction states for an AI-assisted athlete search, including filters, ranking feedback and loading, empty and error states.",
        "Contributed components, Figma variables and dark-mode styles to the design system, helping make front-end handoff 2x faster.",
        "Created micro-interactions and motion guidelines for navigation, onboarding and feedback across the product.",
      ],
    },
    {
      company: "AlsoIT",
      title: "Product Designer",
      dates: "Jan 2022 – Dec 2023",
      points: [
        "Contributed to the visual and interaction design of a multi-tenant enterprise SaaS platform, including task-management dashboards and organisational hierarchy views, during 3x valuation growth before its acquisition by Appsalite.",
        "Built and maintained components for the tokenised Figma design system used across product squads.",
        "Applied WCAG standards to colour, typography and interaction patterns across product lines.",
        "Produced motion graphics and explainer videos that clarified complex UX logic for the wider team.",
      ],
    },
    {
      company: "Swiftpoint Technology",
      title: "Product Designer",
      dates: "Jun 2021 – Jan 2022",
      points: [
        "Contributed to the visual and interaction design of a cross-border payments and remittance platform across iOS, Android and web, supporting expansion into 10 countries.",
        "Designed confirmation, status and failure screens for payment flows, showing rate, fees and recipient amount clearly before authorisation.",
        "Created the interface and motion for the bill-payments experience and shared transaction log.",
      ],
    },
  ],
  skills: [
    {
      group: "Visual & Interaction Design",
      text: "UI and visual design, interaction design, micro-interactions, user flows, mobile (iOS, Android) and responsive web, B2B SaaS and data-dense UI",
    },
    { group: "Motion & 3D", text: "After Effects, Overlord, Blender, Cinema 4D" },
    {
      group: "Design Systems",
      text: "Figma variables and modes, design tokens, component libraries, theming (dark mode), documentation",
    },
    { group: "Prototyping & Front-end", text: "Figma prototyping, Figma Make, coded prototypes, HTML, CSS, JavaScript" },
    { group: "AI-Assisted Workflow", text: "Claude, Figma Make, Cursor, v0" },
    {
      group: "Accessibility & Ways of Working",
      text: "WCAG, inclusive design, Design Thinking, Agile, usability testing, cross-functional collaboration",
    },
  ],
  education: [{ degree: "BSc Accounting and Financial Technology", school: "Enugu State University, Nigeria" }],
  certifications: [] as string[],
  awards: [] as { title: string; text: string }[],
  volunteering: [] as { company: string; title: string; dates: string; points: string[] }[],
};
