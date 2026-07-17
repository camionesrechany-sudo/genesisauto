"use client";

import Link from "next/link";
import { useLanguage } from "./components/LanguageProvider";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import type { LocalizedText } from "./site-data";

const tx = (en: string, zh: string): LocalizedText => ({ en, zh });
const principles = [
  { index: "01", title: tx("Independent U.S.", "缇庡浗鐙珛杩愯惀"), text: tx("U.S.-based operating control and governance.", "浠ョ編鍥芥湰鍦拌繍钀ユ帶鍒朵笌娌荤悊涓哄熀纭€銆?), slug: "governance" },
  { index: "02", title: tx("Fleet-first", "杞﹂槦浼樺厛"), text: tx("A focused intelligent electric CUV beachhead.", "浠ヨ仛鐒︾殑鏅鸿兘鐢靛姩 CUV 鍒囧叆甯傚満銆?), slug: "platform" },
  { index: "03", title: tx("Manufacturing-led", "鍒堕€犻┍鍔?), text: tx("Body, battery, final assembly and quality.", "瑕嗙洊杞﹁韩銆佺數姹犮€佹€昏涓庤川閲忋€?), slug: "manufacturing" },
  { index: "04", title: tx("Evidence-gated", "璇佹嵁鍏冲彛"), text: tx("Scale only after engineering and market proof.", "宸ョ▼涓庡競鍦洪獙璇佸悗鍐嶆墿澶ц妯°€?), slug: "execution" },
];

export default function Home() {
  const { language } = useLanguage();
  const copy = {
    eyebrow: tx("Independent U.S. intelligent EV manufacturing", "缇庡浗鐙珛鏅鸿兘鐢靛姩姹借溅鍒堕€?),
    headlineA: tx("From strategic capital", "浠庢垬鐣ヨ祫鏈?),
    headlineB: tx("to real vehicle manufacturing.", "璧板悜鐪熷疄鏁磋溅鍒堕€犮€?),
    summary: tx("A focused vehicle program built around disciplined engineering, battery integration, smart manufacturing and stage-gated execution.", "浠ヤ弗璋ㄥ伐绋嬨€佺數姹犻泦鎴愩€佹櫤鑳藉埗閫犲拰闃舵闂ㄦ墽琛屼负鏍稿績鐨勮仛鐒﹀瀷鏁磋溅椤圭洰銆?),
    primary: tx("Explore the program", "鎺㈢储椤圭洰"),
    secondary: tx("Shape what comes next", "鍏卞悓濉戦€犱笅涓€闃舵"),
    line: tx("Current operating logic", "褰撳墠杩愯惀閫昏緫"),
  };
  const stages = language === "en"
    ? ["Formation", "Architecture", "Prototype", "Launch readiness", "Controlled scale"]
    : ["缁勫缓", "鏋舵瀯", "鏍疯溅", "閲忎骇灏辩华", "鍙楁帶鎵╁紶"];

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
            <Link className="button button-primary" href="/program">{copy.primary[language]} <span>鈫?/span></Link>
            <Link className="button button-secondary" href="/leadership">{copy.secondary[language]}</Link>
          </div>
          <div className="hero-metrics" aria-label={language === "en" ? "Program status" : "椤圭洰鐘舵€?}>
            <div><span>01</span><b>{language === "en" ? "Vehicle architecture" : "鏁磋溅鏋舵瀯"}</b><i>{language === "en" ? "ACTIVE" : "杩涜涓?}</i></div>
            <div><span>02</span><b>{language === "en" ? "Factory system" : "宸ュ巶绯荤粺"}</b><i>{language === "en" ? "DEFINED" : "宸插畾涔?}</i></div>
          </div>
        </div>
        <div
          className="factory-scene"
          aria-label={language === "en"
            ? "Exploded electric vehicle components assembling into a finished vehicle in a repeating production cycle"
            : "鐢靛姩姹借溅鏁ｄ欢鎸夌敓浜ф祦绋嬪惊鐜粍瑁呬负瀹屾暣杞﹁締"}
        >
          <div className="factory-hud hud-top"><span>GEN / LINE 01</span><i />{language === "en" ? "SYSTEM ONLINE" : "绯荤粺鍦ㄧ嚎"}</div>
          <div className="assembly-counter" aria-hidden="true"><span>ASSEMBLY CYCLE</span><b>01鈥?4</b></div>
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
            <span className="sequence-body"><i />{language === "en" ? "BODY" : "杞﹁韩"}</span>
            <span className="sequence-pack"><i />{language === "en" ? "PACK" : "鐢垫睜"}</span>
            <span className="sequence-marry"><i />{language === "en" ? "MARRIAGE" : "鍚堣"}</span>
            <span className="sequence-eol"><i />{language === "en" ? "EOL VERIFIED" : "涓嬬嚎楠岃瘉"}</span>
            <b className="sequence-progress" />
          </div>
          <div className="factory-hud hud-bottom"><b>{language === "en" ? "EVIDENCE BEFORE SCALE" : "鍏堥獙璇侊紝鍐嶆墿寮?}</b><span>BODY 路 PACK 路 FINAL 路 EOL</span></div>
          <span className="weld-spark spark-one" /><span className="weld-spark spark-two" /><span className="weld-spark spark-three" />
        </div>
      </section>
      <section className="section-intro">
        <p>{language === "en" ? "Operating principles" : "杩愯惀鍘熷垯"}</p>
        <h2>{language === "en" ? "Build the vehicle. Prove the system." : "鍒堕€犺溅杈嗭紝楠岃瘉绯荤粺銆?}</h2>
      </section>
      <section className="principle-grid" aria-label={language === "en" ? "Program principles" : "椤圭洰鍘熷垯"}>
        {principles.map((item) => (
          <Link href={`/${item.slug}`} key={item.index}><span>{item.index}</span><h3>{item.title[language]}</h3><p>{item.text[language]}</p><i aria-hidden="true">鈫?/i></Link>
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
