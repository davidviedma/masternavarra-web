import Link from "next/link"
import {
  Agreement01Icon,
  Award01Icon,
  CourtLawIcon,
  Factory01Icon,
  FileValidationIcon,
  LegalDocument01Icon,
  Location01Icon,
  SearchList01Icon,
  SecurityCheckIcon,
  ShieldCheck as ShieldCheckIcon,
  Task01Icon,
  TaskDone01Icon,
} from "@hugeicons/core-free-icons"
import { Nav } from "@/components/nav"
import { CallButton } from "@/components/call-button"
import { Footer } from "@/components/sections/footer"
import {
  Callout,
  FaqList,
  FeatureGrid,
  FinalCta,
  HeroPanel,
  LandingHero,
  Section,
  SectionHeading,
  ServiceJsonLd,
  Steps,
  type Faq,
  type Feature,
} from "@/components/landing"
import { AUDIT_SINCE, pageMetadata } from "@/lib/site"

const slug = "auditoria"
const description = `Auditores de cuentas en Pamplona desde ${AUDIT_SINCE}. Auditoría obligatoria y voluntaria, cuentas consolidadas, informes especiales, revisión de subvenciones y due diligence en toda Navarra.`

export const metadata = pageMetadata({
  path: `/${slug}`,
  title:
    "Auditoría de cuentas en Pamplona y Navarra · Master Navarra de Consulting",
  description,
})

const services: Feature[] = [
  {
    icon: SearchList01Icon,
    title: "Auditoría obligatoria",
    text: "Auditoría de las cuentas anuales de sociedades que, por su tamaño u otras circunstancias, están obligadas a auditarse.",
  },
  {
    icon: TaskDone01Icon,
    title: "Auditoría voluntaria",
    text: "Para dar confianza a bancos, inversores, socios o compradores, aunque la ley no lo exija. Mismo rigor, mismas normas.",
  },
  {
    icon: Factory01Icon,
    title: "Cuentas consolidadas",
    text: "Auditoría de grupos de sociedades: perímetro de consolidación, operaciones entre empresas del grupo y cuentas consolidadas.",
  },
  {
    icon: FileValidationIcon,
    title: "Informes especiales",
    text: "Trabajos que exige la normativa mercantil, como aumentos de capital por compensación de créditos o con cargo a reservas.",
  },
  {
    icon: Task01Icon,
    title: "Revisión de subvenciones",
    text: "Revisión de cuentas justificativas de ayudas y subvenciones públicas ante el organismo que las concede.",
  },
  {
    icon: Agreement01Icon,
    title: "Due diligence",
    text: "Revisión financiera, contable y fiscal de una empresa antes de comprarla, venderla o entrar en su capital.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Auditoría interna",
    text: "Revisión de procesos y del control interno, también como servicio externalizado para tu departamento financiero.",
  },
  {
    icon: CourtLawIcon,
    title: "Informes periciales",
    text: "Informes periciales económicos y contables para procedimientos judiciales, arbitrajes y conflictos entre socios.",
  },
]

const reasons: Feature[] = [
  {
    icon: Award01Icon,
    title: `Auditores desde ${AUDIT_SINCE}`,
    text: "Más de tres décadas auditando empresas y entidades navarras de sectores muy distintos.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Rigor e independencia",
    text: "Trabajamos conforme a las Normas Internacionales de Auditoría adaptadas a España (NIA-ES) y a nuestros controles de calidad.",
  },
  {
    icon: Location01Icon,
    title: "Equipo cercano",
    text: "El equipo que te audita está en Pamplona y conoce la realidad de las empresas de Navarra y su fiscalidad foral.",
  },
  {
    icon: LegalDocument01Icon,
    title: "Más que un informe",
    text: "Además de la opinión, te trasladamos recomendaciones concretas para mejorar tu control interno y tu información financiera.",
  },
]

const steps = [
  {
    title: "Propuesta y aceptación",
    text: "Analizamos tu empresa, confirmamos nuestra independencia y te enviamos una propuesta con alcance, calendario y honorarios.",
  },
  {
    title: "Planificación",
    text: "Entendemos tu negocio, identificamos los riesgos relevantes y diseñamos las pruebas de auditoría a medida.",
  },
  {
    title: "Trabajo de campo",
    text: "Revisamos la información y los saldos con el mínimo impacto en el día a día de tu equipo.",
  },
  {
    title: "Informe y recomendaciones",
    text: "Emitimos el informe de auditoría y te comentamos las conclusiones y mejoras que hemos detectado.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Cuándo es obligatorio auditar las cuentas anuales?",
    answer:
      "Con carácter general, cuando la sociedad supera durante dos ejercicios consecutivos determinados límites de activo, cifra de negocios y número medio de trabajadores. También hay otros supuestos: haber recibido subvenciones o ayudas públicas, contratar con el sector público por encima de ciertos importes, pertenecer a sectores regulados o que lo soliciten socios que representen al menos el 5 % del capital. Te confirmamos si tu empresa está obligada sin compromiso.",
  },
  {
    question: "¿Qué diferencia hay entre auditoría obligatoria y voluntaria?",
    answer:
      "El trabajo y las normas son las mismas. La diferencia está en el motivo: la obligatoria la exige la ley; la voluntaria la decide la empresa para reforzar la confianza de bancos, inversores, socios o posibles compradores.",
  },
  {
    question: "¿Podéis auditar a una empresa a la que lleváis la contabilidad?",
    answer:
      "No. La normativa de auditoría exige independencia y prohíbe auditar a una entidad a la que se presten determinados servicios, como la llevanza de su contabilidad. Por eso, en cada caso analizamos qué servicios podemos prestarte y te lo explicamos con total transparencia.",
  },
  {
    question: "¿Cuánto tarda una auditoría?",
    answer:
      "Depende del tamaño y la complejidad de la empresa. Lo planificamos con antelación junto a tu equipo para que el informe esté listo antes de la junta que aprueba las cuentas anuales.",
  },
  {
    question: "¿Qué es un informe especial de auditor?",
    answer:
      "Es un informe que la normativa mercantil exige en determinadas operaciones, por ejemplo en aumentos de capital por compensación de créditos o con cargo a reservas. Te indicamos si tu operación lo necesita y lo preparamos en plazo.",
  },
]

export default function AuditoriaPage() {
  return (
    <>
      <ServiceJsonLd
        slug={slug}
        name="Auditoría de cuentas"
        description={description}
        faqs={faqs}
      />
      <Nav />
      <main className="bg-zinc-950 text-zinc-100">
        <LandingHero
          label="Auditoría"
          title="Auditoría de cuentas"
          highlight={`desde ${AUDIT_SINCE}`}
          subtitle="Auditamos las cuentas de empresas, grupos y entidades de Navarra con rigor, independencia y un equipo cercano que conoce tu sector. Obligatoria o voluntaria, con el mismo nivel de exigencia."
          checks={[
            "Normas NIA-ES",
            "Independencia y rigor",
            "Equipo en Pamplona",
          ]}
          aside={
            <HeroPanel
              big={String(AUDIT_SINCE)}
              bigLabel="auditando cuentas en Navarra"
              items={[
                "Auditoría obligatoria y voluntaria",
                "Cuentas consolidadas",
                "Informes especiales",
                "Revisión de subvenciones",
                "Due diligence",
                "Informes periciales",
              ]}
            />
          }
        />

        <Section tone="dark">
          <SectionHeading
            label="Servicios de auditoría"
            title="Revisamos tus cuentas"
            highlight="con criterio"
            intro="Desde la auditoría anual de una pyme hasta la consolidación de un grupo o la revisión de una operación concreta."
          />
          <FeatureGrid items={services} />
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Por qué Master Navarra"
            title="Una auditoría que"
            highlight="aporta valor"
          />
          <FeatureGrid items={reasons} surface="dark" />
          <div className="mt-8">
            <Callout
              icon={ShieldCheckIcon}
              title="Auditoría y asesoría, siempre con independencia"
            >
              La ley impide auditar a una empresa a la que se le llevan
              determinados servicios, como la contabilidad. Si ya eres cliente
              de nuestro despacho, te explicamos qué podemos hacer por ti y cómo
              garantizamos esa independencia.{" "}
              <Link
                href="/despacho-profesional"
                className="font-semibold text-brand-accent hover:underline"
              >
                Ver despacho profesional
              </Link>
            </Callout>
          </div>
        </Section>

        <Section tone="dark">
          <SectionHeading
            label="Cómo trabajamos"
            title="Así es una auditoría"
            highlight="con nosotros"
          />
          <Steps steps={steps} />
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Preguntas frecuentes"
            title="Dudas sobre"
            highlight="auditoría"
          />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Tu empresa necesita una auditoría?"
          text="Cuéntanos tu caso y te diremos si estás obligado, qué alcance tendría el trabajo y cuándo podríamos tenerlo listo."
          currentSlug={slug}
        />
      </main>
      <Footer />
      <CallButton />
    </>
  )
}
