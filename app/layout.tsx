import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

const faviconPath = process.env.GITHUB_PAGES === "true"
  ? "/genesisauto/favicon.svg"
  : "/favicon.svg";

export const metadata: Metadata = {
  title: {
    default: "Genesis Auto Manufacturing",
    template: "%s",
  },
  description:
    "An independent U.S. intelligent EV manufacturing program built around disciplined engineering, battery integration and evidence-gated execution.",
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
  },
  openGraph: {
    title: "Genesis Auto Manufacturing",
    description: "From strategic capital to real vehicle manufacturing.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Genesis Auto Manufacturing",
    description: "From strategic capital to real vehicle manufacturing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
