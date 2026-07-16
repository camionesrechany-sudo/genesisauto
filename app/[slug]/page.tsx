import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMap, sitePages } from "../site-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pageMap[slug];
  if (!page) return {};
  return {
    title: `${page.navTitle} | Genesis Auto Manufacturing`,
    description: page.summary,
  };
}

export default async function DetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pageMap[slug];
  if (!page) notFound();

  const currentIndex = sitePages.findIndex((item) => item.slug === slug);
  const next = sitePages[(currentIndex + 1) % sitePages.length];

  return (
    <main className="site-shell detail-page">
      <SiteHeader />

      <section className="detail-hero">
        <div className="detail-index">{page.index}</div>
        <div className="detail-title">
          <p className="eyebrow"><span /> {page.signal}</p>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
        </div>
        <div className="detail-visual" aria-hidden="true">
          <div className="detail-ring" />
          <div className="detail-core">G</div>
          <span>GEN / {page.index}</span>
        </div>
      </section>

      <section className="stat-grid" aria-label={`${page.navTitle} key facts`}>
        {page.stats.map((stat) => (
          <article key={stat.label}>
            <p>{stat.label}</p>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className="content-grid">
        {page.sections.map((section, index) => (
          <article className="content-card" key={section.title}>
            <div className="content-number">0{index + 1}</div>
            <div>
              {section.eyebrow && <p className="card-eyebrow">{section.eyebrow}</p>}
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.items && (
                <ul>
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>

      <Link className="next-page" href={`/${next.slug}`}>
        <span>Next / {next.index}</span>
        <strong>{next.navTitle}</strong>
        <i aria-hidden="true">↗</i>
      </Link>

      <SiteFooter />
    </main>
  );
}
