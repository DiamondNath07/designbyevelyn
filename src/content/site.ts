export const site = {
  name: "Evelyn Joseph",
  brand: "Design by Evelyn",
  url: "https://designbyevelyn.vercel.app",
  role: "Product Designer",
  location: "Lagos, Nigeria",
  availability: "Open to new product design roles",
  invite: "Got a product that needs to look and feel great? I'd love to hear what you're building.",
  email: "ifeoma.joseph.ux@gmail.com",
  phone: "+234 703 600 2415",
  linkedin: "",
  cvPdf: "/Evelyn-Joseph-CV.pdf",
  headline: "I design clear, polished products, with interactions and motion that make them easy to use.",
  intro:
    "Product designer with 5+ years across fintech, enterprise SaaS and consumer platforms, specialising in visual, interaction and motion design.",
  description:
    "Evelyn Joseph is a product designer in Lagos, Nigeria, specialising in visual, interaction and motion design for fintech, enterprise SaaS and consumer products.",
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
  { name: "Alsoit", logo: "/images/B.Alsoit.png" },
]

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [];

export type Role = {
  company: string;
  title: string;
  location: string;
  dates: string;
  summary: string;
  points: string[];
};

export const profile =
  "Product Designer with 5+ years designing B2B SaaS, fintech and consumer products, specialising in visual, interaction and motion design.";

export const experience: Role[] = [
  {
    company: "Talstrike",
    title: "Product Designer",
    location: "Remote",
    dates: "Feb 2024 – Present",
    summary: "Sports talent platform connecting athletes, scouts and fans.",
    points: [
      "Visual, interaction and motion design across iOS, Android and web.",
      "Contributed to a platform that reached 10K+ subscribers in its first year.",
    ],
  },
  {
    company: "Alsoit",
    title: "Product Designer",
    location: "",
    dates: "Jan 2022 – Dec 2023",
    summary: "Multi-tenant enterprise workspace, acquired by Appsalite.",
    points: [
      "Visual and interaction design for dashboards and hierarchy views.",
      "Built components for the tokenised Figma design system.",
    ],
  },
  {
    company: "Swiftpoint",
    title: "Product Designer",
    location: "",
    dates: "Jun 2021 – Jan 2022",
    summary: "Cross-border payments and bills platform.",
    points: [
      "Interface and motion for payment, status and bill-payment flows.",
    ],
  },
];

export const education = ["BSc Accounting and Financial Technology — Enugu State University, NG"];

export const awards: string[] = [];

export const skills = [
  { group: "Visual & interaction", items: ["UI design", "Interaction design", "Micro-interactions", "User flows", "Mobile & responsive web"] },
  { group: "Motion & 3D", items: ["After Effects", "Overlord", "Blender", "Cinema 4D"] },
  { group: "Design systems", items: ["Figma variables", "Design tokens", "Component libraries", "Dark mode", "WCAG"] },
  { group: "Prototyping", items: ["Figma prototyping", "Figma Make", "HTML", "CSS", "JavaScript"] },
  { group: "AI workflow", items: ["Claude", "Figma Make", "Cursor", "v0"] },
];

export const getTestimonial = (id: string) => testimonials.find((t) => t.id === id);
