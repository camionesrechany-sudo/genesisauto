"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export function SiteFooter() {
  const { language } = useLanguage();
  return (
    <footer className="site-footer">
      <div><span className="footer-signal" aria-hidden="true" />Genesis Auto Manufacturing</div>
      <p>{language === "en" ? "Independent U.S. intelligent EV manufacturing program." : "独立运营的美国智能电动汽车制造项目。"}</p>
      <Link href="/leadership">{language === "en" ? "Shape the program" : "共同塑造项目"} <span aria-hidden="true">→</span></Link>
    </footer>
  );
}
