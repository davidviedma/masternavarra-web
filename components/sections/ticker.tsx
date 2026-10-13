"use client"

import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  Agreement01Icon,
  Analytics01Icon,
  Building06Icon,
  Calculator01Icon,
  CourtLawIcon,
  Idea01Icon,
  JusticeScale01Icon,
  LegalDocument01Icon,
  SearchList01Icon,
  TaxesIcon,
  UserGroupIcon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons"
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop"

const items: { label: string; icon: IconSvgElement }[] = [
  { label: "Contabilidad", icon: Calculator01Icon },
  { label: "Impuestos", icon: TaxesIcon },
  { label: "Nóminas y Seguridad Social", icon: UserGroupIcon },
  { label: "Auditoría de cuentas", icon: SearchList01Icon },
  { label: "Mercantil y societario", icon: Agreement01Icon },
  { label: "Asesoría jurídica", icon: JusticeScale01Icon },
  { label: "Due diligence", icon: LegalDocument01Icon },
  { label: "Valoración de empresas", icon: Analytics01Icon },
  { label: "Subvenciones e I+D+i", icon: Idea01Icon },
  { label: "Procedimientos concursales", icon: CourtLawIcon },
  { label: "Planificación financiera", icon: Wallet01Icon },
  { label: "Administración de fincas", icon: Building06Icon },
]

const logos: LogoItem[] = items.map(({ label, icon }) => ({
  title: label,
  node: (
    <span className="flex items-center gap-3 text-lg font-semibold whitespace-nowrap text-zinc-300">
      <HugeiconsIcon icon={icon} size={22} className="text-brand-accent" />
      {label}
    </span>
  ),
}))

export function Ticker() {
  return (
    <section className="border-y border-zinc-800/60 bg-zinc-900 py-12">
      <p className="mb-8 px-6 text-center text-sm font-semibold tracking-widest text-zinc-400 uppercase">
        Todo lo que tu empresa necesita,{" "}
        <span className="text-white">en un solo despacho</span>
      </p>
      <LogoLoop
        logos={logos}
        speed={60}
        direction="left"
        logoHeight={28}
        gap={56}
        pauseOnHover
        fadeOut
        fadeOutColor="#18181b"
        ariaLabel="Servicios de Master Navarra de Consulting"
      />
    </section>
  )
}
