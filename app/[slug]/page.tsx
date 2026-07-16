import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailContent } from "../components/DetailContent";
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
    title: `${page.navTitle.en} | Genesis Auto Manufacturing`,
    description: page.summary.en,
  };
}

export default async function DetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pageMap[slug];
  if (!page) notFound();
  const currentIndex = sitePages.findIndex((item) => item.slug === slug);
  const next = sitePages[(currentIndex + 1) % sitePages.length];
  return <DetailContent page={page} next={next} />;
}
