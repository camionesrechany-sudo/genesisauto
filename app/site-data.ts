export type Language = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type SiteSection = {
  eyebrow?: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  items?: LocalizedText[];
};

export type SitePage = {
  slug: string;
  index: string;
  navTitle: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  signal: LocalizedText;
  stats: { label: LocalizedText; value: LocalizedText }[];
  sections: SiteSection[];
};

const tx = (en: string, zh: string): LocalizedText => ({ en, zh });

export const sitePages: SitePage[] = [
  {
    slug: "program",
    index: "01",
    navTitle: tx("Program overview", "项目概览"),
    title: tx("A real vehicle program. Built on evidence.", "以真实整车为目标，以证据推动决策。"),
    summary: tx(
      "An independent U.S. intelligent EV manufacturing program built around a focused vehicle, disciplined capital and measurable execution gates.",
      "一个独立运营的美国智能电动汽车制造项目，围绕聚焦车型、审慎资本与可衡量的执行关口展开。",
    ),
    signal: tx("Program definition", "项目定义"),
    stats: [
      { label: tx("Structure", "架构"), value: tx("Independent U.S.", "美国独立运营") },
      { label: tx("Launch focus", "首发重点"), value: tx("Fleet-first CUV", "车队优先 CUV") },
      { label: tx("Operating model", "运营模式"), value: tx("Stage-gated", "阶段门管理") },
    ],
    sections: [
      {
        eyebrow: tx("Positioning", "定位"),
        title: tx("Independent, investable, execution-led", "独立、可投资、以执行为核心"),
        body: tx(
          "A U.S.-governed vehicle company with a real engineering and sourcing program, a platform for future variants and board-level go / no-go controls.",
          "以美国治理体系运营，通过真实工程与采购计划、可延展平台及董事会级继续／停止机制推进。",
        ),
        items: [
          tx("Engineering and sourcing before scale claims", "先完成工程与采购证据，再讨论规模"),
          tx("Capital release tied to measurable progress", "资本释放与可衡量进展挂钩"),
          tx("Retained control across critical decisions", "关键决策始终保留项目控制权"),
        ],
      },
      {
        eyebrow: tx("Launch thesis", "首发逻辑"),
        title: tx("Focused first. Platform over time.", "先聚焦，再形成平台。"),
        body: tx(
          "The first intelligent electric CUV targets high-utilization fleet use. A disciplined launch creates the evidence base for future variants.",
          "首款智能电动 CUV 面向高使用率车队场景，以克制的首发计划为后续车型建立证据基础。",
        ),
      },
      {
        eyebrow: tx("Discipline", "原则"),
        title: tx("No concept-only story", "不做停留在概念层面的故事"),
        body: tx(
          "Architecture, suppliers, prototypes, quality and demand must each clear their own gate before expansion.",
          "架构、供应商、样车、质量与需求必须分别通过验证关口，之后才进入扩张。",
        ),
      },
    ],
  },
  {
    slug: "platform",
    index: "02",
    navTitle: tx("Vehicle platform", "整车平台"),
    title: tx("Focused first. Platform over time.", "先聚焦首款车型，再逐步平台化。"),
    summary: tx(
      "One manufacturable electric CUV creates a clear path from architecture to fleet evidence, then to controlled variants.",
      "以一款可制造的电动 CUV 打通从架构到车队验证的路径，再有序扩展衍生车型。",
    ),
    signal: tx("Vehicle architecture", "整车架构"),
    stats: [
      { label: tx("Beachhead", "切入点"), value: tx("Intelligent e-CUV", "智能电动 CUV") },
      { label: tx("Priority", "优先级"), value: tx("Uptime + TCO", "出勤率 + TCO") },
      { label: tx("Expansion", "扩展"), value: tx("Modular variants", "模块化衍生") },
    ],
    sections: [
      {
        eyebrow: tx("Product intent", "产品目标"),
        title: tx("Designed for real operating cycles", "为真实运营周期而设计"),
        body: tx(
          "The first vehicle serves users who value uptime, serviceability, predictable economics and depot-compatible charging.",
          "首款车服务重视出勤率、可维护性、可预测经济性及场站充电兼容性的用户。",
        ),
        items: [
          tx("Practical range and fleet-capable packaging", "实用续航与车队适用空间"),
          tx("Software-defined diagnostics and controlled OTA", "软件定义诊断与可控 OTA"),
          tx("Architecture ready for future body variants", "支持后续车身衍生的架构"),
        ],
      },
      {
        eyebrow: tx("Engineering", "工程"),
        title: tx("Architecture before feature volume", "先稳定架构，再扩展功能"),
        body: tx(
          "Structure, E/E, thermal, safety, diagnostics and service strategy are frozen through evidence-led trade-offs.",
          "车身、电子电气、热管理、安全、诊断与服务策略通过证据驱动的取舍逐步冻结。",
        ),
      },
      {
        eyebrow: tx("Customer proof", "客户验证"),
        title: tx("Controlled demand before mass-market noise", "先验证可控需求，再进入大众市场"),
        body: tx(
          "Pilot agreements, fleet use cases and measurable total cost of ownership establish a credible launch path.",
          "以试点协议、车队场景及可衡量的全生命周期成本建立可信首发路径。",
        ),
      },
    ],
  },
  {
    slug: "manufacturing",
    index: "03",
    navTitle: tx("Manufacturing system", "制造系统"),
    title: tx("Manufacturing control before scale.", "先建立制造控制，再扩大规模。"),
    summary: tx(
      "Body, battery, final assembly and end-of-line validation operate as one traceable production flow.",
      "将车身、电池、总装与下线验证连接为一条可追溯的生产流程。",
    ),
    signal: tx("Factory readiness", "工厂就绪度"),
    stats: [
      { label: tx("Flow", "流程"), value: tx("4 core stages", "4 个核心阶段") },
      { label: tx("Control", "控制"), value: tx("Quality gates", "质量关口") },
      { label: tx("Ramp", "爬坡"), value: tx("Low volume first", "先低产量验证") },
    ],
    sections: [
      {
        eyebrow: tx("Production flow", "生产流程"),
        title: tx("From body to verified vehicle", "从车身到验证合格的整车"),
        body: tx(
          "Every handoff across structure, pack integration, final assembly and end-of-line test has clear ownership.",
          "车身结构、电池包装配、总装和下线测试的每一次交接都有清晰责任。",
        ),
        items: [
          tx("Body joining and dimensional control", "车身连接与尺寸控制"),
          tx("Battery pack, BMS and thermal integration", "电池包、BMS 与热管理集成"),
          tx("Drive unit, interior, flashing and calibration", "驱动系统、内饰、软件刷写与标定"),
          tx("Charging, ADAS, NVH and final verification", "充电、ADAS、NVH 与最终验证"),
        ],
      },
      {
        eyebrow: tx("Smart factory", "智能工厂"),
        title: tx("Automation where it improves evidence", "让自动化服务于一致性与证据"),
        body: tx(
          "Robotics, vision inspection, torque traceability and digital work instructions improve repeatability and learning.",
          "机器人、视觉检测、扭矩追溯和数字化作业指导提升一致性与学习效率。",
        ),
      },
      {
        eyebrow: tx("Ramp logic", "爬坡逻辑"),
        title: tx("Prove the line before expanding it", "先证明产线，再扩大产能"),
        body: tx(
          "A low-volume launch line establishes process capability, supplier performance and field reliability before major capacity commitments.",
          "低产量首发线先验证过程能力、供应商表现与实车可靠性，再投入大规模产能。",
        ),
      },
    ],
  },
  {
    slug: "battery",
    index: "04",
    navTitle: tx("Battery & powertrain", "电池与动力"),
    title: tx("Battery integration is a manufacturing capability.", "电池集成本身就是核心制造能力。"),
    summary: tx(
      "Pack architecture, thermal control, BMS validation and traceability form one quality and warranty system.",
      "电池包架构、热管理、BMS 验证与追溯共同构成质量和质保体系。",
    ),
    signal: tx("Energy system", "能源系统"),
    stats: [
      { label: tx("Scope", "范围"), value: tx("Pack + BMS", "电池包 + BMS") },
      { label: tx("Evidence", "验证"), value: tx("Thermal + safety", "热管理 + 安全") },
      { label: tx("Lifecycle", "生命周期"), value: tx("Traceable", "全程可追溯") },
    ],
    sections: [
      {
        eyebrow: tx("Core capability", "核心能力"),
        title: tx("Integration, not cell speculation", "专注系统集成，而非电芯概念"),
        body: tx(
          "Genesis focuses on cell strategy, pack architecture, BMS integration, thermal management and electrical end-of-line testing.",
          "Genesis 聚焦电芯策略、电池包架构、BMS 集成、热管理与下线电气测试。",
        ),
        items: [
          tx("Supplier qualification and cell strategy", "供应商准入与电芯策略"),
          tx("Pack structure, sealing and thermal validation", "包体结构、密封与热验证"),
          tx("BMS software, diagnostics and fault handling", "BMS 软件、诊断与故障处理"),
          tx("Pack-level service and warranty traceability", "电池包级服务与质保追溯"),
        ],
      },
      {
        eyebrow: tx("Quality", "质量"),
        title: tx("Safety evidence is built into the flow", "把安全证据嵌入生产流程"),
        body: tx(
          "Incoming checks, electrical inspection, thermal validation and pack end-of-line tests create an auditable path.",
          "来料检查、电气检测、热验证及电池包下线测试共同形成可审计路径。",
        ),
      },
      {
        eyebrow: tx("Defensibility", "长期能力"),
        title: tx("Data improves the operating model", "用数据持续改善运营模型"),
        body: tx(
          "Pack and vehicle evidence improves warranty controls, service decisions, supplier development and future platforms.",
          "电池包与整车数据持续改善质保控制、服务决策、供应商发展及后续平台。",
        ),
      },
    ],
  },
  {
    slug: "supply-chain",
    index: "05",
    navTitle: tx("Supply chain", "供应链"),
    title: tx("Localized, bankable and disciplined.", "本地化、可融资、守纪律。"),
    summary: tx(
      "Retain the capabilities that define quality while building strong supplier and manufacturing partnerships.",
      "保留决定质量的核心能力，同时建立稳健的供应商与制造合作网络。",
    ),
    signal: tx("Supplier readiness", "供应商就绪度"),
    stats: [
      { label: tx("Logic", "逻辑"), value: tx("Make / buy / partner", "自制／采购／合作") },
      { label: tx("Priority", "重点"), value: tx("Dual-source risk", "双来源风险管理") },
      { label: tx("Governance", "治理"), value: tx("RFQ evidence", "RFQ 证据") },
    ],
    sections: [
      {
        eyebrow: tx("Retained control", "保留控制"),
        title: tx("Own the system-level decisions", "掌握系统级关键决策"),
        body: tx(
          "Genesis retains vehicle architecture, battery integration logic, software calibration, final quality and program governance.",
          "Genesis 保留整车架构、电池集成逻辑、软件标定、最终质量与项目治理能力。",
        ),
      },
      {
        eyebrow: tx("Partner network", "合作网络"),
        title: tx("Proven components, clear interfaces", "成熟部件，清晰接口"),
        body: tx(
          "Cells, motors, inverters, safety systems and tooling are sourced through structured RFQs and validation gates.",
          "电芯、电机、逆变器、安全系统与工装通过结构化 RFQ 和验证关口进行采购。",
        ),
        items: [
          tx("Technical and commercial evaluation lanes", "技术与商务双线评估"),
          tx("Quality, capacity and financial diligence", "质量、产能与财务尽调"),
          tx("Fallback strategies for high-risk components", "高风险部件的备选策略"),
        ],
      },
      {
        eyebrow: tx("Bankability", "可融资性"),
        title: tx("Contracts follow evidence", "合同跟随证据"),
        body: tx(
          "Supplier awards follow architecture maturity, prototype learning, quality readiness and a credible launch plan.",
          "供应商定点建立在架构成熟度、样车学习、质量准备及可信首发计划之上。",
        ),
      },
    ],
  },
  {
    slug: "execution",
    index: "06",
    navTitle: tx("Execution gates", "执行关口"),
    title: tx("From formation to controlled launch.", "从组建到受控量产。"),
    summary: tx(
      "The first 18 months earn product, supplier, manufacturing and customer evidence without overbuilding capacity.",
      "前 18 个月聚焦产品、供应商、制造与客户证据，避免过早建设过剩产能。",
    ),
    signal: tx("18-month roadmap", "18 个月路线图"),
    stats: [
      { label: tx("0–3M", "0–3 月"), value: tx("Architecture", "架构") },
      { label: tx("3–9M", "3–9 月"), value: tx("Prototype", "样车") },
      { label: tx("9–18M", "9–18 月"), value: tx("Launch prep", "量产准备") },
    ],
    sections: [
      {
        eyebrow: tx("Gate 01 / Formation", "关口 01／组建"),
        title: tx("Define the system", "定义完整系统"),
        body: tx(
          "Confirm leadership scope, platform assumptions, technical risks, supplier shortlist, budget controls and governance.",
          "确认领导团队职责、平台假设、技术风险、供应商短名单、预算控制与治理机制。",
        ),
      },
      {
        eyebrow: tx("Gate 02 / Prototype", "关口 02／样车"),
        title: tx("Turn assumptions into vehicles", "把假设变成车辆"),
        body: tx(
          "Build alpha and beta vehicles, begin durability work, validate the battery plan and convert RFQs into decisions.",
          "制造 Alpha 与 Beta 样车，启动耐久验证，验证电池方案，并将 RFQ 转化为可负责的决策。",
        ),
      },
      {
        eyebrow: tx("Gate 03 / Launch readiness", "关口 03／量产就绪"),
        title: tx("Earn the right to scale", "用证据赢得扩张资格"),
        body: tx(
          "DVP&R, PPAP, certification, pilot demand, service readiness and manufacturing evidence align before SOP.",
          "DVP&R、PPAP、认证、试点需求、服务准备与制造证据在 SOP 前完成对齐。",
        ),
      },
    ],
  },
  {
    slug: "leadership",
    index: "07",
    navTitle: tx("Leadership", "领导团队"),
    title: tx("The final team is still forming.", "核心团队正在组建。"),
    summary: tx(
      "An invitation to shape the company before its architecture, supplier network and launch model are locked.",
      "在架构、供应商网络与量产模式锁定之前，共同塑造这家公司的机会。",
    ),
    signal: tx("Founding team", "创始团队"),
    stats: [
      { label: tx("Company", "公司"), value: tx("CEO / President", "CEO／总裁") },
      { label: tx("Product", "产品"), value: tx("Vehicle + E/E", "整车 + E/E") },
      { label: tx("Operations", "运营"), value: tx("COO + Quality", "COO + 质量") },
    ],
    sections: [
      {
        eyebrow: tx("Leadership scope", "领导范围"),
        title: tx("Own the hard decisions early", "尽早承担关键决策"),
        body: tx(
          "Experienced leaders can shape formation, vehicle integration, manufacturing, software, battery, quality and commercialization.",
          "资深领导者可共同塑造公司组建、整车集成、制造、软件、电池、质量及商业化。",
        ),
        items: [
          tx("CEO / President and capital strategy", "CEO／总裁与资本战略"),
          tx("Chief Vehicle Engineer and integration", "总工程师与整车集成"),
          tx("COO / Manufacturing and launch governance", "COO／制造与量产治理"),
          tx("Software, battery, quality, finance and fleet", "软件、电池、质量、财务与车队业务"),
        ],
      },
      {
        eyebrow: tx("First 180 days", "首个 180 天"),
        title: tx("Translate expertise into evidence", "把经验转化为证据"),
        body: tx(
          "The early team drives architecture freeze, RFQs, prototypes, compliance, quality gates, pilots and capital controls.",
          "早期团队推动架构冻结、RFQ、样车、合规、质量关口、试点与资本控制。",
        ),
      },
      {
        eyebrow: tx("Ways to engage", "参与方式"),
        title: tx("A structure matched to mutual fit", "根据双方匹配度灵活合作"),
        body: tx(
          "Engagement can begin as strategic advisory, domain work, a defined project or a transition into founding leadership.",
          "合作可从战略顾问、专项工作或明确项目开始，并逐步转向创始领导岗位。",
        ),
      },
    ],
  },
  {
    slug: "governance",
    index: "08",
    navTitle: tx("Governance", "公司治理"),
    title: tx("Independent control. Formal capital. Clear gates.", "独立控制、规范资本、清晰关口。"),
    summary: tx(
      "An independent U.S. structure with disciplined approvals, reporting and evidence-based capital release.",
      "以独立的美国运营架构、审慎审批、透明报告和基于证据的资本释放为基础。",
    ),
    signal: tx("Control system", "控制体系"),
    stats: [
      { label: tx("Entity", "主体"), value: tx("U.S.-governed", "美国治理") },
      { label: tx("Capital", "资本"), value: tx("Formal agreements", "正式协议") },
      { label: tx("Release", "释放"), value: tx("Milestone-based", "基于里程碑") },
    ],
    sections: [
      {
        eyebrow: tx("Operating independence", "运营独立"),
        title: tx("A clear U.S.-based control model", "清晰的美国本地控制模式"),
        body: tx(
          "Board controls, management accountability, legal structure and program decisions remain explicit and independently governed.",
          "董事会控制、管理层责任、法律结构与项目决策均保持清晰并独立治理。",
        ),
      },
      {
        eyebrow: tx("Capital discipline", "资本纪律"),
        title: tx("Funding follows verified progress", "资金跟随已验证的进展"),
        body: tx(
          "Additional releases are tied to architecture, suppliers, prototypes, validation and launch evidence.",
          "后续资金释放与架构、供应商、样车、验证及量产证据挂钩。",
        ),
      },
      {
        eyebrow: tx("Controls", "控制"),
        title: tx("Governance that protects execution", "用治理保护执行"),
        body: tx(
          "Budget ownership, procurement controls, quality evidence, risk review and investor reporting create one auditable cadence.",
          "预算责任、采购控制、质量证据、风险审查与投资人报告形成可审计的运营节奏。",
        ),
      },
    ],
  },
];

export const pageMap = Object.fromEntries(
  sitePages.map((page) => [page.slug, page]),
) as Record<string, SitePage>;

export const navGroups = [
  {
    id: "program",
    label: tx("Program", "项目"),
    explore: tx("Explore the program", "探索项目"),
    items: sitePages.filter((page) => ["program", "platform", "execution"].includes(page.slug)),
  },
  {
    id: "operations",
    label: tx("Operations", "运营"),
    explore: tx("Explore operations", "探索运营"),
    items: sitePages.filter((page) => ["manufacturing", "battery", "supply-chain"].includes(page.slug)),
  },
  {
    id: "company",
    label: tx("Company", "公司"),
    explore: tx("Explore the company", "探索公司"),
    items: sitePages.filter((page) => ["leadership", "governance"].includes(page.slug)),
  },
];
