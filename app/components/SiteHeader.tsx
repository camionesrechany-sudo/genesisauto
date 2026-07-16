"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navGroups } from "../site-data";
import { useLanguage } from "./LanguageProvider";

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>("program");

  const closeMenus = () => {
    setActiveGroup(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    closeMenus();
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <Link className="brand" href="/" aria-label="Genesis Auto Manufacturing home" onClick={closeMenus}>
        <span className="brand-mark" aria-hidden="true"><i />G</span>
        <span className="brand-name">
          Genesis
          <small>{language === "en" ? "Auto Manufacturing" : "汽车制造"}</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label={language === "en" ? "Primary navigation" : "主导航"}>
        {navGroups.map((group) => {
          const isOpen = activeGroup === group.id;
          const hasActiveItem = group.items.some((item) => pathname === `/${item.slug}`);
          return (
            <div className={`nav-group${isOpen ? " is-open" : ""}`} key={group.id}>
              <button
                className={hasActiveItem ? "is-current" : ""}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`desktop-${group.id}`}
                onClick={() => setActiveGroup(isOpen ? null : group.id)}
              >
                {group.label[language]} <span className="nav-chevron" aria-hidden="true" />
              </button>
              <div className="nav-dropdown" id={`desktop-${group.id}`} aria-hidden={!isOpen}>
                <span className="dropdown-label">{group.explore[language]}</span>
                {group.items.map((item) => (
                  <Link
                    className={pathname === `/${item.slug}` ? "active" : ""}
                    href={`/${item.slug}`}
                    key={item.slug}
                    onClick={closeMenus}
                  >
                    <span>{item.index}</span><b>{item.navTitle[language]}</b><i aria-hidden="true">→</i>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="header-tools">
        <div className="language-switch" aria-label={language === "en" ? "Language" : "语言"}>
          <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} type="button">EN</button>
          <span>/</span>
          <button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")} type="button">中文</button>
        </div>
        <button
          className={`mobile-trigger${mobileOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? (language === "en" ? "Close menu" : "关闭菜单") : (language === "en" ? "Open menu" : "打开菜单")}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </div>

      {mobileOpen && <button className="nav-backdrop" aria-label={language === "en" ? "Close menu" : "关闭菜单"} onClick={closeMenus} />}
      <div className={`mobile-panel${mobileOpen ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!mobileOpen}>
        <div className="mobile-panel-head">
          <span>{language === "en" ? "Explore Genesis" : "探索 Genesis"}</span>
          <i>MANUFACTURING / 001</i>
        </div>
        <nav aria-label={language === "en" ? "Mobile navigation" : "移动端导航"}>
          {navGroups.map((group) => {
            const isOpen = mobileGroup === group.id;
            return (
              <div className={`mobile-group${isOpen ? " is-open" : ""}`} key={group.id}>
                <button type="button" aria-expanded={isOpen} onClick={() => setMobileGroup(isOpen ? null : group.id)}>
                  <span>{group.label[language]}</span><i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                </button>
                <div className="mobile-links">
                  {group.items.map((item) => (
                    <Link className={pathname === `/${item.slug}` ? "active" : ""} href={`/${item.slug}`} key={item.slug} onClick={closeMenus}>
                      <span>{item.index}</span><b>{item.navTitle[language]}</b><i aria-hidden="true">→</i>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
