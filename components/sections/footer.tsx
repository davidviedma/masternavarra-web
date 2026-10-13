import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon } from "@hugeicons/core-free-icons"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { AUDIT_SINCE, areas, company } from "@/lib/site"

const navLinks = [
  { label: "La firma", href: "/#la-firma" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Preguntas frecuentes", href: "/#faqs" },
  { label: "Contacto", href: "/#contacto" },
]

const areaLinks = areas.map(({ name, slug }) => ({
  label: name,
  href: `/${slug}`,
}))

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
]

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm font-semibold tracking-widest text-brand-accent uppercase">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950">
      <div className="container mx-auto px-6 py-16 sm:px-12 lg:px-24">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 xl:grid-cols-[1.5fr_1fr_1fr_1.3fr] xl:gap-12">
          {/* Marca */}
          <div className="col-span-2 flex flex-col gap-5 xl:col-span-1">
            <Link
              href="/"
              aria-label={`${company.name} — Inicio`}
              className="w-fit"
            >
              <Logo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Despacho profesional de economistas, asesores fiscales y abogados
              en Pamplona. Auditores de cuentas desde {AUDIT_SINCE}.
            </p>
          </div>

          <LinkColumn title="Áreas" links={areaLinks} />
          <LinkColumn title="Navegación" links={navLinks} />

          {/* Contacto */}
          <div className="col-span-2 flex flex-col gap-5 xl:col-span-1">
            <p className="text-sm font-semibold tracking-widest text-brand-accent uppercase">
              Contacto
            </p>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li>
                <a
                  href={company.phoneHref}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li className="leading-snug">
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  {company.street}
                  <br />
                  {company.postalCode} {company.city} ({company.region})
                </a>
              </li>
              <li className="pt-1">
                <Button asChild size="sm">
                  <Link href="/#contacto">
                    Pedir una reunión
                    <HugeiconsIcon icon={Calendar03Icon} size={15} />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800/60 pt-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-zinc-500 transition-colors duration-200 hover:text-zinc-300"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} {company.legalName} Todos los
              derechos reservados.
            </p>
            <p className="text-xs text-zinc-600">
              Auditoría · Consultoría · Asesoría · Pamplona, Navarra
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
