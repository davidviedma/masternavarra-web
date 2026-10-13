import { Inter, Roboto_Condensed } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { SITE_URL, company } from "@/lib/site"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-condensed",
})

const title =
  "Master Navarra de Consulting – Asesoría, Consultoría y Auditoría en Pamplona"
const description =
  "Despacho de economistas, asesores fiscales y abogados en Pamplona. Contabilidad, impuestos, nóminas, asesoría jurídica, consultoría y auditoría de cuentas desde 1993. Llama al 948 27 26 85."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "asesoría Pamplona",
    "gestoría Pamplona",
    "auditoría de cuentas Navarra",
    "auditores Pamplona",
    "asesoría fiscal Navarra",
    "asesoría laboral Pamplona",
    "contabilidad empresas Pamplona",
    "consultoría empresas Navarra",
    "Master Navarra de Consulting",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: company.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Master Navarra de Consulting – Auditores y consultores en Pamplona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#09090b",
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["AccountingService", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: company.legalName,
  alternateName: company.name,
  description:
    "Despacho profesional de economistas, asesores fiscales y abogados en Pamplona. Asesoría contable, fiscal, laboral y jurídica, consultoría y auditoría de cuentas desde 1993.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark.svg`,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+34948272685",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Paseo García de Nájera, 4, 1º C",
    addressLocality: company.city,
    postalCode: company.postalCode,
    addressRegion: company.region,
    addressCountry: "ES",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Navarra" },
  knowsAbout: [
    "Auditoría de cuentas",
    "Asesoría fiscal",
    "Asesoría laboral",
    "Contabilidad",
    "Derecho mercantil",
    "Consultoría empresarial",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "antialiased",
        "font-sans",
        inter.variable,
        condensed.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
