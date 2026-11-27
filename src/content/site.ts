export const site = {
  name: "Nathaniel Diamond",
  brand: "Nathmond",
  url: "https://www.nathmond.co.uk",
  role: "Senior Product Designer",
  location: "Remote, worldwide",
  availability: "Currently open to new product design roles",
  invite: "Got a hard product problem? I'd love to hear what you're building.",
  email: "studio@nathmond.co.uk",
  phone: "+44 7908 081 410",
  linkedin: "",
  cvPdf: "/Nathaniel-Diamond-CV.pdf",
  headline: "I design clear, accessible products for complex problems — and prototype them with AI.",
  intro:
    "Senior product designer with 7+ years across fintech, enterprise SaaS and consumer platforms. I lead 0→1 products, untangle regulated flows and build design systems that help teams ship faster.",
  description:
    "Nathaniel Diamond is a remote senior product designer working across fintech, enterprise SaaS and consumer platforms, with an AI-first prototyping workflow.",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
];

export const clients = [
  { name: "Talstrike", logo: "/images/B.Talstrike.png" },
  { name: "Swiftpoint", logo: "/images/B.Swiftpoint.png" },
  { name: "Wollette", logo: "/images/B.Wollette.png" },
  { name: "Alsoit", logo: "/images/B.Alsoit.png" },
  { name: "University of Bradford", logo: "/images/B.UoB.png" },
  { name: "Bradcoin", logo: "/images/B.Bradcoin.png" },
  { name: "The Telegraph", logo: "/images/B.Telegraph.png" },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "talstrike",
    company: "Talstrike",
    name: "Adams Rasheed",
    role: "Founder",
    quote:
      "Nathaniel was instrumental in scaling Talstrike past our early V1 prototype into a high-performing product. He established a solid UI foundation by introducing a structured design system that accelerated frontend handoff by 2x, significantly boosting our development velocity, coupled with great collaboration across cross-functional teams.",
  },
  {
    id: "swiftpoint",
    company: "Swiftpoint",
    name: "Nicholas D.",
    role: "Founder",
    quote:
      "Nathaniel brought a complex fintech concept to life in just one week, delivering a rapid visual prototype for a cross-border bill payment and currency exchange system. His technical input on both the web and mobile app architecture was critical, enabling us to scale from that initial concept to a live MVP within just a few months.",
  },
  {
    id: "bradford",
    company: "University of Bradford",
    name: "Sherena Huang",
    role: "Professor",
    quote:
      "His work on the Bradcoin project provided foundational proof of concept for the university's hands-on learning initiatives. The architecture of his project is exceptionally strong, and we are utilizing it as an active development resource and benchmark for future fintech students.",
  },
  {
    id: "alsoit",
    company: "Alsoit",
    name: "Joseph Schnedir",
    role: "Founder",
    quote:
      "Nathaniel handled the fast iterations of our complex, multi-tenant software with exceptional discipline. He led the team straight to a successful Alpha version, delivering a usable product that optimized cross-functional task management.",
  },
  {
    id: "wollette",
    company: "Wollette",
    name: "Henry Orunkoya",
    role: "Founder",
    quote:
      "Nathaniel works at a very high pace, delivering quality design variations with great time efficiency. During our A/B testing phase, he produced competing concepts that were both so strong it made choosing a single direction genuinely difficult for the business.",
  },
];

export type Role = {
  company: string;
  title: string;
  location: string;
  dates: string;
  summary: string;
  points: string[];
};

export const profile =
  "Senior Product Designer with 7+ years shipping products across fintech, enterprise SaaS and consumer platforms. I turn regulated, complex flows into clear, accessible journeys and build tokenised design systems that help engineering ship faster. I prototype with AI, going from research to working, coded prototypes in days.";

export const experience: Role[] = [
  {
    company: "Talstrike",
    title: "Lead Product Designer",
    location: "Remote",
    dates: "Feb 2024 – Present",
    summary: "Sports talent platform connecting athletes, scouts and fans.",
    points: [
      "Led design from prototype to launch; reached 10K+ subscribers in year one.",
      "Turned research and stakeholder input into the V2 roadmap; V2 lifted sign-ups 85%.",
      "Designed AI-assisted athlete search and role-based accounts for four user types.",
      "Rebuilt the design system on Figma tokens and variables, automating dark mode.",
      "Mentored 4 designers through structured critique, speeding up engineering handoff.",
    ],
  },
  {
    company: "Wollette",
    title: "Product Designer (Contract)",
    location: "UK",
    dates: "Dec 2023 – Feb 2024",
    summary: "Payments platform: responsive web redesign and rebrand.",
    points: [
      "Redesigned the responsive website and brand; merchant partnerships doubled in 3 months.",
      "Lifted quarterly sign-ups 10% and organic search visibility 20%.",
      "Used 3D and motion to explain complex workflows; usability scores rose 25%.",
    ],
  },
  {
    company: "Alsoit",
    title: "Senior Product Designer",
    location: "UK",
    dates: "Jan 2022 – Dec 2023",
    summary: "Multi-tenant enterprise workspace, acquired by Appsalite.",
    points: [
      "Designed core dashboards, org hierarchy and activity tracking during 3× valuation growth.",
      "Built and governed a tokenised Figma design system used across product squads.",
      "Set design principles and a WCAG-based accessibility standard for every product line.",
      "Mentored junior designers and created a video library of UX patterns.",
    ],
  },
  {
    company: "Swiftpoint",
    title: "UI/UX Designer",
    location: "",
    dates: "May 2019 – Jan 2022",
    summary: "Cross-border payments and bills platform.",
    points: [
      "Led product design as the platform expanded into 10 countries.",
      "Simplified multi-currency transfers into step-by-step flows using progressive disclosure.",
      "Ran research across markets and localised the interface for each.",
    ],
  },
];

export const education = [
  "MSc Financial Technology — University of Bradford, UK",
  "BSc Accounting and Financial Technology — Delta State University, NG",
  "UX Master Certified (UXC #1063162) — Nielsen Norman Group",
  "UX Design Professional Certificate — Google",
  "Full-Stack Web Development — Microverse",
];

export const awards = [
  "Featured design innovation — The Telegraph, for the Bradcoin app",
  "Global Trading Laureate — Bloomberg international trading competition",
];

export const skills = [
  { group: "Product design", items: ["Discovery", "Interaction design", "Prototyping", "User research", "Usability testing", "Information architecture", "A/B testing"] },
  { group: "Design systems", items: ["Tokenised systems", "Figma variables", "Light/dark theming", "WCAG 2.2 AA", "Inclusive design"] },
  { group: "AI workflow", items: ["Claude", "Claude Code", "Cursor", "Figma AI", "v0", "AI research synthesis"] },
  { group: "Motion & 3D", items: ["After Effects", "Blender", "Cinema 4D", "Micro-interactions"] },
  { group: "Front-end", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Git"] },
];

export const getTestimonial = (id: string) => testimonials.find((t) => t.id === id);
