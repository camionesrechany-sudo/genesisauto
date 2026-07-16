"use client";

import Link from "next/link";
import type { SitePage } from "../site-data";
import { useLanguage } from "./LanguageProvider";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function DetailContent({ page, next }: { page: SitePage; next: SitePage }) {
  const { language } = useLanguage();
  return (
    <main className="site-shell detail-page">
      <SiteHeader />
      <section className="detail-hero">
        <div className="detail-index">PROGRAM / {page.index}</div>
        <div className="detail-title">
          <p className="eyebrow"><span />{page.signal[language]}</p>
          <h1>{page.title[language]}</h1><p>{page.summary[language]}</p>
        </div>
        <div className="detail-visual" aria-hidden="true">
          <div className="detail-grid" /><div className="detail-ring" /><div className="detail-core"><span>G</span></div><i className="detail-scan" /><b>GEN / {page.index}</b>
        </div>
      </section>
      <section className="stat-grid" aria-label={`${page.navTitle[language]} ${language === "en" ? "key facts" : "关键数据"}`}>
        {page.stats.map((stat) => <article key={stat.label.en}><p>{stat.label[language]}</p><strong>{stat.value[language]}</strong></article>)}
      </section>
      <section className="content-grid">
        {page.sections.map((section, index) => (
          <article className="content-card" key={section.title.en}>
            <div className="content-number">0{index + 1}</div>
            <div>
              {section.eyebrow && <p className="card-eyebrow">{section.eyebrow[language]}</p>}
              <h2>{section.title[language]}</h2><p>{section.body[language]}</p>
              {section.items && <ul>{section.items.map((item) => <li key={item.en}>{item[language]}</li>)}</ul>}
            </div>
          </article>
        ))}
      </section>
      <Link className="next-page" href={`/${next.slug}`}><span>{language === "en" ? "Next" : "下一页"} / {next.index}</span><strong>{next.navTitle[language]}</strong><i aria-hidden="true">→</i></Link>
      <SiteFooter />
    </main>
  );
}
