import Link from "next/link";
import { navGroups } from "../site-data";

function NavigationGroups({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? "mobile-groups" : "nav-groups"}>
      {navGroups.map((group) => (
        <details className="nav-group" key={group.label}>
          <summary>{group.label}</summary>
          <div className="nav-dropdown">
            <span className="dropdown-label">Explore {group.label}</span>
            {group.items.map((item) => (
              <Link href={`/${item.slug}`} key={item.slug}>
                <span>{item.index}</span>
                {item.navTitle}
              </Link>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Genesis Auto Manufacturing home">
        <span className="brand-mark" aria-hidden="true">
          G
        </span>
        <span className="brand-name">
          Genesis
          <small>Auto Manufacturing</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <NavigationGroups />
      </nav>

      <details className="mobile-menu">
        <summary>Explore</summary>
        <div className="mobile-panel">
          <NavigationGroups mobile />
        </div>
      </details>
    </header>
  );
}
