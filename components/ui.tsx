import Link from "next/link";
import type { ReactNode } from "react";
import Icon, { type IconKey } from "./icons";

/* ---------------------------------------------------------------- layout */

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "soft" | "deep" | "ink";
  id?: string;
  tight?: boolean;
}) {
  const tones = {
    paper: "bg-paper text-ink",
    soft: "bg-paper-soft text-ink",
    deep: "bg-paper-deep text-ink",
    ink: "bg-ink text-paper",
  };
  return (
    <section
      id={id}
      className={`${tones[tone]} ${tight ? "py-12 sm:py-14" : "py-16 sm:py-20 lg:py-24"} ${className}`}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  inverted = false,
  icon,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  inverted?: boolean;
  icon?: IconKey;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`flex items-center gap-2 ${
            align === "center" ? "justify-center" : ""
          } ${inverted ? "eyebrow text-brand-200" : "eyebrow-accent"}`}
        >
          {icon ? <Icon name={icon} size={16} className="-mt-px" /> : null}
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`display-2 ${eyebrow ? "mt-3" : ""} ${inverted ? "!text-paper" : ""}`}>
        {title}
      </h2>
      {lede ? <p className={`lede mt-4 ${inverted ? "text-paper/70" : ""}`}>{lede}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------ page header */

export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  meta,
  icon,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: { label: string; href: string }[];
  meta?: ReactNode;
  icon?: IconKey;
}) {
  return (
    <header className="border-b border-ink-line bg-paper-soft">
      <div className="wrap py-12 sm:py-16 lg:py-20">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-faint">
              <li>
                <Link href="/" className="transition-colors hover:text-brand-700">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <Link href={c.href} className="transition-colors hover:text-brand-700">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="eyebrow-accent flex items-center gap-2">
            {icon ? <Icon name={icon} size={16} className="-mt-px" /> : null}
            {eyebrow}
          </p>
        ) : null}
        <h1 className="display-1 mt-3 max-w-[18ch]">{title}</h1>
        {lede ? <p className="lede mt-5 max-w-2xl">{lede}</p> : null}
        {meta ? <div className="mt-8">{meta}</div> : null}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ cards */

export function Card({
  href,
  eyebrow,
  title,
  body,
  footer,
  className = "",
  icon,
}: {
  href?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  footer?: ReactNode;
  className?: string;
  icon?: IconKey;
}) {
  const inner = (
    <>
      {icon ? <Icon name={icon} size={26} className="mb-4 text-brand-700" /> : null}
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h3 className={`font-serif text-[1.5rem] leading-tight text-ink ${eyebrow ? "mt-2" : ""}`}>
        {title}
      </h3>
      {body ? <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{body}</p> : null}
      {footer ? <div className="mt-5">{footer}</div> : null}
      {href ? (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
          Read more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : null}
    </>
  );

  const base = "group flex h-full flex-col rounded-xl border border-ink-line bg-paper p-6 shadow-card sm:p-7";

  return href ? (
    <Link
      href={href}
      className={`${base} transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift ${className}`}
    >
      {inner}
    </Link>
  ) : (
    <div className={`${base} ${className}`}>{inner}</div>
  );
}

/* ------------------------------------------------------------------ stats */

type StatItem = {
  value: string;
  unit?: string;
  label: string;
  note?: string;
  source?: string;
  sourceUrl?: string;
  verified?: boolean;
};

export function StatGrid({ items }: { items: StatItem[] }) {
  return (
    <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((m) => (
        <div key={m.label} className="rounded-xl border border-ink-line bg-paper p-6 shadow-card">
          <dt className="font-serif text-[3rem] leading-none text-brand-700">
            {m.value}
            {m.unit ? (
              <span className="ml-1.5 align-baseline font-sans text-xs font-medium tracking-wide text-ink-faint">
                {m.unit}
              </span>
            ) : null}
          </dt>
          <dd className="mt-4">
            <p className="text-sm font-medium text-ink">{m.label}</p>
            {m.note ? (
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-mute">{m.note}</p>
            ) : null}
            {m.source ? (
              <p className="mt-3 text-[0.6875rem] uppercase tracking-[0.1em] text-ink-faint">
                {m.sourceUrl ? (
                  <a href={m.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-brand-700">
                    {m.source}
                  </a>
                ) : (
                  m.source
                )}
                {m.verified === false ? (
                  <span className="ml-2 rounded-full bg-brand-50 px-2 py-0.5 normal-case tracking-normal text-brand-700">
                    to confirm
                  </span>
                ) : null}
              </p>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------- callouts */

export function Callout({
  title,
  children,
  tone = "brand",
  icon,
}: {
  title?: string;
  children: ReactNode;
  tone?: "brand" | "moss" | "warn" | "plain";
  icon?: IconKey;
}) {
  const tones = {
    brand: "border-brand-200 bg-brand-50",
    moss: "border-moss-200 bg-moss-50",
    warn: "border-[#E8D9A8] bg-[#FBF7EC]",
    plain: "border-ink-line bg-paper-soft",
  };
  const iconTone = {
    brand: "text-brand-600",
    moss: "text-moss-600",
    warn: "text-[#8A6310]",
    plain: "text-ink-mute",
  };
  // Default icon by tone, so a warn callout always reads as a warning.
  const glyph: IconKey | undefined =
    icon ?? (tone === "warn" ? "warning" : tone === "moss" ? "check" : undefined);

  return (
    <aside className={`rounded-xl border ${tones[tone]} p-6`}>
      {title ? (
        <p className="flex items-start gap-2.5 font-serif text-[1.25rem] leading-snug text-ink">
          {glyph ? <Icon name={glyph} size={20} className={`mt-[3px] ${iconTone[tone]}`} /> : null}
          <span>{title}</span>
        </p>
      ) : null}
      <div
        className={`text-[0.9375rem] leading-relaxed text-ink-soft ${title ? "mt-2" : ""} ${
          title && glyph ? "pl-[1.8125rem]" : ""
        }`}
      >
        {children}
      </div>
    </aside>
  );
}

/* --------------------------------------------------------------- buttons */

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "light";
  external?: boolean;
}) {
  const variants = {
    solid: "bg-brand-700 text-paper hover:bg-brand-800",
    outline: "border border-ink-line text-ink hover:border-brand-600 hover:text-brand-700",
    ghost: "text-brand-700 underline decoration-brand-300 underline-offset-4 hover:decoration-brand-700",
    light: "bg-paper text-brand-800 hover:bg-brand-50",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]}`;
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ misc */

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "moss" | "amber";
}) {
  const tones = {
    neutral: "bg-ink/5 text-ink-mute",
    brand: "bg-brand-50 text-brand-700",
    moss: "bg-moss-50 text-moss-700",
    amber: "bg-[#FBF7EC] text-[#8A6310]",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.1em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function NextSteps({
  items,
}: {
  items: { label: string; href: string; blurb?: string; icon?: IconKey }[];
}) {
  return (
    <nav className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          className="group rounded-xl border border-ink-line bg-paper p-5 transition-colors hover:border-brand-200 hover:bg-brand-50/50"
        >
          {i.icon ? (
            <Icon name={i.icon} size={22} className="mb-3 text-brand-700" />
          ) : null}
          <p className="font-serif text-[1.25rem] leading-snug text-ink transition-colors group-hover:text-brand-800">
            {i.label}
          </p>
          {i.blurb ? (
            <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-mute">{i.blurb}</p>
          ) : null}
        </Link>
      ))}
    </nav>
  );
}
