import Link from "next/link"
import type { ReactNode } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Calendar03Icon,
  Call02Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import { SITE_URL, areas, company } from "@/lib/site"
import { cn } from "@/lib/utils"

export type Faq = { question: string; answer: string }
export type Feature = { icon: IconSvgElement; title: string; text: string }

export function Section({
  children,
  tone = "dark",
  id,
  className,
}: {
  children: ReactNode
  tone?: "dark" | "darker"
  id?: string
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        tone === "dark" ? "bg-zinc-900" : "bg-zinc-950",
        "py-16 lg:py-24",
        className
      )}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">{children}</div>
    </section>
  )
}

export function SectionHeading({
  label,
  title,
  highlight,
  intro,
  className,
}: {
  label: string
  title: string
  highlight: string
  intro?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mb-12 flex max-w-3xl flex-col gap-3", className)}>
      <p className="text-sm font-semibold tracking-widest text-brand-accent uppercase">
        {label}
      </p>
      <h2 className="text-4xl leading-tight font-bold text-white md:text-5xl">
        {title} <span className="text-brand-accent">{highlight}</span>.
      </h2>
      {intro && <p className="leading-relaxed text-zinc-400">{intro}</p>}
    </div>
  )
}

const cardSurface = {
  "--spotlight-card-surface": "#09090b",
  "--spotlight-card-border": "rgba(255,255,255,0.08)",
} as React.CSSProperties

const cardSurfaceLight = {
  "--spotlight-card-surface": "#18181b",
  "--spotlight-card-border": "rgba(255,255,255,0.07)",
} as React.CSSProperties

export function FeatureGrid({
  items,
  columns = 4,
  surface = "darker",
}: {
  items: Feature[]
  columns?: 3 | 4
  surface?: "dark" | "darker"
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      )}
    >
      {items.map(({ icon, title, text }) => (
        <SpotlightCard
          key={title}
          spotlightColor="#6b93ec"
          intensity={0.16}
          spotlightSize={260}
          style={surface === "darker" ? cardSurface : cardSurfaceLight}
          className="flex flex-col gap-4 p-6"
        >
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-accent">
            <HugeiconsIcon icon={icon} size={24} />
          </span>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
        </SpotlightCard>
      ))}
    </div>
  )
}

export type Pillar = Feature & { items: string[] }

export function PillarGrid({ pillars }: { pillars: Pillar[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {pillars.map(({ icon, title, text, items }) => (
        <SpotlightCard
          key={title}
          spotlightColor="#6b93ec"
          intensity={0.16}
          spotlightSize={320}
          style={cardSurface}
          className="flex flex-col gap-5 p-8"
        >
          <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-accent">
            <HugeiconsIcon icon={icon} size={28} />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
          </div>
          <ul className="flex flex-col gap-2.5 border-t border-zinc-800 pt-5">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={16}
                  className="mt-0.5 shrink-0 text-brand-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        </SpotlightCard>
      ))}
    </div>
  )
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map(({ title, text }, i) => (
        <li key={title} className="group relative flex flex-col gap-3 p-6">
          <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-zinc-700 transition-colors duration-300 group-hover:border-brand-accent" />
          <span className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-zinc-700 transition-colors duration-300 group-hover:border-brand-accent" />
          <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-zinc-700 transition-colors duration-300 group-hover:border-brand-accent" />
          <span className="absolute right-0 bottom-0 h-6 w-6 border-r-2 border-b-2 border-zinc-700 transition-colors duration-300 group-hover:border-brand-accent" />
          <span className="font-condensed text-5xl leading-none font-bold text-brand-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
        </li>
      ))}
    </ol>
  )
}

export function Callout({
  icon,
  title,
  children,
}: {
  icon: IconSvgElement
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-brand-accent/30 bg-brand-primary/10 p-6 sm:flex-row sm:items-start">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
        <HugeiconsIcon icon={icon} size={24} />
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold text-white">{title}</p>
        <div className="leading-relaxed text-zinc-300">{children}</div>
      </div>
    </div>
  )
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex max-w-3xl flex-col gap-3">
      {faqs.map(({ question, answer }) => (
        <details
          key={question}
          className="group rounded-2xl border border-zinc-800 bg-zinc-950 open:border-zinc-700"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-base font-semibold text-white md:text-lg">
              {question}
            </span>
            <span className="shrink-0 text-2xl leading-none font-light text-white transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-zinc-400">{answer}</p>
        </details>
      ))}
    </div>
  )
}

export function CtaButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="xl">
        <Link href="/#contacto">
          <HugeiconsIcon icon={Calendar03Icon} size={20} />
          Pedir una reunión
        </Link>
      </Button>
      <Button
        asChild
        size="xl"
        className={
          light
            ? "bg-zinc-950 text-white hover:bg-zinc-900"
            : "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover"
        }
      >
        <a href={company.phoneHref}>
          <HugeiconsIcon icon={Call02Icon} size={20} />
          {company.phone}
        </a>
      </Button>
    </div>
  )
}

export function LandingHero({
  label,
  title,
  highlight,
  subtitle,
  checks,
  aside,
}: {
  label: string
  title: string
  highlight: string
  subtitle: string
  checks: string[]
  aside: ReactNode
}) {
  return (
    <section
      className="relative overflow-hidden bg-zinc-950"
      style={{
        backgroundImage:
          "radial-gradient(circle, #27272a 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[720px] bg-[radial-gradient(circle_at_center,rgba(47,91,181,0.28),transparent_65%)]" />
      <div className="relative container mx-auto grid grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 sm:px-12 lg:grid-cols-2 lg:px-24 lg:pt-40 lg:pb-24">
        <div className="flex flex-col gap-6">
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-2 text-sm text-zinc-500"
          >
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-zinc-300"
            >
              Inicio
            </Link>
            <span aria-hidden>/</span>
            <span className="text-zinc-300">{label}</span>
          </nav>
          <h1 className="text-4xl leading-tight font-bold text-white md:text-6xl">
            {title} <span className="text-brand-accent">{highlight}</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            {subtitle}
          </p>
          <CtaButtons />
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {checks.map((check) => (
              <li
                key={check}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={18}
                  className="text-brand-accent"
                />
                {check}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">{aside}</div>
      </div>
    </section>
  )
}

/** Panel lateral del hero de cada área: lista de servicios con un número grande. */
export function HeroPanel({
  big,
  bigLabel,
  items,
}: {
  big: string
  bigLabel: string
  items: string[]
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 scale-105 -rotate-3 rounded-3xl bg-zinc-800/50" />
      <div className="relative flex flex-col gap-8 rounded-3xl border border-zinc-700/60 bg-zinc-900 p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] lg:p-10">
        <div className="flex items-end gap-4">
          <span className="font-condensed text-7xl leading-none font-bold text-brand-accent md:text-8xl">
            {big}
          </span>
          <span className="pb-2 text-lg leading-tight font-semibold text-white">
            {bigLabel}
          </span>
        </div>
        <ul className="flex flex-col divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-950/60">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between gap-3 px-5 py-3.5 text-sm text-zinc-300"
            >
              {item}
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                size={16}
                className="shrink-0 text-brand-accent"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function FinalCta({
  title,
  text,
  currentSlug,
}: {
  title: string
  text: string
  currentSlug: string
}) {
  const otherAreas = areas.filter((area) => area.slug !== currentSlug)

  return (
    <Section tone="dark">
      <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-brand-primary px-8 py-12 md:px-16 md:py-16">
        <div className="pointer-events-none absolute -right-20 -bottom-24 size-96 rounded-full bg-white/10 blur-3xl" />
        <h2 className="relative max-w-3xl text-3xl leading-tight font-bold text-white md:text-5xl">
          {title}
        </h2>
        <p className="relative max-w-2xl text-lg leading-relaxed text-white/85">
          {text}
        </p>
        <div className="relative">
          <CtaButtons light />
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-6">
        <p className="text-sm font-semibold tracking-widest text-brand-accent uppercase">
          Otras áreas
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {otherAreas.map(({ slug, name, summary, icon }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-colors duration-300 hover:border-brand-accent"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-accent">
                <HugeiconsIcon icon={icon} size={24} />
              </span>
              <span className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-brand-accent">
                  {name}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                <span className="text-sm leading-relaxed text-zinc-400">
                  {summary}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function ServiceJsonLd({
  slug,
  name,
  description,
  faqs,
}: {
  slug: string
  name: string
  description: string
  faqs: Faq[]
}) {
  const url = `${SITE_URL}/${slug}`
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType: name,
        description,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "AdministrativeArea", name: "Navarra" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  )
}
