/**
 * Case study content. Text adapted from the original case-study decks,
 * lightly edited for the web. Image keys refer to entries in src/lib/asset-manifest.json.
 */

export type Flow = {
  caption: string;
  steps: string[];
  /** Optional loop: e.g. "No → review next athlete" returning to an earlier step. */
  loop?: { from: number; to: number; label: string };
};

export type FigureVisual = "before" | "after" | "screen1" | "screen2";
export type Figure = { title: string; body: string; visual?: FigureVisual };

export type Feature = {
  id: string;
  title: string;
  summary: string;
  /** Short, numbered story for the case-study page (FIG. 1, FIG. 2…) */
  figures: Figure[];
  deck: string; // folder of the original slide images, kept for the image gallery
  overview: string[];
  problem: string[];
  hypothesis: string[];
  goals: string[];
  measures: string;
  currentFlow: Flow;
  process: string[];
  ownership: string[];
  solution: string[];
  finalFlow: Flow;
  decisions: string[];
  tradeoffs: string[];
  validation: string[];
  outcomes: string[];
  reflection: string[];
};

export type Stat = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  /** Outcome-led title used on the case-study hero */
  headline: string;
  /** Short problem-led caption for the home-page card (set in mono caps) */
  caption: string;
  /** One-paragraph close for the case study: the result and what it meant */
  closing: string;
  tags: string[];
  motion: { src: string; poster: string };
  sector: string;
  tagline: string;
  summary: string;
  role: string;
  dates: string;
  team: string;
  platform: string;
  tools: string;
  stats: Stat[];
  cover: string;
  banner: string;
  video: string;
  testimonialId?: string;
  accent: string;
  features: Feature[];
};

export const projects: Project[] = [
  {
    slug: "swiftpoint",
    name: "Swiftpoint",
    headline: "Cross-border payments and bills for businesses in 10 countries",
    caption: "Building payments that cross borders",
    closing:
      "Swiftpoint grew into 10 countries. The team took a complex concept to a working prototype in a week, and it reached a live MVP within months.",
    tags: ["2019 – 2022", "Mobile & web", "Fintech"],
    motion: { src: "videos/web/swiftpoint.mp4", poster: "videos/web/swiftpoint.jpg" },
    sector: "Fintech · Cross-border payments",
    tagline: "Currency conversion, transfers and bill payments in one account.",
    summary:
      "Swiftpoint brings payments and financial transactions into one platform: wallet funding, bill payments, transaction records and local and international currencies. I worked on the visual, interaction and motion design as it grew into 10 countries, contributing to the cross-border transfer journey, single sign-on and the unified bill-payment experience.",
    role: "Product Designer (visual, interaction & motion)",
    dates: "Jun 2021 – Jan 2022",
    team: "Founder, product, integration and payments engineers",
    platform: "iOS, Android, web",
    tools: "Figma, payment-gateway review, multi-market research",
    stats: [
      { value: "10", label: "countries supported" },
      { value: "1 week", label: "from concept to first prototype (founder)" },
      { value: "5×", label: "faster bill payments — design target" },
    ],
    cover: "/images/CrossBorderPayment.png",
    banner: "/images/SwiftpointBanner.png",
    video: "videos/Swiftpoint.mp4",
        accent: "#0f766e",
    features: [
      {
        id: "cross-border-transfers",
        title: "Cross-border business transfers",
        summary:
          "Conversion and transfer joined in one journey, so businesses can settle with overseas partners without a bank detour.",
        figures: [
          { title: "Two services, one payment", body: "Businesses bought currency at a bank, then arranged a separate transfer. Settlement took days and several logins.", visual: "before" },
          { title: "Designing from the gateways up", body: "The team mapped every step the payment gateways required, then designed a journey that hides none of them." },
          { title: "One sign-on, start to finish", body: "Single sign-on carries businesses from funding to transfer without logging in again.", visual: "screen1" },
          { title: "See the real cost before paying", body: "Amount, rate, fees and what the partner receives sit together before anyone authorises.", visual: "screen2" },
          { title: "The new flow", body: "Sign in, choose currencies, add recipient, review the total, authorise, track.", visual: "after" },
          { title: "Submitted isn't settled", body: "Clear status language separates a sent payment from a completed one, so nobody pays twice." },
        ],
        deck: "swiftpoint/cross-border-payments",
        overview: [
          "This feature helps businesses settle payments with overseas partners through an integrated currency-conversion and transfer experience, with access to competitive rates at the point of transfer.",
        ],
        problem: [
          "Businesses trading across Sub-Saharan African markets struggled to convert currencies and pay overseas partners. Buying foreign exchange through a bank and then arranging a separate transfer delayed trade settlement.",
          "The challenge was to connect those steps in one understandable journey while respecting the steps required by the underlying payment gateways.",
        ],
        hypothesis: [
          "If businesses can convert currency and send cross-border transfers from one Swiftpoint account, they can settle trade with fewer handoffs and less repeated sign-in.",
          "An integrated journey should also make the relationship between the amount sent and the amount received easier to understand before the payment is authorised.",
        ],
        goals: [
          "Let businesses settle cross-border obligations through one journey that connects conversion and payment.",
          "Fewer handoffs than the bank-led process, less time to submit a valid transfer, and a clear understanding of the rate and recipient amount.",
        ],
        measures:
          "Task completion, repeated sign-ins and time from starting a transfer to submitting it. Recipient settlement time is measured separately from interface speed.",
        currentFlow: {
          caption: "Before: bank-led settlement",
          steps: [
            "Identify overseas obligation",
            "Approach bank for forex",
            "Obtain foreign currency",
            "Arrange partner payment",
            "Confirm funds received",
          ],
        },
        process: [
          "The team examined the payment gateways to understand every step users needed to fund, convert and transfer — this shaped how the interface could connect the journey.",
          "I contributed to the interface and interaction design of a single sign-on experience that removed repeated account access between payment and transfer.",
          "I designed the confirmation and status screens that turned gateway responses into clear messages, reviewed with the technical team.",
        ],
        ownership: [
          "My contribution was the visual and interaction design of the transfer journey and account-access screens, and the motion that made each step easy to follow.",
        ],
        solution: [
          "Currency conversion and cross-border payment become one connected Swiftpoint experience, with single sign-on carrying businesses through to settlement.",
          "The transfer amount, conversion rate, fees and recipient amount appear together before authorisation, so businesses can judge the payment before committing.",
        ],
        finalFlow: {
          caption: "After: one connected journey",
          steps: [
            "Sign in to Swiftpoint",
            "Select destination and currencies",
            "Enter recipient and amount",
            "Review rate and total cost",
            "Authorise transfer",
            "View status and record",
          ],
        },
        decisions: [
          "Connect conversion and transfer, so businesses can follow what they pay and what their partner receives.",
          "Use single sign-on across the payment journey.",
          "Distinguish a submitted payment from a completed settlement, with clear status language for anything still processing.",
        ],
        tradeoffs: [
          "Keeping conversion and transfer separate lets each service run independently but leaves users to coordinate settlement themselves. A connected journey removes those handoffs.",
          "The interface can simplify starting a transfer, but availability, quotes and settlement timing still depend on the services behind each corridor — the design has to be honest about that.",
        ],
        validation: [
          "Business users complete the same overseas payment through the bank baseline and through Swiftpoint. Observe whether they understand currencies, recipient details, conversion and the next action.",
          "Test failure states: insufficient funds, unavailable quote, interrupted processing and delayed payment. Can people tell the current state and recover without paying twice?",
        ],
        outcomes: [
          "A gateway-informed transfer design with single sign-on supporting continuity through the payment process, aimed at less effort when settling cross-border trade.",
          "Impact is assessed through fewer handoffs, fewer repeated sign-ins and shorter completion time. Any “best rate” claim would need a defined comparison of quotes and total cost.",
        ],
        reflection: [
          "Cross-border transfer design means connecting the user's commercial goal with the steps of the payment infrastructure. The gateway review and single sign-on work addressed the continuity of that journey.",
          "Next, I'd test whether businesses understand both the cost of conversion and the progress of settlement — especially when a transfer can't complete immediately.",
        ],
      },
      {
        id: "unified-bill-payments",
        title: "Unified bill payments and tracking",
        summary:
          "One curated payment page and a shared record of every bill, instead of a different app for each provider.",
        figures: [
          { title: "An app for every bill", body: "People switched apps for each bill, then went back to each one to find their records.", visual: "before" },
          { title: "One curated payment page", body: "Supported bills sit in clear categories with one consistent route to confirmation.", visual: "screen1" },
          { title: "Records people can use", body: "Every payment lands in one log, grouped by bill type and period, so spending is easy to explain.", visual: "screen2" },
          { title: "The new flow", body: "Open Pay bills, pick a provider, add details, confirm, and repeat without leaving the app.", visual: "after" },
          { title: "Room to grow without clutter", body: "Categories and provider-specific fields keep the page findable as more services are added." },
          { title: "Target: five times faster", body: "The goal is paying the same set of bills in a fifth of the time, checked with timed tasks." },
        ],
        deck: "swiftpoint/unified-bills-payment",
        overview: [
          "This feature covers choosing and paying bills, keeping a record of those payments, and helping people understand their spending — without moving between separate apps.",
        ],
        problem: [
          "People moved between apps to pay different bills, then went back to each service to find their payment records. The task was fragmented and it was hard to see what had been paid and how much had been spent.",
          "Product research also found incomplete payment coverage, network delays and difficult first-time interactions. The design had to consolidate services without making the payment page harder to navigate.",
        ],
        hypothesis: [
          "If people can choose different bill types from one curated payment page and keep the records in Swiftpoint, they'll spend less time switching apps and hunting for payment information.",
          "Organising those records into a spending view should also help people understand where their bill money goes over time.",
        ],
        goals: [
          "Make supported bill types easy to find, payable in one app, with useful records for tracking spending.",
          "Speed target: complete the same set of bill payments five times faster than the fragmented baseline.",
        ],
        measures:
          "Timed completion for the same set of bills in each setup, retrievable payment logs, and whether people can identify spending by bill type and period.",
        currentFlow: {
          caption: "Before: a different app per bill",
          steps: [
            "Open bill-provider app",
            "Find service and enter details",
            "Pay and confirm bill",
            "Another bill to pay?",
            "Review records in each app",
          ],
          loop: { from: 3, to: 0, label: "Yes — switch to the next app" },
        },
        process: [
          "Mapped the bills people pay and the steps they repeat across services, using research themes to find where app switching and repeated navigation added effort.",
          "Organised supported bill types on a curated payment page with one consistent route from selection to confirmation, allowing for each provider's required details.",
          "Connected confirmed payments to a transaction log and defined how records support spending analysis.",
        ],
        ownership: [
          "My focus was the interface and motion for bill selection, payment and tracking: the visual layout of the payment page and the transitions from paying a bill to reviewing records. This built on three months of team payment research.",
        ],
        solution: [
          "Supported bill categories sit on one curated payment page, so people choose the service they need inside Swiftpoint, with one shared payment experience.",
          "Payment records and spending analysis complete the experience, helping people revisit transactions and understand where their money has gone.",
        ],
        finalFlow: {
          caption: "After: one place to pay and track",
          steps: [
            "Open Pay bills",
            "Choose bill type and provider",
            "Enter required details",
            "Authorise and confirm",
            "Return for another bill",
            "Review history and spending",
          ],
        },
        decisions: [
          "Curate bill types on the payment page, so people start from a recognisable service rather than a separate app.",
          "Keep the core payment sequence consistent while allowing for each provider's required information.",
          "Make records available straight after payment and group spending by bill type and period.",
        ],
        tradeoffs: [
          "Separate provider apps can offer specialised flows, but force people to switch context and check records in several places.",
          "A consolidated page can get crowded as coverage grows. Clear categories and provider-specific details keep it findable without forcing every bill into an identical form.",
        ],
        validation: [
          "Compare completion time for the same set of bills in the existing apps and in Swiftpoint, including time spent switching apps, navigating and getting confirmations.",
          "Separately ask people to find a previous payment and explain their spending over a period, noting errors and uncertainty — including while a payment is still processing.",
        ],
        outcomes: [
          "The shipped product includes a Pay bills entry point and transaction records within the shared payment platform; this direction extends it toward consolidated bill management and spending analysis.",
          "The target is completing multiple bills five times faster with a useful spending log. Claiming it requires timed task evidence and a check that the spending view matches the payment records.",
        ],
        reflection: [
          "The feature connects two parts of bill management: making a payment and understanding it afterwards.",
          "Next, I'd check that adding more services keeps navigation clear, and that people can explain their spending without piecing records together from different apps.",
        ],
      },
    ],
  },
  {
    slug: "talstrike",
    name: "Talstrike",
    headline: "Taking a sports talent platform from prototype to 10K subscribers",
    caption: "Designing AI-assisted talent discovery",
    closing:
      "Talstrike went from an early prototype to 10K+ subscribers in its first year, and the V2 redesign lifted sign-ups 85%. I contributed components and dark-mode styles to the design system the team still builds on.",
    tags: ["2024 – now", "Mobile", "AI"],
    motion: { src: "videos/web/talstrike.mp4", poster: "videos/web/talstrike.jpg" },
    sector: "Sports tech · 0→1 platform",
    tagline: "AI-powered talent discovery for athletes, scouts and fans.",
    summary:
      "Talstrike connects athletes, scouts and sports fans through talent discovery and sports content. As a product designer on the team, I worked on its visual, interaction and motion design from early prototype to launch, including the AI-assisted athlete search, the role-based accounts and the design system.",
    role: "Product Designer (visual, interaction & motion)",
    dates: "Feb 2024 – Present",
    team: "Design team, founder, backend and mobile engineers",
    platform: "iOS, Android, web",
    tools: "Figma variables & tokens, AI-assisted search, user interviews",
    stats: [
      { value: "10K+", label: "subscribers in the first year" },
      { value: "+85%", label: "sign-ups after the V2 launch" },
      { value: "2×", label: "faster front-end handoff (founder)" },
    ],
    cover: "/images/talstrike-cover.png",
    banner: "/images/TalstrikeBanner.png",
    video: "videos/TalstrikeMotion.mp4",
        accent: "#2563eb",
    features: [
      {
        id: "ai-athlete-discovery",
        title: "AI-powered athlete discovery",
        summary:
          "Scouts describe the opportunity first; AI search then surfaces the athletes who fit the brief.",
        figures: [
          { title: "Too many athletes to scroll", body: "Scouts couldn't review hundreds of thousands of profiles for one opportunity, so real evaluation started far too late.", visual: "before" },
          { title: "Start from the brief", body: "Scouts describe the opportunity first, so the AI search has real criteria to work from instead of guessing." },
          { title: "Must-haves vs nice-to-haves", body: "Hard requirements decide who's eligible; soft preferences only change the ranking. Flexibility is explicit, not implied.", visual: "screen1" },
          { title: "Search that leads into the work", body: "Results open straight into the scout's existing evaluation. The AI finds candidates; people still decide.", visual: "screen2" },
          { title: "Six clear steps", body: "Brief, criteria, review, search, shortlist, evaluate, instead of an endless scroll.", visual: "after" },
          { title: "Relevance over speed", body: "Reaching an unsuitable athlete quickly isn't success, so testing covers no matches, missing data and refining a search." },
        ],
        deck: "talstrike/search-ai",
        overview: [
          "Athletes showcase their abilities on Talstrike, while scouts look for talent that fits a specific opportunity.",
          "This feature introduces AI-assisted search across the platform, using the scout's requirements to identify relevant athletes before detailed evaluation begins.",
        ],
        problem: [
          "Scouts could not reasonably scroll through hundreds of thousands of athletes to find the right fit for an opportunity. Manually reviewing profiles placed too much effort before meaningful evaluation could begin.",
          "The design challenge was to capture what the scout needed, distinguish essential criteria from preferences, and translate those requirements into a search the backend could support.",
        ],
        hypothesis: [
          "If scouts define the requirements of an opportunity before searching, our integrated AI evaluation system can use those criteria to search across Talstrike and surface athletes who best fit the brief.",
          "Separating essential requirements from flexible preferences should help scouts narrow the field without unnecessarily excluding promising talent.",
        ],
        goals: [
          "Reduce the effort scouts spend finding suitable talent so they can begin real evaluation sooner.",
          "Give athletes greater visibility when their profiles match an opportunity.",
          "Reach relevant athlete profiles in a few clicks after entering the opportunity requirements.",
        ],
        measures:
          "Time to the first relevant profile, interactions required to reach it, and the share of searches that lead to detailed athlete evaluation.",
        currentFlow: {
          caption: "Before: manual discovery",
          steps: [
            "Open scout dashboard",
            "Browse athlete list",
            "Open athlete profile",
            "Match for the opportunity?",
            "Begin detailed evaluation",
          ],
          loop: { from: 3, to: 1, label: "No — review the next athlete" },
        },
        process: [
          "The design team worked with backend engineers to translate the steps needed for AI-assisted search into the interface.",
          "The team investigated how scouts frame an opportunity, so the search would begin with their requirements and feel natural to their decision-making.",
          "The design separates hard requirements from soft preferences, so scouts keep essential criteria while staying flexible where it makes sense.",
        ],
        ownership: [
          "My part was the visual and interaction design of the search experience: the requirement inputs, priority controls, ranking feedback and the loading, empty and error states.",
          "Backend collaboration set the technical context. The AI system supports candidate discovery; scouts keep responsibility for judging suitability.",
        ],
        solution: [
          "Search is centred on the opportunity. Scouts provide their requirements before the AI search begins and mark which criteria are mandatory and which are preferences. The system then searches Talstrike for athletes who fit, so scouts can focus on relevant profiles.",
          "The central change is moving requirement definition ahead of discovery, so scouts no longer repeat the same assessment across a huge athlete list.",
        ],
        finalFlow: {
          caption: "After: AI-assisted search",
          steps: [
            "Enter opportunity brief",
            "Set hard and soft criteria",
            "Review requirements",
            "Run AI search",
            "Review relevant athletes",
            "Open profile for evaluation",
          ],
        },
        decisions: [
          "Gather requirements before searching, so the scout's opportunity gives the system a meaningful starting point.",
          "Separate hard requirements from soft preferences, so flexibility is explicit.",
          "Keep detailed athlete evaluation one step from the results, so search leads straight into the scout's existing work.",
          "Matching rule: hard requirements decide eligibility; soft preferences influence ranking.",
        ],
        tradeoffs: [
          "Manual browsing gives direct control but makes scouts repeat their assessment for every athlete.",
          "Treating every requirement as mandatory produces a narrow search; treating every requirement as optional weakens relevance. The hard/soft split resolves that tension.",
        ],
        validation: [
          "Representative scouts complete the same opportunity brief through manual discovery and through AI-assisted search. Observe whether they can express their criteria, understand hard vs soft requirements, recognise relevant results and begin evaluation.",
          "Cover edge cases: no matches, incomplete athlete information and searches that need refining. Record relevance judgements alongside time and clicks — reaching an unsuitable profile quickly is not success.",
        ],
        outcomes: [
          "An opportunity-led route into athlete discovery, with requirements collected before search and flexibility expressed through hard and soft criteria.",
          "The intended outcome is less effort before evaluating suitable athletes and more visibility for athletes who match. Feature-level gains will be reported against a baseline using the measures above.",
        ],
        reflection: [
          "Bringing the scout's decision criteria into the search itself made “what is a good fit?” the central interaction question.",
          "Next, I'd study where scouts change a requirement after seeing results, and whether the hard/soft distinction helps them do it confidently.",
        ],
      },
      {
        id: "role-based-accounts",
        title: "Role-based accounts and navigation",
        summary:
          "Four account types, each with navigation built around its own work, connected by shared feeds.",
        figures: [
          { title: "One menu for four audiences", body: "Athletes, scouts, fans and admins all saw the same tools, so nobody could find theirs.", visual: "before" },
          { title: "Learning the work first-hand", body: "The team observed practical scouting and interviewed scouted athletes to map what each role actually does." },
          { title: "Navigation built around the job", body: "Each account type gets a menu shaped by its work: showcasing talent, scouting, following sport or running the platform.", visual: "screen1" },
          { title: "Shared spaces stay shared", body: "Feeds stay open to everyone, so specialised menus never cut people off from each other.", visual: "screen2" },
          { title: "The new flow", body: "Pick your role, set up, and land in a menu that's yours, with shared feeds one tap away.", visual: "after" },
          { title: "Hiding isn't protecting", body: "A hidden menu doesn't stop an action, so permissions were designed separately from navigation." },
        ],
        deck: "talstrike/account-type",
        overview: [
          "Talstrike serves people with different relationships to sport. We grouped the account model into four primary types — athletes, scouts, fans and administrators — and each needed an experience that reflected what they actually do.",
          "This work covers account structure and navigation, including the shared spaces that connect audiences across the platform.",
        ],
        problem: [
          "An athlete showcasing talent doesn't need the same tools as a scout posting an opportunity, and fans and administrators have different purposes again. Showing everyone the same operational menu made the platform harder to understand.",
          "The challenge was to make relevant actions easy to find while preserving the connections between athletes and scouts, and the shared sports conversations the platform depends on.",
        ],
        hypothesis: [
          "If navigation reflects each account's role and preferences, people will find the actions that support their work more easily.",
          "Keeping common spaces such as feeds open to every account type lets people communicate without exposing every audience to the same operational tools.",
        ],
        goals: [
          "Reduce menu ambiguity and make Talstrike easier to use for each audience.",
          "Athletes find their profile and talent-sharing tools; scouts find discovery and opportunity tools; everyone reaches shared feeds without entering another role's workflow.",
        ],
        measures:
          "First-click accuracy, task completion without help, wrong-menu selections and confidence in choosing the next action — reported separately for each role.",
        currentFlow: {
          caption: "Before: one menu for everyone",
          steps: [
            "Select sporting role",
            "Complete account setup",
            "Enter available menus",
            "Find a relevant action",
            "Start role-specific task",
          ],
        },
        process: [
          "The team took part in practical scouting activity to document the work a scout performs, then used those findings to define their menu options.",
          "Interviews with scouted athletes showed their side of the process, and menus were designed around their activities.",
          "The team mapped where the two accounts intersect, and kept general areas such as feeds so the account structure wouldn't block communication.",
        ],
        ownership: [
          "I designed the visual navigation and interactions for each account type, so every audience sees the right actions and the shared areas feel consistent.",
        ],
        solution: [
          "Four primary account types organise access to the right menus: athletes around showcasing talent, scouts around finding talent and posting opportunities, fans around sports engagement, and administrators around platform operations.",
          "Shared feeds keep communication open across audiences, so specialised navigation directs people to their work while common areas keep the community connected.",
        ],
        finalFlow: {
          caption: "After: role-based navigation",
          steps: [
            "Select account type",
            "Complete relevant setup",
            "Enter role-specific menu",
            "Choose primary task",
            "Use shared feeds or connections",
          ],
        },
        decisions: [
          "Group accounts by the work people do, then make the relevant actions prominent in each menu.",
          "Keep common feed access so specialisation doesn't isolate anyone.",
          "Separate detailed sporting identities (coach, trainer and so on) from the four primary account types.",
        ],
        tradeoffs: [
          "One universal menu keeps navigation uniform but exposes people to unrelated tasks. Fully separate experiences are focused but weaken connections between audiences. Four account types with shared areas balance relevance and connection.",
          "Hiding a menu isn't the same as enforcing a permission — interface visibility and access control have to be designed separately.",
        ],
        validation: [
          "Ask athletes, scouts and fans to complete representative tasks in their own account experience. Observe the first menu chosen, wrong turns and requests for help, and check they can still find shared feeds.",
          "For administrators, use the confirmed operational workflow and independently verify that restricted actions follow the intended permissions — including when reached through a direct link.",
        ],
        outcomes: [
          "The platform is organised around four account types with shared communication spaces, giving role-specific work a clear place in navigation.",
          "Improvement is assessed by comparing task completion and wrong-menu selections with the earlier experience, reported by role so an average doesn't hide a difficult account experience.",
        ],
        reflection: [
          "Account design meant understanding both separate responsibilities and the points where people work together. Observing scouting and interviewing athletes gave the team both sides of the same connection.",
          "Next, I'd look at people with several sporting identities and check that account type, profile identity and preferences combine without making the menu unpredictable.",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Work without a public case study — shown as smaller cards, details on request. */
export const moreWork = [
  {
    name: "Alsoit",
    title: "Multi-tenant enterprise workspace, acquired by Appsalite",
    role: "Product Designer · 2022 – 2023",
    tags: ["Web", "B2B SaaS"],
    motion: { src: "videos/web/alsoit.mp4", poster: "videos/web/alsoit.jpg" },
  },
  {
    name: "Weather app",
    title: "Motion study for a weather app",
    role: "Personal project · Motion design",
    tags: ["Motion", "3D"],
    motion: { src: "videos/web/weather.mp4", poster: "videos/web/weather.jpg" },
  },
];
