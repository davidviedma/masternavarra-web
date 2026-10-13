import {
  Briefcase01Icon,
  Building02Icon,
  City01Icon,
  Factory01Icon,
  Home01Icon,
  Store01Icon,
} from "@hugeicons/core-free-icons"
import {
  FeatureGrid,
  Section,
  SectionHeading,
  Steps,
  type Feature,
} from "@/components/landing"

const steps = [
  {
    title: "Nos cuentas tu caso",
    text: "Por teléfono o por email. Te escuchamos y vemos qué necesitas: gestión del día a día, una consulta puntual o una auditoría.",
  },
  {
    title: "Reunión en el despacho",
    text: "Nos sentamos contigo en nuestra oficina de Pamplona para conocer tu empresa, tu situación y tus objetivos.",
  },
  {
    title: "Propuesta a medida",
    text: "Te presentamos una propuesta clara: qué haremos, cómo lo haremos y cuánto costará. Sin letra pequeña.",
  },
  {
    title: "Seguimiento continuo",
    text: "Una persona de referencia que conoce tu empresa, te avisa de los plazos y te asesora antes de que tomes decisiones.",
  },
]

const clients: Feature[] = [
  {
    icon: Briefcase01Icon,
    title: "Autónomos y profesionales",
    text: "Alta en actividad, impuestos trimestrales, renta y todo lo que necesitas para centrarte en tu trabajo.",
  },
  {
    icon: Store01Icon,
    title: "Pymes",
    text: "Contabilidad, fiscalidad, nóminas y asesoría legal con una visión de conjunto de tu negocio.",
  },
  {
    icon: Factory01Icon,
    title: "Grupos de empresas",
    text: "Consolidación contable, operaciones entre sociedades, reestructuraciones y auditoría de cuentas consolidadas.",
  },
  {
    icon: City01Icon,
    title: "Entidades públicas y sin ánimo de lucro",
    text: "Auditoría, revisión de subvenciones y apoyo en el cumplimiento de sus obligaciones contables.",
  },
  {
    icon: Building02Icon,
    title: "Comunidades de propietarios",
    text: "Administración de fincas: cuentas claras, gestión de la comunidad y atención a los vecinos.",
  },
  {
    icon: Home01Icon,
    title: "Particulares y familias",
    text: "Declaración de la renta y patrimonio, herencias y donaciones y planificación del patrimonio familiar.",
  },
]

export function Process() {
  return (
    <>
      <Section tone="dark" id="como-trabajamos">
        <SectionHeading
          label="Cómo trabajamos"
          title="Empezar con nosotros es"
          highlight="sencillo"
        />
        <Steps steps={steps} />
      </Section>

      <Section tone="darker" id="clientes">
        <SectionHeading
          label="A quién ayudamos"
          title="Asesoramos a empresas"
          highlight="de todos los tamaños"
          intro="Cada cliente es distinto. Adaptamos el servicio a tu realidad, desde el autónomo que empieza hasta el grupo empresarial que necesita auditar sus cuentas consolidadas."
        />
        <FeatureGrid items={clients} columns={3} surface="dark" />
      </Section>
    </>
  )
}
