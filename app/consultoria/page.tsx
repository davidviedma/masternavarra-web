import {
  Agreement01Icon,
  Analytics01Icon,
  Calculator01Icon,
  Globe02Icon,
  Idea01Icon,
  TaxesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { Nav } from "@/components/nav"
import { CallButton } from "@/components/call-button"
import { Footer } from "@/components/sections/footer"
import {
  FaqList,
  FeatureGrid,
  FinalCta,
  HeroPanel,
  LandingHero,
  PillarGrid,
  Section,
  SectionHeading,
  ServiceJsonLd,
  Steps,
  type Faq,
  type Feature,
  type Pillar,
} from "@/components/landing"
import { pageMetadata } from "@/lib/site"

const slug = "consultoria"
const description =
  "Consultoría fiscal, laboral y contable en Pamplona. Planificación fiscal, organización laboral, consultoría contable y financiera, valoración de empresas y subvenciones para empresas de Navarra."

export const metadata = pageMetadata({
  path: `/${slug}`,
  title: "Consultoría fiscal, laboral y contable en Pamplona · Master Navarra",
  description,
})

const pillars: Pillar[] = [
  {
    icon: TaxesIcon,
    title: "Consultoría fiscal",
    text: "Pagar lo que corresponde, ni un euro más, y tomar decisiones conociendo su impacto fiscal.",
    items: [
      "Planificación fiscal de la empresa y de sus socios",
      "Fiscalidad de operaciones y reestructuraciones",
      "Retribución de socios y administradores",
      "Empresa familiar y relevo generacional",
      "Inspecciones y procedimientos tributarios",
    ],
  },
  {
    icon: UserGroupIcon,
    title: "Consultoría laboral",
    text: "Organizar tu plantilla con seguridad jurídica y aprovechando las herramientas disponibles.",
    items: [
      "Modalidades de contratación y bonificaciones",
      "Aplicación de convenios colectivos",
      "Políticas retributivas y organización de RR. HH.",
      "Reestructuraciones de plantilla",
      "Inspecciones de trabajo",
    ],
  },
  {
    icon: Calculator01Icon,
    title: "Consultoría contable",
    text: "Información financiera fiable para dirigir tu empresa y presentarla ante bancos o inversores.",
    items: [
      "Diagnóstico económico-financiero",
      "Cierres contables y cuentas anuales",
      "Consolidación de grupos de empresas",
      "Presupuestos y control de gestión",
      "Mejora de procesos y del control interno",
    ],
  },
]

const strategic: Feature[] = [
  {
    icon: Analytics01Icon,
    title: "Valoración de empresas",
    text: "Valoraciones para compraventas, entrada o salida de socios, herencias, operaciones societarias o procedimientos judiciales.",
  },
  {
    icon: Agreement01Icon,
    title: "Compraventa de empresas",
    text: "Acompañamiento en la compra o venta de un negocio: revisión previa, negociación y estructura de la operación.",
  },
  {
    icon: Idea01Icon,
    title: "Subvenciones e I+D+i",
    text: "Identificamos ayudas públicas y deducciones fiscales por investigación, desarrollo e innovación a las que puedes acceder.",
  },
  {
    icon: Globe02Icon,
    title: "Internacionalización",
    text: "Apoyo fiscal, contable y societario para empresas que quieren vender o implantarse en otros países.",
  },
]

const steps = [
  {
    title: "Diagnóstico",
    text: "Analizamos la situación de partida: números, estructura, plantilla y objetivos.",
  },
  {
    title: "Alternativas",
    text: "Estudiamos las opciones posibles y cuantificamos su impacto fiscal, laboral y financiero.",
  },
  {
    title: "Propuesta",
    text: "Te presentamos una recomendación concreta y razonada, con sus pros y sus contras.",
  },
  {
    title: "Implantación",
    text: "Te acompañamos en la puesta en marcha y hacemos seguimiento de los resultados.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Qué es la planificación fiscal?",
    answer:
      "Es analizar con antelación las decisiones de la empresa y de sus socios para que tributen de la forma más eficiente que permite la ley. Siempre dentro de la normativa: no se trata de evitar impuestos, sino de no pagar más de lo que corresponde.",
  },
  {
    question: "¿Puedo contrataros solo para una consulta puntual?",
    answer:
      "Sí. Muchos clientes nos piden consultoría para una decisión concreta (una reestructuración, la entrada de un socio, una compraventa) aunque su gestión diaria la lleve otra asesoría o su propio departamento.",
  },
  {
    question: "¿Cómo se calcula el valor de una empresa?",
    answer:
      "Depende de la finalidad y del tipo de empresa. Normalmente combinamos varios métodos, como el descuento de flujos de caja, los múltiplos de empresas comparables o los métodos patrimoniales, y explicamos el resultado de forma clara.",
  },
  {
    question: "¿Mi empresa puede beneficiarse de deducciones por I+D+i?",
    answer:
      "Si desarrollas nuevos productos, procesos o mejoras tecnológicas, es posible. Analizamos tus proyectos, te indicamos qué incentivos fiscales y ayudas pueden aplicarse y cómo documentarlos correctamente.",
  },
]

export default function ConsultoriaPage() {
  return (
    <>
      <ServiceJsonLd
        slug={slug}
        name="Consultoría fiscal, laboral y contable"
        description={description}
        faqs={faqs}
      />
      <Nav />
      <main className="bg-zinc-950 text-zinc-100">
        <LandingHero
          label="Consultoría"
          title="Consultoría fiscal, laboral y contable"
          highlight="para decidir mejor"
          subtitle="Te ayudamos a tomar decisiones con números y con seguridad jurídica: planificación fiscal, organización laboral, información contable fiable y apoyo en las operaciones clave de tu empresa."
          checks={[
            "Visión de auditor",
            "Fiscalidad foral navarra",
            "Propuestas concretas",
          ]}
          aside={
            <HeroPanel
              big="3"
              bigLabel="especialidades: fiscal, laboral y contable"
              items={[
                "Planificación fiscal",
                "Reestructuraciones societarias",
                "Organización laboral",
                "Valoración de empresas",
                "Subvenciones e I+D+i",
                "Internacionalización",
              ]}
            />
          }
        />

        <Section tone="dark">
          <SectionHeading
            label="Especialidades"
            title="Fiscal, laboral y contable,"
            highlight="de la mano"
            intro="Las decisiones importantes de una empresa casi nunca son solo fiscales, solo laborales o solo contables. Por eso las abordamos juntas."
          />
          <PillarGrid pillars={pillars} />
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Consultoría estratégica"
            title="Para los momentos"
            highlight="clave"
            intro="Operaciones que marcan el futuro de una empresa y en las que conviene contar con un asesor con experiencia."
          />
          <FeatureGrid items={strategic} surface="dark" />
        </Section>

        <Section tone="dark">
          <SectionHeading
            label="Método"
            title="Cómo trabajamos"
            highlight="cada proyecto"
          />
          <Steps steps={steps} />
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Preguntas frecuentes"
            title="Dudas sobre"
            highlight="consultoría"
          />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Tienes una decisión importante por delante?"
          text="Cuéntanos qué estás valorando y te ayudamos a analizar las alternativas antes de dar el paso."
          currentSlug={slug}
        />
      </main>
      <Footer />
      <CallButton />
    </>
  )
}
