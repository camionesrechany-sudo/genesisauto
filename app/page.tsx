import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const principles = [
  ["01", "Independent U.S.", "U.S.-based operating control and governance."],
  ["02", "Fleet-first", "A focused intelligent electric CUV beachhead."],
  ["03", "Manufacturing-led", "Body, battery, final assembly and quality."],
  ["04", "Evidence-gated", "Scale only after engineering and market proof."],
];

export default function Home() {
  return (
    <main className="site-shell home-page">
      <SiteHeader />

      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Independent U.S. intelligent EV manufacturing
          </p>
          <h1>
            From strategic capital
            <br />
            to <em>real vehicle manufacturing.</em>
          </h1>
          <p className="hero-summary">
            A focused vehicle program built around disciplined engineering,
            battery integration, smart manufacturing and stage-gated execution.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/program">
              Explore the program <span>↗</span>
            </Link>
            <Link className="button button-secondary" href="/leadership">
              Shape what comes next
            </Link>
          </div>
        </div>

        <div className="hero-system" aria-label="Genesis vehicle program status graphic">
          <div className="system-orbit orbit-one" />
          <div className="system-orbit orbit-two" />
          <div className="system-card">
            <div className="system-card-head">
              <span>PROGRAM / 001</span>
              <span className="ready"><i /> ACTIVE</span>
            </div>
            <div className="system-stage">
              <span className="stage-tag">Evidence before scale</span>
              <div className="stage-grid" />
            </div>
            <div className="signal-bars" aria-hidden="true">
              <i /><i /><i />
            </div>
          </div>
          <div className="system-note">
            <strong>Formation → SOP</strong>
            <span>Every gate must be earned.</span>
          </div>
        </div>
      </section>

      <section className="principle-grid" aria-label="Program principles">
        {principles.map(([index, title, text]) => (
          <article key={index}>
            <span>{index}</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <i aria-hidden="true">↗</i>
          </article>
        ))}
      </section>

      <section className="stage-line">
        <p>Current operating logic</p>
        <div>
          <span>Formation</span><i />
          <span>Architecture</span><i />
          <span>Prototype</span><i />
          <span>Launch readiness</span><i />
          <span>Controlled scale</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
