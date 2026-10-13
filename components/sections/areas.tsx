import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import { AUDIT_SINCE, areas } from "@/lib/site"
import { cn } from "@/lib/utils"

const highlights: Record<string, string[]> = {
  "despacho-profesional": [
    "Contabilidad y cuentas anuales",
    "Impuestos y Hacienda Foral",
    "Nóminas y Seguridad Social",
    "Mercantil y asesoría jurídica",
  ],
  consultoria: [
    "Planificación fiscal",
    "Organización laboral y RR. HH.",
    "Consultoría contable y financiera",
    "Valoración de empresas",
  ],
  auditoria: [
    "Auditoría obligatoria y voluntaria",
    "Cuentas consolidadas",
    "Informes especiales y periciales",
    "Due diligence y auditoría interna",
  ],
}

const spotlightStyle = {
  "--spotlight-card-surface": "#18181b",
  "--spotlight-card-border": "rgba(255,255,255,0.07)",
} as React.CSSProperties

function AreaCard({ slug, large = false }: { slug: string; large?: boolean }) {
  const area = areas.find((a) => a.slug === slug)!

  return (
    <SpotlightCard
      spotlightColor="#6b93ec"
      intensity={0.18}
      spotlightSize={large ? 420 : 300}
      style={spotlightStyle}
      className={cn(
        "group flex h-full flex-col gap-6 p-8 lg:p-10",
        large && "md:row-span-2"
      )}
    >
      <span className="relative flex size-14 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-accent">
        <HugeiconsIcon icon={area.icon} size={28} />
      </span>

      {large && (
        <div
          aria-hidden
          className="relative my-auto flex flex-col py-4 select-none"
        >
          <span className="mb-3 text-sm tracking-[0.3em] text-zinc-500 uppercase">
            Auditores de cuentas desde
          </span>
          <span className="font-condensed text-[7rem] leading-[0.85] font-bold text-transparent [-webkit-text-stroke:1.5px_rgba(107,147,236,0.55)] sm:text-[9rem] lg:text-[11rem]">
            {AUDIT_SINCE}
          </span>
        </div>
      )}

      <div className="relative flex flex-col gap-2">
        <p className="text-sm font-semibold tracking-widest text-brand-accent uppercase">
          {area.kicker}
        </p>
        <h3
          className={cn(
            "font-bold text-white",
            large ? "text-3xl lg:text-4xl" : "text-2xl"
          )}
        >
          {area.name}
        </h3>
        <p className="leading-relaxed text-zinc-400">{area.summary}</p>
      </div>

      <ul className={cn("relative grid gap-2", "grid-cols-1 sm:grid-cols-2")}>
        {highlights[slug].map((item) => (
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

      <Link
        href={`/${slug}`}
        className="relative mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 group-hover:border-brand-primary group-hover:bg-brand-primary hover:bg-brand-primary-hover"
      >
        Conocer {area.name.toLowerCase()}
        <HugeiconsIcon
          icon={ArrowRight01Icon}
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </SpotlightCard>
  )
}

export function Areas() {
  return (
    <section id="areas" className="bg-zinc-950 py-16 lg:py-24">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="mb-14 flex flex-col gap-3 lg:max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-brand-accent uppercase">
            Nuestras áreas
          </p>
          <h2 className="text-4xl leading-tight font-bold text-white md:text-5xl">
            Tres áreas,{" "}
            <span className="text-brand-accent">un mismo equipo</span>.
          </h2>
          <p className="max-w-2xl leading-relaxed text-zinc-400">
            Desde la gestión del día a día hasta la auditoría de tus cuentas:
            trabajamos coordinados para que tengas una visión completa de tu
            empresa y una sola persona de referencia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AreaCard slug="auditoria" large />
          <AreaCard slug="despacho-profesional" />
          <AreaCard slug="consultoria" />
        </div>
      </div>
    </section>
  )
}
