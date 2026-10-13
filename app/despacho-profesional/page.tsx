import {
  Agreement01Icon,
  Briefcase01Icon,
  Building06Icon,
  Calculator01Icon,
  CourtLawIcon,
  Home01Icon,
  JusticeScale01Icon,
  Location01Icon,
  TaxesIcon,
  UserGroupIcon,
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
import { pageMetadata } from "@/lib/site"

const slug = "despacho-profesional"
const description =
  "Asesoría de empresas en Pamplona: contabilidad, impuestos ante la Hacienda Foral de Navarra, nóminas, mercantil y asesoría jurídica. Economistas, asesores fiscales y abogados en un mismo despacho."

export const metadata = pageMetadata({
  path: `/${slug}`,
  title:
    "Asesoría contable, fiscal, laboral y jurídica en Pamplona · Master Navarra",
  description,
})

const services: Feature[] = [
  {
    icon: Calculator01Icon,
    title: "Contabilidad",
    text: "Llevamos tu contabilidad al día, preparamos los libros oficiales y formulamos y depositamos las cuentas anuales.",
  },
  {
    icon: TaxesIcon,
    title: "Impuestos de empresa",
    text: "IVA, retenciones, pagos fraccionados e Impuesto sobre Sociedades, presentados en plazo ante la Hacienda Foral.",
  },
  {
    icon: Briefcase01Icon,
    title: "Autónomos",
    text: "Alta en la actividad, impuestos trimestrales, declaración de la renta y asesoramiento para que tu negocio crezca.",
  },
  {
    icon: UserGroupIcon,
    title: "Nóminas y Seguridad Social",
    text: "Nóminas, seguros sociales, altas, bajas, finiquitos y certificados, cada mes y sin errores.",
  },
  {
    icon: Agreement01Icon,
    title: "Mercantil y societario",
    text: "Constitución de sociedades, juntas, actas, cambios de órgano de administración y trámites en el Registro Mercantil.",
  },
  {
    icon: JusticeScale01Icon,
    title: "Asesoría jurídica",
    text: "Contratos, reclamaciones, recursos ante la Administración y defensa en inspecciones, con abogados en el equipo.",
  },
  {
    icon: Home01Icon,
    title: "Particulares y patrimonio",
    text: "Renta y patrimonio, herencias y donaciones, compraventa de inmuebles y planificación del patrimonio familiar.",
  },
  {
    icon: Building06Icon,
    title: "Administración de fincas",
    text: "Gestión de comunidades de propietarios: cuentas, presupuestos, juntas y relación con proveedores y vecinos.",
  },
]

const steps = [
  {
    title: "Reunión inicial",
    text: "Conocemos tu empresa, cómo trabajas hoy y qué necesitas de tu asesoría.",
  },
  {
    title: "Traspaso",
    text: "Si vienes de otra asesoría, nos coordinamos para recoger la documentación contable, fiscal y laboral.",
  },
  {
    title: "Revisión",
    text: "Comprobamos que todo está al día y te avisamos de cualquier riesgo o mejora que detectemos.",
  },
  {
    title: "Gestión continuada",
    text: "Nos encargamos del día a día y te mantenemos informado antes de cada plazo y de cada decisión.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Qué incluye la gestión integral de una empresa?",
    answer:
      "Contabilidad, impuestos, nóminas y Seguridad Social, obligaciones mercantiles y el asesoramiento jurídico que vayas necesitando. Lo adaptamos a cada cliente: puedes contratar todo o solo las áreas que necesites.",
  },
  {
    question: "¿Lleváis autónomos?",
    answer:
      "Sí. Te ayudamos desde el alta en la actividad hasta los impuestos trimestrales y la declaración de la renta, y te asesoramos cuando llegue el momento de valorar si te conviene crear una sociedad.",
  },
  {
    question: "¿Presentáis los impuestos por mí?",
    answer:
      "Sí. Preparamos y presentamos tus declaraciones ante la Hacienda Foral de Navarra y te avisamos con antelación del importe y de los plazos para que no haya sorpresas.",
  },
  {
    question: "¿Qué pasa si recibo un requerimiento o una inspección?",
    answer:
      "Lo revisamos contigo, preparamos la documentación y la respuesta, y te acompañamos durante el procedimiento. Si es necesario recurrir, nuestros abogados se encargan.",
  },
  {
    question: "¿Puedo cambiar de asesoría a mitad de año?",
    answer:
      "Sí. Nos coordinamos con tu asesoría anterior para el traspaso de la documentación y revisamos que todo esté al día para continuar sin interrupciones.",
  },
]

export default function DespachoPage() {
  return (
    <>
      <ServiceJsonLd
        slug={slug}
        name="Asesoría y gestión integral de empresas"
        description={description}
        faqs={faqs}
      />
      <Nav />
      <main className="bg-zinc-950 text-zinc-100">
        <LandingHero
          label="Despacho Profesional"
          title="Asesoría y gestión integral"
          highlight="en Pamplona"
          subtitle="Economistas, asesores fiscales y abogados que llevan la contabilidad, los impuestos, las nóminas y los asuntos legales de tu empresa. Todo en un mismo despacho y con una persona de referencia."
          checks={[
            "Hacienda Foral de Navarra",
            "Un único interlocutor",
            "Abogados en el equipo",
          ]}
          aside={
            <HeroPanel
              big="360°"
              bigLabel="gestión integral de tu empresa"
              items={[
                "Contabilidad y cuentas anuales",
                "Impuestos y Hacienda Foral",
                "Nóminas y Seguridad Social",
                "Mercantil y societario",
                "Asesoría jurídica",
                "Administración de fincas",
              ]}
            />
          }
        />

        <Section tone="dark">
          <SectionHeading
            label="Qué hacemos"
            title="Tu empresa, en"
            highlight="buenas manos"
            intro="Nos ocupamos de las obligaciones del día a día y te asesoramos para que tomes mejores decisiones."
          />
          <FeatureGrid items={services} />
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Fiscalidad foral"
            title="Expertos en la"
            highlight="Hacienda de Navarra"
            intro="Navarra tiene su propio régimen tributario, con impuestos, modelos, deducciones y plazos que no siempre coinciden con los del resto de España. Trabajamos con ella a diario desde nuestro despacho de Pamplona."
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Callout icon={Location01Icon} title="Cerca de ti">
              Nuestra oficina está en el Paseo García de Nájera, en el centro de
              Pamplona. Puedes venir a vernos siempre que lo necesites: aquí
              sabes quién lleva tu empresa.
            </Callout>
            <Callout icon={CourtLawIcon} title="Procedimientos concursales">
              Cuando una empresa atraviesa dificultades, te asesoramos sobre las
              alternativas disponibles. A través de SE Consultores
              Procedimientos Concursales actuamos también como administradores
              concursales.
            </Callout>
          </div>
        </Section>

        <Section tone="dark">
          <SectionHeading
            label="Cambiar de asesoría"
            title="Pasarte a nosotros es"
            highlight="fácil"
          />
          <Steps steps={steps} />
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Preguntas frecuentes"
            title="Dudas sobre"
            highlight="asesoría"
          />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Hablamos de tu empresa?"
          text="Ven a conocernos a nuestro despacho de Pamplona. Te explicamos cómo trabajaríamos contigo y te damos una propuesta clara."
          currentSlug={slug}
        />
      </main>
      <Footer />
      <CallButton />
    </>
  )
}
