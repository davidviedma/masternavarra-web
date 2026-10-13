"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Call02Icon,
  Calendar03Icon,
  CheckmarkCircle02Icon,
  MouseScroll02Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import DotGrid from "@/components/reactbits/DotGrid"
import RotatingText from "@/components/reactbits/RotatingText"
import ShinyText from "@/components/reactbits/ShinyText"
import { HeroStack } from "@/components/sections/hero-stack"
import { AUDIT_SINCE, company } from "@/lib/site"

const rotating = [
  "contabilidad",
  "fiscalidad",
  "nóminas",
  "auditoría",
  "asesoría legal",
]

const checks = [
  "Economistas, asesores fiscales y abogados",
  "Un único interlocutor",
  "Despacho en Pamplona",
]

export function Hero() {
  return (
    <section className="relative flex flex-1 flex-col overflow-hidden bg-zinc-950">
      {/* Fondo interactivo — React Bits DotGrid */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={21}
          baseColor="#27272a"
          activeColor="#6b93ec"
          proximity={160}
          glow={0.7}
          swell={1}
          fade={0.35}
          shockRadius={260}
          shockStrength={4}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative z-10 container mx-auto grid flex-1 grid-cols-1 items-center gap-12 px-6 pt-28 pb-12 sm:px-12 lg:grid-cols-[1.15fr_1fr] lg:px-24 lg:py-24">
        {/* Izquierda — texto */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-primary/10 px-4 py-1.5 text-sm font-medium">
              <span className="size-1.5 rounded-full bg-brand-accent" />
              <ShinyText
                text={`Auditores desde ${AUDIT_SINCE} · Pamplona`}
                color="#a9bff2"
                shineColor="#ffffff"
                speed={3}
                delay={1.5}
              />
            </span>

            <h1 className="text-4xl leading-[1.08] font-bold text-white sm:text-5xl 2xl:text-6xl">
              Asesoría, consultoría y auditoría{" "}
              <span className="text-brand-accent">en Pamplona</span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-2xl font-semibold text-zinc-300 md:text-3xl">
              <span>Nos ocupamos de tu</span>
              <RotatingText
                texts={rotating}
                mainClassName="overflow-hidden rounded-xl bg-brand-primary px-3 py-1 text-white md:py-1.5"
                splitLevelClassName="overflow-hidden pb-0.5"
                staggerFrom="last"
                staggerDuration={0.02}
                rotationInterval={2600}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
              Somos un despacho de economistas, asesores fiscales y abogados.
              Llevamos la gestión integral de autónomos, pymes y grupos de
              empresas en Navarra para que tú te dediques a tu negocio.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Button asChild size="xl">
              <Link href="/#contacto">
                <HugeiconsIcon icon={Calendar03Icon} size={20} />
                Pedir una reunión
              </Link>
            </Button>
            <Button asChild variant="secondary" size="xl">
              <a href={company.phoneHref}>
                <HugeiconsIcon icon={Call02Icon} size={20} />
                {company.phone}
              </a>
            </Button>
          </div>

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

        {/* Derecha — pila animada de "documentos" */}
        <HeroStack />
      </div>

      {/* Indicador de scroll */}
      <div className="relative z-10 flex flex-col items-center gap-1 pb-6 text-zinc-600">
        <span className="text-xs font-medium tracking-widest uppercase">
          Desliza
        </span>
        <HugeiconsIcon
          icon={MouseScroll02Icon}
          size={18}
          className="animate-bounce"
        />
      </div>
    </section>
  )
}
