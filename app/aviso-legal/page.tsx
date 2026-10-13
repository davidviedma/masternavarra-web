import { LegalPage } from "@/components/legal-page"
import { SITE_URL, company } from "@/lib/site"

export const metadata = {
  title: "Aviso legal · Master Navarra de Consulting",
  description: `Aviso legal del sitio web de ${company.legalName}.`,
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
}

const domain = SITE_URL.replace("https://", "")

export default function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      updated="octubre de 2026"
      intro={
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
          informa de los datos del titular del sitio web{" "}
          <a href={SITE_URL} className="text-brand-accent hover:underline">
            {domain}
          </a>
          .
        </p>
      }
      sections={[
        {
          title: "Titular del sitio web",
          body: (
            <ul>
              <li>
                <strong>Denominación social:</strong> {company.legalName}
              </li>
              <li>
                <strong>CIF:</strong> {company.cif}
              </li>
              <li>
                <strong>Domicilio:</strong> {company.street},{" "}
                {company.postalCode} {company.city} ({company.region})
              </li>
              <li>
                <strong>Teléfono:</strong> {company.phone}
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <strong>Datos registrales:</strong> {company.registry}
              </li>
            </ul>
          ),
        },
        {
          title: "Objeto y condiciones de uso",
          body: (
            <>
              <p>
                Este sitio web tiene por objeto informar sobre los servicios de
                asesoría, consultoría y auditoría que presta {company.legalName}{" "}
                (en adelante, «la Empresa»). El acceso y la navegación atribuyen
                la condición de usuario e implican la aceptación de este aviso
                legal.
              </p>
              <p>
                La información publicada tiene carácter general y no constituye
                asesoramiento profesional para un caso concreto. El acceso a la
                web no supone, en modo alguno, el inicio de una relación
                profesional con la Empresa.
              </p>
              <p>
                La Empresa se reserva el derecho a modificar, en cualquier
                momento y sin previo aviso, los contenidos de la web y su
                presentación.
              </p>
            </>
          ),
        },
        {
          title: "Propiedad intelectual e industrial",
          body: (
            <p>
              Los contenidos de este sitio web, su diseño gráfico, logotipos y
              código fuente son titularidad de la Empresa o de terceros que han
              autorizado su uso, y están protegidos por la normativa de
              propiedad intelectual e industrial. Queda prohibida su
              reproducción, distribución o transformación sin autorización
              expresa y por escrito.
            </p>
          ),
        },
        {
          title: "Enlaces",
          body: (
            <p>
              Los enlaces a sitios de terceros se incluyen con finalidad
              meramente informativa. La Empresa no se responsabiliza de sus
              contenidos ni de sus políticas de privacidad.
            </p>
          ),
        },
        {
          title: "Responsabilidad",
          body: (
            <p>
              La Empresa no se hace responsable de los daños que pudieran
              derivarse de interrupciones del servicio, errores en los
              contenidos o de la presencia de elementos dañinos introducidos por
              terceros ajenos a la Empresa.
            </p>
          ),
        },
        {
          title: "Legislación y jurisdicción",
          body: (
            <p>
              Las relaciones entre la Empresa y los usuarios de este sitio web
              se rigen por la legislación española. Para cualquier controversia,
              las partes se someten a los juzgados y tribunales de Pamplona,
              salvo que la normativa aplicable disponga otra cosa.
            </p>
          ),
        },
      ]}
    />
  )
}
