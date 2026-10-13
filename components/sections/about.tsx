"use client"

import Image from "next/image"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  Award01Icon,
  Calendar03Icon,
  Layers01Icon,
  UserCheck01Icon,
} from "@hugeicons/core-free-icons"
import CountUp from "@/components/reactbits/CountUp"
import { AUDIT_SINCE, company } from "@/lib/site"

const yearsOfExperience =
  Math.floor((new Date().getFullYear() - AUDIT_SINCE) / 5) * 5

const stats: {
  icon: IconSvgElement
  from: number
  to: number
  prefix?: string
  label: string
}[] = [
  {
    icon: Calendar03Icon,
    from: 1970,
    to: AUDIT_SINCE,
    label: "Año desde el que auditamos cuentas",
  },
  {
    icon: Award01Icon,
    from: 0,
    to: yearsOfExperience,
    prefix: "+",
    label: "Años de experiencia en Navarra",
  },
  {
    icon: Layers01Icon,
    from: 0,
    to: 3,
    label: "Áreas: despacho, consultoría y auditoría",
  },
  {
    icon: UserCheck01Icon,
    from: 0,
    to: 1,
    label: "Interlocutor único para tu empresa",
  },
]

export function About() {
  return (
    <section id="la-firma" className="bg-zinc-950 py-16 lg:py-24">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="mb-14 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-400">
            <p className="text-sm font-semibold tracking-widest text-brand-accent uppercase">
              La firma
            </p>
            <h2 className="text-4xl leading-tight font-bold text-white md:text-5xl">
              Más de tres décadas{" "}
              <span className="text-brand-accent">al lado de las empresas</span>
              .
            </h2>
            <p>
              <span className="font-medium text-white">
                {company.legalName}
              </span>{" "}
              es un despacho profesional de Pamplona formado por{" "}
              <span className="font-medium text-white">
                economistas, asesores fiscales y abogados
              </span>
              . Ofrecemos consultoría, asesoría y gestión integral a empresas,
              autónomos y particulares.
            </p>
            <p>
              Somos{" "}
              <span className="font-medium text-white">
                auditores de cuentas desde {AUDIT_SINCE}
              </span>
              . Esa mirada de auditor, rigurosa e independiente, es la que
              aplicamos también cuando llevamos tu contabilidad, tus impuestos o
              tus nóminas: hacer las cosas bien a la primera y anticiparnos a
              los problemas.
            </p>
            <p>
              Trabajamos desde nuestra oficina en el{" "}
              <span className="font-medium text-white">
                Paseo García de Nájera, en pleno centro de Pamplona
              </span>
              , con trato directo y cercano: aquí siempre sabes quién lleva tu
              empresa.
            </p>
          </div>

          {/* Membrete original */}
          <div className="relative flex items-center justify-center py-6">
            <div className="absolute inset-0 scale-105 -rotate-3 rounded-3xl bg-zinc-800/60" />
            <figure className="relative w-full rotate-1 rounded-2xl bg-white p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:rotate-0 sm:p-10">
              <Image
                src="/membrete.png"
                alt="Membrete de Master Navarra de Consulting S.L., Auditores - Consultores, Paseo García de Nájera 4, Pamplona"
                width={808}
                height={184}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="mt-6 border-t border-zinc-200 pt-4 text-sm text-zinc-500">
                Nuestra imagen de siempre: la misma firma, la misma dirección y
                el mismo compromiso con cada cliente.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Cifras — React Bits CountUp */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ icon, from, to, prefix, label }) => (
            <div
              key={label}
              className="group flex flex-col gap-2 rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-colors duration-300 hover:border-brand-accent"
            >
              <div className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={icon}
                  size={20}
                  className="text-brand-accent"
                />
                <p className="font-condensed text-3xl font-bold text-white">
                  {prefix}
                  <CountUp from={from} to={to} duration={1.6} />
                </p>
              </div>
              <p className="text-sm leading-snug text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
