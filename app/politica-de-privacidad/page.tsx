import { LegalPage } from "@/components/legal-page"
import { company } from "@/lib/site"

export const metadata = {
  title: "Política de privacidad · Master Navarra de Consulting",
  description: `Política de privacidad y protección de datos de ${company.legalName}.`,
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: false, follow: true },
}

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      updated="octubre de 2026"
      intro={
        <p>
          Esta política explica cómo tratamos los datos personales que nos
          facilitas a través de este sitio web, de acuerdo con el Reglamento
          (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos
          Personales y garantía de los derechos digitales (LOPDGDD).
        </p>
      }
      sections={[
        {
          title: "Responsable del tratamiento",
          body: (
            <ul>
              <li>
                <strong>Responsable:</strong> {company.legalName}
              </li>
              <li>
                <strong>CIF:</strong> {company.cif}
              </li>
              <li>
                <strong>Dirección:</strong> {company.street},{" "}
                {company.postalCode} {company.city} ({company.region})
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <strong>Teléfono:</strong> {company.phone}
              </li>
            </ul>
          ),
        },
        {
          title: "Qué datos tratamos y para qué",
          body: (
            <>
              <p>
                Tratamos los datos que nos facilitas cuando nos escribes por
                email (también a través del formulario de contacto, que prepara
                un correo en tu propia aplicación de correo) o cuando nos llamas
                por teléfono: nombre, empresa, email, teléfono y el contenido de
                tu consulta.
              </p>
              <p>
                La finalidad es atender tu consulta, ponernos en contacto
                contigo y, en su caso, preparar una propuesta de servicios.
              </p>
            </>
          ),
        },
        {
          title: "Base jurídica",
          body: (
            <p>
              El tratamiento se basa en tu consentimiento al contactar con
              nosotros y, cuando solicitas una propuesta, en la aplicación de
              medidas precontractuales a petición tuya (art. 6.1.a y 6.1.b
              RGPD).
            </p>
          ),
        },
        {
          title: "Conservación",
          body: (
            <p>
              Conservaremos tus datos el tiempo necesario para atender tu
              consulta. Si llegas a ser cliente, se conservarán durante la
              relación profesional y, después, durante los plazos exigidos por
              la normativa aplicable.
            </p>
          ),
        },
        {
          title: "Destinatarios",
          body: (
            <p>
              No cedemos tus datos a terceros salvo obligación legal. Pueden
              acceder a ellos los proveedores que nos prestan servicios
              tecnológicos (por ejemplo, correo electrónico o alojamiento web),
              con los que tenemos firmados los correspondientes contratos de
              encargo del tratamiento.
            </p>
          ),
        },
        {
          title: "Tus derechos",
          body: (
            <>
              <p>
                Puedes ejercer tus derechos de acceso, rectificación, supresión,
                oposición, limitación del tratamiento y portabilidad escribiendo
                a <a href={`mailto:${company.email}`}>{company.email}</a> o por
                correo postal a nuestra dirección, indicando el derecho que
                deseas ejercer.
              </p>
              <p>
                Si consideras que no hemos tratado tus datos correctamente,
                puedes presentar una reclamación ante la Agencia Española de
                Protección de Datos (
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.aepd.es
                </a>
                ).
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
