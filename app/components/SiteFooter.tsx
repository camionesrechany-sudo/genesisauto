import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="footer-signal" aria-hidden="true" />
        Genesis Auto Manufacturing
      </div>
      <p>Independent U.S. intelligent EV manufacturing program.</p>
      <Link href="/leadership">Shape the program →</Link>
    </footer>
  );
}
