import "./global.css";
import type { Metadata } from "next";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

/**
 * Typography.
 *
 * Fonts are loaded via a stylesheet link rather than `next/font/google`, so
 * that the project builds in environments without access to
 * fonts.googleapis.com.
 *
 * On a normal network, `next/font/google` is the better choice: it self-hosts
 * the font files and removes the render-blocking request. To switch, import
 * EB_Garamond and Inter from "next/font/google", assign them to the
 * --font-display and --font-body CSS variables on <html>, and delete the
 * <link> tags below.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://waste.iitm.ac.in"),
  title: {
    default: "Waste & Circularity — Indian Institute of Technology Madras",
    template: "%s — IIT Madras Waste & Circularity",
  },
  description:
    "Guidelines, recycling and repurposing pathways, and campus-wide action for waste management across the academic, hostel and residential zones of IIT Madras.",
  openGraph: {
    title: "Waste & Circularity — IIT Madras",
    description:
      "The institute's single source for waste segregation, recycling, repurposing and sustainability action across all three campus zones.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
