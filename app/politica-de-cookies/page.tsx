import { LegalPage } from "@/components/legal-page"
import { company } from "@/lib/site"

export const metadata = {
  title: "Política de cookies · Master Navarra de Consulting",
  description: `Política de cookies del sitio web de ${company.legalName}.`,
  alternates: { canonical: "/politica-de-cookies" },
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      updated="octubre de 2026"
      intro={
        <p>
          Una cookie es un pequeño archivo que un sitio web guarda en tu
          navegador. Aquí te explicamos qué cookies utiliza este sitio web.
        </p>
      }
      sections={[
        {
          title: "Cookies propias",
          body: (
            <p>
              Este sitio web no utiliza cookies propias de análisis, publicidad
              ni seguimiento. Solo pueden utilizarse elementos técnicos
              estrictamente necesarios para que la página funcione
              correctamente, que no requieren consentimiento.
            </p>
          ),
        },
        {
          title: "Cookies de terceros: Google Maps",
          body: (
            <>
              <p>
                En la sección de contacto puedes cargar un mapa de Google Maps
                con nuestra ubicación. El mapa no se carga hasta que pulsas el
                botón «Cargar mapa». A partir de ese momento, Google puede
                instalar sus propias cookies, de las que es responsable.
              </p>
              <p>
                Puedes consultar cómo utiliza Google la información en su{" "}
                <a
                  href="https://policies.google.com/privacy?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  política de privacidad
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "Cómo gestionar las cookies",
          body: (
            <p>
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu
              equipo desde la configuración de tu navegador (Chrome, Firefox,
              Safari, Edge…). Si bloqueas todas las cookies, algunos servicios
              de terceros, como el mapa, podrían no funcionar.
            </p>
          ),
        },
        {
          title: "Contacto",
          body: (
            <p>
              Si tienes cualquier duda sobre esta política, escríbenos a{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          ),
        },
      ]}
    />
  )
}
