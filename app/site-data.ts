export type SiteSection = {
  eyebrow?: string;
  title: string;
  body: string;
  items?: string[];
};

export type SitePage = {
  slug: string;
  index: string;
  navTitle: string;
  title: string;
  summary: string;
  signal: string;
  stats: { label: string; value: string }[];
  sections: SiteSection[];
};

export const sitePages: SitePage[] = [
  {
    slug: "program",
    index: "01",
    navTitle: "Program overview",
    title: "A real vehicle program. Built on evidence.",
    summary:
      "Genesis is an independent U.S. intelligent EV manufacturing program shaped around a focused vehicle, disciplined capital, and measurable execution gates.",
    signal: "Program definition",
    stats: [
      { label: "Structure", value: "Independent U.S." },
      { label: "Launch focus", value: "Fleet-first CUV" },
      { label: "Operating model", value: "Stage-gated" },
    ],
    sections: [
      {
        eyebrow: "Positioning",
        title: "Independent, investable, execution-led",
        body: "A U.S.-governed vehicle company with a real engineering and sourcing program, a platform for future variants, and board-level go / no-go controls.",
        items: [
          "Vehicle engineering and sourcing before scale claims",
          "Capital release tied to technical and commercial evidence",
          "Manufacturing partnerships built around retained program control",
        ],
      },
      {
        eyebrow: "Launch thesis",
        title: "Focused first. Platform over time.",
        body: "The initial beachhead is a fleet-capable intelligent electric CUV for high-utilization use cases. A disciplined first vehicle creates the evidence base for future variants.",
      },
      {
        eyebrow: "What it is not",
        title: "No concept-only story",
        body: "Genesis is not an import shell, a pure software claim, or a promise of unlimited capital. Architecture, suppliers, prototypes, quality and demand must each clear their own gate.",
      },
    ],
  },
  {
    slug: "platform",
    index: "02",
    navTitle: "Vehicle platform",
    title: "Focused first. Platform over time.",
    summary:
      "One manufacturable electric CUV creates a clear path from architecture to fleet evidence, then to controlled variants.",
    signal: "Vehicle architecture",
    stats: [
      { label: "Beachhead", value: "Intelligent e-CUV" },
      { label: "Priority", value: "Uptime + TCO" },
      { label: "Expansion", value: "Modular variants" },
    ],
    sections: [
      {
        eyebrow: "Product intent",
        title: "Designed for real operating cycles",
        body: "The first vehicle is aimed at fleet and commercial users who value uptime, serviceability, predictable economics, and depot-compatible charging.",
        items: [
          "Fleet-capable packaging and practical range",
          "Software-defined diagnostics and controlled OTA capability",
          "Commercial architecture that supports future body variants",
        ],
      },
      {
        eyebrow: "Engineering",
        title: "Architecture before feature volume",
        body: "Body structure, E/E architecture, thermal systems, safety, diagnostics and service strategy are frozen through evidence-led trade-offs rather than feature accumulation.",
      },
      {
        eyebrow: "Customer proof",
        title: "Controlled demand before mass-market noise",
        body: "Pilot agreements, fleet use cases and measurable total cost of ownership create a credible launch path before broader market expansion.",
      },
    ],
  },
  {
    slug: "manufacturing",
    index: "03",
    navTitle: "Manufacturing system",
    title: "Manufacturing control before scale.",
    summary:
      "The operating system joins body, battery, final assembly and end-of-line validation into one traceable production flow.",
    signal: "Factory readiness",
    stats: [
      { label: "Flow", value: "4 core stages" },
      { label: "Control", value: "Quality gates" },
      { label: "Ramp", value: "Low volume first" },
    ],
    sections: [
      {
        eyebrow: "Production flow",
        title: "From body to verified vehicle",
        body: "Body structures move through battery integration, final assembly and end-of-line testing with clear ownership at every handoff.",
        items: [
          "Body structures, joining and dimensional control",
          "Battery pack, BMS and thermal integration",
          "Drive unit, interior, software flashing and calibration",
          "Charging, ADAS, NVH and final quality verification",
        ],
      },
      {
        eyebrow: "Smart factory",
        title: "Automation where it improves evidence",
        body: "Robotics, vision inspection, torque traceability, digital work instructions and production data are applied where they improve repeatability and learning.",
      },
      {
        eyebrow: "Ramp logic",
        title: "Prove the line before expanding it",
        body: "A low-volume launch line establishes process capability, supplier performance and field reliability before major capacity commitments.",
      },
    ],
  },
  {
    slug: "battery",
    index: "04",
    navTitle: "Battery & powertrain",
    title: "Battery integration is a manufacturing capability.",
    summary:
      "Pack architecture, thermal control, BMS validation and traceability are designed as one quality and warranty system.",
    signal: "Energy system",
    stats: [
      { label: "Scope", value: "Pack + BMS" },
      { label: "Evidence", value: "Thermal + safety" },
      { label: "Lifecycle", value: "Traceable" },
    ],
    sections: [
      {
        eyebrow: "Core capability",
        title: "Integration, not cell speculation",
        body: "Genesis focuses on cell strategy, module and pack architecture, BMS integration, thermal management and end-of-line electrical testing.",
        items: [
          "Supplier qualification and cell strategy",
          "Pack structure, sealing and thermal validation",
          "BMS software, diagnostics and fault handling",
          "Pack-level traceability for service and warranty",
        ],
      },
      {
        eyebrow: "Quality",
        title: "Safety evidence is built into the flow",
        body: "Incoming inspection, electrical checks, thermal validation and pack end-of-line tests create an auditable path from component to vehicle.",
      },
      {
        eyebrow: "Defensibility",
        title: "Data improves the operating model",
        body: "Pack and vehicle evidence supports better warranty controls, service decisions, supplier development and future platform learning.",
      },
    ],
  },
  {
    slug: "supply-chain",
    index: "05",
    navTitle: "Supply chain",
    title: "Localized, bankable, and disciplined.",
    summary:
      "The near-term model is selective control: retain the capabilities that define quality while building strong supplier and manufacturing partnerships.",
    signal: "Supplier readiness",
    stats: [
      { label: "Logic", value: "Make / buy / partner" },
      { label: "Priority", value: "Dual-source risk" },
      { label: "Governance", value: "RFQ evidence" },
    ],
    sections: [
      {
        eyebrow: "Retained control",
        title: "Own the system-level decisions",
        body: "Genesis retains vehicle architecture, battery integration logic, software calibration, final quality and program governance.",
      },
      {
        eyebrow: "Partner network",
        title: "Source proven components with clear interfaces",
        body: "Cells, motors, inverters, castings, displays, safety systems and strategic tooling are sourced through structured RFQs and validation gates.",
        items: [
          "Defined technical and commercial evaluation lanes",
          "Quality, capacity and financial diligence",
          "Fallback strategies for high-risk components",
        ],
      },
      {
        eyebrow: "Bankability",
        title: "Contracts follow evidence",
        body: "Supplier awards are tied to architecture maturity, prototype learning, quality readiness and a credible launch plan.",
      },
    ],
  },
  {
    slug: "execution",
    index: "06",
    navTitle: "Execution gates",
    title: "From formation to controlled launch.",
    summary:
      "The first 18 months are structured to earn product, supplier, manufacturing and customer evidence without overbuilding capacity.",
    signal: "18-month roadmap",
    stats: [
      { label: "0-3M", value: "Architecture" },
      { label: "3-9M", value: "Prototype" },
      { label: "9-18M", value: "Launch prep" },
    ],
    sections: [
      {
        eyebrow: "Gate 01 / Formation",
        title: "Define the system",
        body: "Confirm leadership scope, platform assumptions, technical risk, supplier shortlist, budget controls and governance.",
      },
      {
        eyebrow: "Gate 02 / Prototype",
        title: "Turn assumptions into vehicles",
        body: "Build alpha and beta vehicles, start durability work, validate the battery plan and convert RFQs into accountable supplier decisions.",
      },
      {
        eyebrow: "Gate 03 / Launch readiness",
        title: "Earn the right to scale",
        body: "DVP&R, PPAP, certification, pilot demand, service readiness and manufacturing evidence must align before controlled SOP.",
      },
    ],
  },
  {
    slug: "leadership",
    index: "07",
    navTitle: "Leadership",
    title: "The final team is still forming.",
    summary:
      "This is an invitation to shape the company before the architecture, supplier network and launch operating model are locked.",
    signal: "Founding team",
    stats: [
      { label: "Company", value: "CEO / President" },
      { label: "Product", value: "Vehicle + E/E" },
      { label: "Operations", value: "COO + Quality" },
    ],
    sections: [
      {
        eyebrow: "Leadership scope",
        title: "Own the hard decisions early",
        body: "Experienced leaders can shape company formation, vehicle integration, manufacturing, software, battery, quality, capital planning and fleet commercialization.",
        items: [
          "CEO / President and capital strategy",
          "Chief Vehicle Engineer and technical integration",
          "COO / Manufacturing and launch governance",
          "E/E software, battery, quality, finance and fleet leadership",
        ],
      },
      {
        eyebrow: "First 180 days",
        title: "Translate expertise into evidence",
        body: "The early team will drive architecture freeze, supplier RFQs, prototype scope, compliance matrices, quality gates, pilot targets and capital controls.",
      },
      {
        eyebrow: "Ways to engage",
        title: "A structure matched to mutual fit",
        body: "Participation can begin as strategic advisory, domain-specific technical work, a defined project, or a transition into founding leadership.",
      },
    ],
  },
  {
    slug: "governance",
    index: "08",
    navTitle: "Governance",
    title: "Independent control. Formal capital. Clear gates.",
    summary:
      "Operating control and governance are designed around an independent U.S. structure with disciplined approvals, reporting and evidence-based capital release.",
    signal: "Control system",
    stats: [
      { label: "Entity", value: "U.S.-governed" },
      { label: "Capital", value: "Formal agreements" },
      { label: "Release", value: "Milestone-based" },
    ],
    sections: [
      {
        eyebrow: "Operating independence",
        title: "A clear U.S.-based control model",
        body: "Board controls, management accountability, legal structure and program decisions remain explicit and independently governed.",
      },
      {
        eyebrow: "Capital discipline",
        title: "Funding follows verified progress",
        body: "Capital relationships are structured through formal investment agreements. Additional releases are tied to architecture, suppliers, prototypes, validation and launch evidence.",
      },
      {
        eyebrow: "Controls",
        title: "Governance that protects execution",
        body: "Budget ownership, procurement controls, quality evidence, risk review and investor reporting create one auditable operating cadence.",
      },
    ],
  },
];

export const pageMap = Object.fromEntries(
  sitePages.map((page) => [page.slug, page]),
) as Record<string, SitePage>;

export const navGroups = [
  {
    label: "Program",
    items: sitePages.filter((page) =>
      ["program", "platform", "execution"].includes(page.slug),
    ),
  },
  {
    label: "Operations",
    items: sitePages.filter((page) =>
      ["manufacturing", "battery", "supply-chain"].includes(page.slug),
    ),
  },
  {
    label: "Company",
    items: sitePages.filter((page) =>
      ["leadership", "governance"].includes(page.slug),
    ),
  },
];
