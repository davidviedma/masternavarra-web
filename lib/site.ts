import type { Metadata } from "next"
import type { IconSvgElement } from "@hugeicons/react"
import {
  Building03Icon,
  ChartLineData02Icon,
  SearchList01Icon,
} from "@hugeicons/core-free-icons"

export const SITE_URL = "https://www.masternavarra.com"

export const AUDIT_SINCE = 1993

export const company = {
  name: "Master Navarra de Consulting",
  shortName: "Master Navarra",
  legalName: "Master Navarra de Consulting, S.L.",
  tagline: "Auditores · Consultores",
  // TODO: completar con el CIF y los datos registrales reales antes de publicar.
  cif: "[CIF pendiente]",
  registry:
    "[Datos de inscripción en el Registro Mercantil de Navarra pendientes]",
  phone: "948 27 26 85",
  phoneHref: "tel:+34948272685",
  email: "contacto@masternavarra.com",
  street: "Paseo García de Nájera, 4 - 1º C",
  postalCode: "31008",
  city: "Pamplona",
  region: "Navarra",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Paseo+Garc%C3%ADa+de+N%C3%A1jera+4%2C+31008+Pamplona",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Paseo%20Garc%C3%ADa%20de%20N%C3%A1jera%204%2C%2031008%20Pamplona&z=16&output=embed",
}

export function mailtoLink(subject: string, body?: string) {
  const params = new URLSearchParams({ subject })
  if (body) params.set("body", body)
  return `mailto:${company.email}?${params.toString().replace(/\+/g, "%20")}`
}

export type Area = {
  slug: string
  name: string
  kicker: string
  summary: string
  icon: IconSvgElement
}

/** Las tres áreas de la firma. Cada una tiene su propia página. */
export const areas: Area[] = [
  {
    slug: "despacho-profesional",
    name: "Despacho Profesional",
    kicker: "Asesoría y gestión integral",
    summary:
      "Contabilidad, impuestos, nóminas, mercantil y asesoría jurídica bajo un mismo techo en Pamplona.",
    icon: Building03Icon,
  },
  {
    slug: "consultoria",
    name: "Consultoría",
    kicker: "Fiscal, laboral y contable",
    summary:
      "Planificación fiscal, organización laboral y consultoría contable para decidir con datos.",
    icon: ChartLineData02Icon,
  },
  {
    slug: "auditoria",
    name: "Auditoría",
    kicker: "Revisión y verificación de cuentas",
    summary:
      "Auditoría de cuentas obligatoria y voluntaria, consolidadas, informes especiales y due diligence.",
    icon: SearchList01Icon,
  },
]

export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName: company.name,
      locale: "es_ES",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  }
}
