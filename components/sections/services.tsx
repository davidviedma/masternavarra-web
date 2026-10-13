import {
  Agreement01Icon,
  Analytics01Icon,
  Calculator01Icon,
  CourtLawIcon,
  JusticeScale01Icon,
  SearchList01Icon,
  TaxesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import {
  FeatureGrid,
  Section,
  SectionHeading,
  type Feature,
} from "@/components/landing"

const services: Feature[] = [
  {
    icon: Calculator01Icon,
    title: "Contabilidad",
    text: "Llevanza de la contabilidad, libros oficiales, cierre del ejercicio y formulación y depósito de las cuentas anuales.",
  },
  {
    icon: TaxesIcon,
    title: "Fiscalidad",
    text: "Impuestos de empresas, autónomos y particulares ante la Hacienda Foral de Navarra: IVA, Sociedades, IRPF y Patrimonio.",
  },
  {
    icon: UserGroupIcon,
    title: "Laboral y nóminas",
    text: "Nóminas, seguros sociales, contratos, altas y bajas, finiquitos y relación con la Seguridad Social.",
  },
  {
    icon: Agreement01Icon,
    title: "Mercantil y societario",
    text: "Constitución de sociedades, juntas y actas, ampliaciones de capital, libros societarios y Registro Mercantil.",
  },
  {
    icon: JusticeScale01Icon,
    title: "Asesoría jurídica",
    text: "Nuestros abogados te asesoran en contratos, reclamaciones, herencias y en la defensa ante la Administración.",
  },
  {
    icon: SearchList01Icon,
    title: "Auditoría de cuentas",
    text: "Auditoría obligatoria y voluntaria, cuentas consolidadas, informes especiales y revisión de subvenciones.",
  },
  {
    icon: Analytics01Icon,
    title: "Consultoría empresarial",
    text: "Valoración de empresas, due diligence, planificación financiera y apoyo en operaciones de compraventa.",
  },
  {
    icon: CourtLawIcon,
    title: "Concursal y periciales",
    text: "Administración concursal e informes periciales económicos para juzgados, empresas y particulares.",
  },
]

export function Services() {
  return (
    <Section tone="dark" id="servicios">
      <SectionHeading
        label="Servicios"
        title="Todo lo que necesita"
        highlight="tu empresa"
        intro="Un despacho multidisciplinar para que no tengas que coordinar a varios proveedores. Contabilidad, impuestos, laboral, legal y auditoría, con criterio y cercanía."
      />
      <FeatureGrid items={services} surface="darker" />
    </Section>
  )
}
