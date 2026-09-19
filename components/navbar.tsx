"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    setDrawer(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-ink-line bg-paper/95 backdrop-blur-md"
        onMouseLeave={() => setOpen(null)}
      >
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3">
          <Image src="/iitmlogo.svg" alt="" width={34} height={34} className="h-[34px] w-[34px] shrink-0" priority />
          <span className="leading-tight">
            <span className="block font-serif text-[1.25rem] leading-tight text-ink transition-colors group-hover:text-brand-700">
              {site.name}
            </span>
            <span className="block font-sans text-[0.625rem] uppercase tracking-[0.15em] text-ink-faint">
              IIT Madras
            </span>
          </span>
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.children ? item.label : null)}
              >
                <Link
                  href={item.href}
                  aria-expanded={item.children ? open === item.label : undefined}
                  className={`flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[0.8125rem] font-medium transition-colors ${
                    active ? "text-brand-800" : "text-ink-soft hover:text-brand-700"
                  }`}
                >
                  {item.label}
                  {item.children ? (
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                      className={`transition-transform ${open === item.label ? "rotate-180" : ""}`}
                    >
                      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </Link>
                {active ? (
                  <span aria-hidden className="absolute inset-x-3.5 -bottom-[1.05rem] h-[2px] rounded-full bg-brand-700" />
                ) : null}
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setDrawer((v) => !v)}
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-expanded={drawer}
          aria-label={drawer ? "Close menu" : "Open menu"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            {drawer ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop dropdown. Menus that carry descriptions get the full panel;
          the rest get a plain link row. */}
      {nav.map((item) => {
        if (!item.children || open !== item.label) return null;
        const detailed = item.children.some((c) => c.blurb);
        return (
          <div
            key={item.label}
            className="absolute inset-x-0 top-full hidden border-b border-ink-line bg-paper shadow-lift lg:block"
          >
            {detailed ? (
              <div className="wrap grid gap-10 py-8 lg:grid-cols-[minmax(0,15rem)_1fr]">
                <div className="border-r border-ink-line pr-8">
                  <p className="eyebrow-accent">{item.label}</p>
                  {item.blurb ? (
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-mute">
                      {item.blurb}
                    </p>
                  ) : null}
                </div>
                <ul className="grid gap-x-8 gap-y-1 md:grid-cols-2 xl:grid-cols-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="group block rounded-lg px-3.5 py-3 transition-colors hover:bg-brand-50"
                      >
                        <span className="block font-serif text-[1.125rem] leading-snug text-ink group-hover:text-brand-800">
                          {child.label}
                        </span>
                        {child.blurb ? (
                          <span className="mt-0.5 block text-[0.8125rem] leading-relaxed text-ink-mute">
                            {child.blurb}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="wrap py-7">
                <ul className="flex flex-wrap gap-x-6 gap-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-800"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}

      </header>

      {/* Mobile drawer. Rendered outside <header> on purpose: the header's
          backdrop-blur creates a containing block, which would otherwise
          collapse this fixed panel to nothing. */}
      {drawer ? (
        <div
          className="fixed inset-0 top-16 z-40 overflow-y-auto overscroll-contain bg-paper lg:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) setDrawer(false);
          }}
        >
          <nav className="wrap py-4" aria-label="Main">
            <ul className="divide-y divide-ink-line">
              {nav.map((item) => (
                <li key={item.label} className="py-2.5">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpen(open === item.label ? null : item.label)}
                        aria-expanded={open === item.label}
                        className="flex w-full items-center justify-between py-1.5 text-left"
                      >
                        <span className="font-serif text-[1.375rem] text-ink">{item.label}</span>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden
                          className={`text-ink-faint transition-transform ${open === item.label ? "rotate-180" : ""}`}
                        >
                          <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {open === item.label ? (
                        <ul className="mb-1 mt-1 space-y-0.5 border-l border-ink-line pl-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} className="block py-1.5 text-[1rem] text-ink-soft">
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  ) : (
                    <Link href={item.href} className="block py-1.5 font-serif text-[1.375rem] text-ink">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand-700 px-5 py-3 text-sm font-medium text-paper"
            >
              Write to us
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
