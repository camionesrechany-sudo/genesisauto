"use client";

import Link from "next/link";
import { useLanguage } from "./components/LanguageProvider";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import type { LocalizedText } from "./site-data";

const tx = (en: string, zh: string): LocalizedText => ({ en, zh });
const principles = [
  { index: "01", title: tx("Independent U.S.", "美国独立运营"), text: tx("U.S.-based operating control and governance.", "以美国本地运营控制与治理为基础。"), slug: "governance" },
  { index: "02", title: tx("Fleet-first", "车队优先"), text: tx("A focused intelligent electric CUV beachhead.", "以聚焦的智能电动 CUV 切入市场。"), slug: "platform" },
  { index: "03", title: tx("Manufacturing-led", "制造驱动"), text: tx("Body, battery, final assembly and quality.", "覆盖车身、电池、总装与质量。"), slug: "manufacturing" },
  { index: "04", title: tx("Evidence-gated", "证据关口"), text: tx("Scale only after engineering and market proof.", "工程与市场验证后再扩大规模。"), slug: "execution" },
];

export default function Home() {
  const { language } = useLanguage();
  const copy = {
    eyebrow: tx("Independent U.S. intelligent EV manufacturing", "美国独立智能电动汽车制造"),
    headlineA: tx("From strategic capital", "从战略资本"),
    headlineB: tx("to real vehicle manufacturing.", "走向真实整车制造。"),
    summary: tx("A focused vehicle program built around disciplined engineering, battery integration, smart manufacturing and stage-gated execution.", "以严谨工程、电池集成、智能制造和阶段门执行为核心的聚焦型整车项目。"),
    primary: tx("Explore the program", "探索项目"),
    secondary: tx("Shape what comes next", "共同塑造下一阶段"),
    line: tx("Current operating logic", "当前运营逻辑"),
  };
  const stages = language === "en"
    ? ["Formation", "Architecture", "Prototype", "Launch readiness", "Controlled scale"]
    : ["组建", "架构", "样车", "量产就绪", "受控扩张"];

  return (
    <main className="site-shell home-page">
      <SiteHeader />
      <section className="home-hero">
        <div className="factory-atmosphere" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span />{copy.eyebrow[language]}</p>
          <h1>{copy.headlineA[language]}<br /><em>{copy.headlineB[language]}</em></h1>
          <p className="hero-summary">{copy.summary[language]}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/program">{copy.primary[language]} <span>→</span></Link>
            <Link className="button button-secondary" href="/leadership">{copy.secondary[language]}</Link>
          </div>
          <div className="hero-metrics" aria-label={language === "en" ? "Program status" : "项目状态"}>
            <div><span>01</span><b>{language === "en" ? "Vehicle architecture" : "整车架构"}</b><i>{language === "en" ? "ACTIVE" : "进行中"}</i></div>
            <div><span>02</span><b>{language === "en" ? "Factory system" : "工厂系统"}</b><i>{language === "en" ? "DEFINED" : "已定义"}</i></div>
          </div>
        </div>
        <div
          className="factory-scene"
          aria-label={language === "en"
            ? "Exploded electric vehicle components assembling into a finished vehicle in a repeating production cycle"
            : "电动汽车散件按生产流程循环组装为完整车辆"}
        >
          <div className="factory-hud hud-top"><span>GEN / LINE 01</span><i />{language === "en" ? "SYSTEM ONLINE" : "系统在线"}</div>
          <div className="assembly-counter" aria-hidden="true"><span>ASSEMBLY CYCLE</span><b>01—04</b></div>
          <div className="factory-depth" aria-hidden="true"><i /><i /><i /></div>
          <div className="vehicle-assembly" aria-hidden="true">
            <span className="assembly-axis axis-horizontal" />
            <span className="assembly-axis axis-vertical" />
            <div className="vehicle-part part-chassis"><i /><i /></div>
            <div className="vehicle-part part-pack"><i /><i /><i /><i /><i /></div>
            <div className="vehicle-part part-body"><i /></div>
            <div className="vehicle-part part-cabin"><i /></div>
            <span className="vehicle-part assembly-wheel wheel-left" />
            <span className="vehicle-part assembly-wheel wheel-right" />
            <span className="vehicle-part vehicle-trim trim-front" />
            <span className="vehicle-part vehicle-trim trim-rear" />
            <span className="assembly-node node-one" />
            <span className="assembly-node node-two" />
            <span className="assembly-node node-three" />
            <i className="scan-line" />
            <div className="completion-field"><i /><i /></div>
          </div>
          <div className="factory-floor"><i /><i /><i /><i /><i /></div>
          <div className="assembly-sequence" aria-hidden="true">
            <span className="sequence-body"><i />{language === "en" ? "BODY" : "车身"}</span>
            <span className="sequence-pack"><i />{language === "en" ? "PACK" : "电池"}</span>
            <span className="sequence-marry"><i />{language === "en" ? "MARRIAGE" : "合装"}</span>
            <span className="sequence-eol"><i />{language === "en" ? "EOL VERIFIED" : "下线验证"}</span>
            <b className="sequence-progress" />
          </div>
          <div className="factory-hud hud-bottom"><b>{language === "en" ? "EVIDENCE BEFORE SCALE" : "先验证，再扩张"}</b><span>BODY · PACK · FINAL · EOL</span></div>
          <span className="weld-spark spark-one" /><span className="weld-spark spark-two" /><span className="weld-spark spark-three" />
        </div>
      </section>
      <section className="section-intro">
        <p>{language === "en" ? "Operating principles" : "运营原则"}</p>
        <h2>{language === "en" ? "Build the vehicle. Prove the system." : "制造车辆，验证系统。"}</h2>
      </section>
      <section className="principle-grid" aria-label={language === "en" ? "Program principles" : "项目原则"}>
        {principles.map((item) => (
          <Link href={`/${item.slug}`} key={item.index}><span>{item.index}</span><h3>{item.title[language]}</h3><p>{item.text[language]}</p><i aria-hidden="true">↗</i></Link>
        ))}
      </section>
      <section className="stage-line">
        <p>{copy.line[language]}</p>
        <div>{stages.map((stage, index) => <span key={stage}>{stage}{index < stages.length - 1 && <i />}</span>)}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
