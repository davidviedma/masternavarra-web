"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Call02Icon,
  Location01Icon,
  Mail01Icon,
  SentIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { areas, company, mailtoLink } from "@/lib/site"

const channels: {
  icon: IconSvgElement
  label: string
  value: string
  href: string
  external?: boolean
}[] = [
  {
    icon: Call02Icon,
    label: "Teléfono",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: Mail01Icon,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Location01Icon,
    label: "Oficina",
    value: `${company.street} · ${company.postalCode} ${company.city}`,
    href: company.mapsUrl,
    external: true,
  },
]

const fieldClass =
  "w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors outline-none focus:border-brand-accent focus:ring-3 focus:ring-brand-accent/20"

function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? "").trim()

    const area = get("area") || "Consulta general"
    const lines = [`Nombre: ${get("nombre")}`]
    if (get("empresa")) lines.push(`Empresa: ${get("empresa")}`)
    lines.push(`Email: ${get("email")}`)
    if (get("telefono")) lines.push(`Teléfono: ${get("telefono")}`)
    lines.push(`Área: ${area}`, "", get("mensaje"))
    const body = lines.join("\n")

    window.location.href = mailtoLink(
      `Consulta web · ${area} · ${get("nombre")}`,
      body
    )
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
          Nombre *
          <input
            name="nombre"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
          Empresa
          <input
            name="empresa"
            autoComplete="organization"
            placeholder="Opcional"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
          Email *
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
          Teléfono
          <input
            type="tel"
            name="telefono"
            autoComplete="tel"
            placeholder="Opcional"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
        ¿En qué podemos ayudarte?
        <select name="area" defaultValue="" className={fieldClass}>
          <option value="">Selecciona un área</option>
          {areas.map((area) => (
            <option key={area.slug} value={area.name}>
              {area.name} · {area.kicker}
            </option>
          ))}
          <option value="Otra consulta">Otra consulta</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
        Mensaje *
        <textarea
          name="mensaje"
          required
          rows={5}
          placeholder="Cuéntanos brevemente tu caso"
          className={`${fieldClass} resize-y`}
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-zinc-400">
        <input
          type="checkbox"
          name="privacidad"
          required
          className="mt-0.5 size-4 shrink-0 accent-brand-primary"
        />
        <span>
          He leído y acepto la{" "}
          <Link
            href="/politica-de-privacidad"
            className="text-brand-accent underline-offset-4 hover:underline"
          >
            política de privacidad
          </Link>
          .
        </span>
      </label>

      <Button
        type="submit"
        variant="secondary"
        size="xl"
        className="mt-2 w-full sm:w-fit"
      >
        <HugeiconsIcon icon={SentIcon} size={20} />
        Enviar consulta
      </Button>

      <p className="text-xs text-zinc-500" aria-live="polite">
        {sent
          ? `Hemos abierto tu aplicación de correo con el mensaje preparado. Si no se ha abierto, escríbenos directamente a ${company.email}.`
          : "Al enviar se abrirá tu aplicación de correo con el mensaje ya redactado."}
      </p>
    </form>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="bg-zinc-950 py-16 lg:py-24">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold tracking-widest text-brand-accent uppercase">
                Contacto
              </p>
              <h2 className="text-4xl leading-tight font-bold text-white md:text-5xl">
                Hablemos de{" "}
                <span className="text-brand-accent">tu empresa</span>.
              </h2>
              <p className="max-w-lg leading-relaxed text-zinc-400">
                Cuéntanos qué necesitas y te propondremos una reunión en nuestro
                despacho. También puedes llamarnos o escribirnos directamente.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {channels.map(({ icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-colors duration-300 hover:border-brand-accent"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-accent">
                      <HugeiconsIcon icon={icon} size={22} />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                        {label}
                      </span>
                      <span className="font-semibold break-words text-white">
                        {value}
                      </span>
                    </span>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={18}
                      className="ml-auto shrink-0 text-zinc-600 transition-colors duration-300 group-hover:text-brand-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>

        <MapEmbed />
      </div>
    </section>
  )
}

/** El mapa de Google solo se carga cuando el usuario lo pide (sin cookies de terceros por defecto). */
function MapEmbed() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative mt-12 h-72 w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
      {loaded ? (
        <iframe
          src={company.mapsEmbedUrl}
          title={`Ubicación de ${company.name} – ${company.street}, ${company.city}`}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center"
          style={{
            backgroundImage:
              "radial-gradient(circle, #27272a 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-[0_10px_30px_-8px_rgba(47,91,181,0.8)]">
            <HugeiconsIcon icon={Location01Icon} size={26} />
          </span>
          <p className="font-semibold text-white">
            {company.street} · {company.postalCode} {company.city}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" onClick={() => setLoaded(true)}>
              Cargar mapa
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir en Google Maps
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </a>
            </Button>
          </div>
          <p className="max-w-md text-xs text-zinc-500">
            Al cargar el mapa, Google puede instalar cookies. Más información en
            nuestra{" "}
            <Link
              href="/politica-de-cookies"
              className="text-brand-accent hover:underline"
            >
              política de cookies
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  )
}
