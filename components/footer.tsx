import Image from "next/image";
import Link from "next/link";
import { nav, site, CAP_URL } from "@/content/site";

const FLAT = ["Recycling", "Repurposing", "Progress", "Resources", "About"];

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = nav
    .filter((n) => n.children)
    .map((n) => ({ label: n.label, links: n.children! }));
  columns.push({
    label: "More",
    links: nav.filter((n) => FLAT.includes(n.label)).map((n) => ({ label: n.label, href: n.href })),
  });

  return (
    <footer className="border-t border-ink-line bg-paper-soft">
      <div className="wrap py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,19rem)_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/iitmlogo.svg" alt="" width={38} height={38} className="h-[38px] w-[38px]" />
              <div>
                <p className="font-serif text-[1.25rem] leading-tight text-ink">{site.name}</p>
                <p className="font-sans text-[0.625rem] uppercase tracking-[0.15em] text-ink-faint">
                  {site.institute}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ink-mute">
              The institute&rsquo;s single reference for waste segregation, recovery and circularity
              across all three campus zones.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center rounded-lg border border-ink-line bg-paper px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
            >
              {site.email}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.label}>
                <p className="eyebrow">{col.label}</p>
                <ul className="mt-3.5 space-y-2">
                  {col.links.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="text-[0.875rem] text-ink-mute transition-colors hover:text-brand-700"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-line pt-7 text-[0.75rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.institute}. Waste Management Committee, with the Engineering Unit
            and the Sustainability Committee.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={CAP_URL} target="_blank" rel="noreferrer" className="hover:text-brand-700">
              Climate Action Plan
            </a>
            <a href="https://sustainability.iitm.ac.in" target="_blank" rel="noreferrer" className="hover:text-brand-700">
              School of Sustainability
            </a>
            <a href="https://www.iitm.ac.in" target="_blank" rel="noreferrer" className="hover:text-brand-700">
              iitm.ac.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
