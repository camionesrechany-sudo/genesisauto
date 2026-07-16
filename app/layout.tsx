import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Genesis Auto Manufacturing",
    template: "%s",
  },
  description:
    "An independent U.S. intelligent EV manufacturing program built around disciplined engineering, battery integration and evidence-gated execution.",
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
      <body>{children}</body>
    </html>
  );
}
