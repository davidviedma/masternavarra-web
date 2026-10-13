"use client"

import { useEffect, useState } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  Clock01Icon,
  SearchList01Icon,
  ShieldCheck as ShieldCheckIcon,
  TaxesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { AUDIT_SINCE } from "@/lib/site"
import { cn } from "@/lib/utils"

type Row = { label: string; status: string; done: boolean }

type Doc = {
  icon: IconSvgElement
  area: string
  title: string
  chip: string
  rows: Row[]
  footer: { title: string; text: string }
}

const docs: Doc[] = [
  {
    icon: SearchList01Icon,
    area: "Auditoría",
    title: "Informe de auditoría",
    chip: "Cuentas anuales",
    rows: [
      { label: "Planificación y riesgos", status: "Completado", done: true },
      { label: "Trabajo de campo", status: "Completado", done: true },
      { label: "Revisión de calidad", status: "Completado", done: true },
      { label: "Emisión del informe", status: "Emitido", done: true },
    ],
    footer: {
      title: "Conforme a NIA-ES",
      text: `Auditores de cuentas desde ${AUDIT_SINCE}`,
    },
  },
  {
    icon: TaxesIcon,
    area: "Fiscal",
    title: "Calendario fiscal",
    chip: "Hacienda Foral",
    rows: [
      { label: "IVA · 3er trimestre", status: "Presentado", done: true },
      { label: "Retenciones IRPF", status: "Presentado", done: true },
      { label: "Pagos fraccionados", status: "Presentado", done: true },
      {
        label: "Impuesto sobre Sociedades",
        status: "Planificado",
        done: false,
      },
    ],
    footer: {
      title: "Sin sustos con Hacienda",
      text: "Te avisamos antes de cada plazo",
    },
  },
  {
    icon: UserGroupIcon,
    area: "Laboral",
    title: "Nóminas y Seguridad Social",
    chip: "Cierre mensual",
    rows: [
      { label: "Nóminas del mes", status: "Emitidas", done: true },
      { label: "Seguros sociales", status: "Enviados", done: true },
      { label: "Altas y bajas", status: "Al día", done: true },
      { label: "Contratos", status: "Revisados", done: true },
    ],
    footer: {
      title: "Plantilla al día",
      text: "Un único interlocutor para tu empresa",
    },
  },
]

// transform + opacity por posición en la pila (delante → detrás)
const positions = [
  "z-30 rotate-0 translate-x-0 translate-y-0 scale-100 brightness-100",
  "z-20 rotate-[5deg] translate-x-[64px] translate-y-[44px] scale-[0.92] brightness-[0.6]",
  "z-10 rotate-[-6deg] -translate-x-[56px] -translate-y-[40px] scale-[0.84] brightness-[0.4]",
]

function DocCard({ doc, front }: { doc: Doc; front: boolean }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col gap-5 rounded-3xl border bg-zinc-900 p-7",
        "shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]",
        front ? "border-zinc-700/80" : "border-zinc-800"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-accent">
            <HugeiconsIcon icon={doc.icon} size={22} />
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-brand-accent uppercase">
              {doc.area}
            </span>
            <span className="text-lg font-bold text-white">{doc.title}</span>
          </div>
        </div>
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs whitespace-nowrap text-zinc-300">
          {doc.chip}
        </span>
      </div>

      <ul className="flex flex-col divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-950/60">
        {doc.rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-3 px-4 py-3"
          >
            <span className="text-sm text-zinc-300">{row.label}</span>
            <span
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium",
                row.done ? "text-emerald-400" : "text-brand-accent"
              )}
            >
              <HugeiconsIcon
                icon={row.done ? CheckmarkCircle02Icon : Clock01Icon}
                size={15}
              />
              {row.status}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-3 rounded-2xl bg-brand-primary/10 px-4 py-3">
        <HugeiconsIcon
          icon={ShieldCheckIcon}
          size={22}
          className="shrink-0 text-brand-accent"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">
            {doc.footer.title}
          </span>
          <span className="text-xs text-zinc-400">{doc.footer.text}</span>
        </div>
      </div>
    </div>
  )
}

export function HeroStack() {
  const [order, setOrder] = useState([0, 1, 2])

  function cycle() {
    setOrder((prev) => {
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(cycle, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative hidden h-[560px] items-center justify-center lg:flex"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,91,181,0.35),transparent_60%)] blur-2xl" />
      {order.map((docIdx, stackPos) => (
        <div
          key={docIdx}
          onClick={stackPos === 0 ? cycle : undefined}
          className={cn(
            "absolute h-[400px] w-full max-w-[440px] transition-all duration-[1400ms] ease-in-out",
            positions[stackPos],
            stackPos === 0 && "cursor-pointer"
          )}
        >
          <DocCard doc={docs[docIdx]} front={stackPos === 0} />
        </div>
      ))}
    </div>
  )
}
