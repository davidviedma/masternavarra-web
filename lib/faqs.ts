import { AUDIT_SINCE, company } from "@/lib/site"

export const homeFaqs = [
  {
    question: "¿Qué servicios ofrece Master Navarra de Consulting?",
    answer:
      "Trabajamos en tres áreas: despacho profesional (contabilidad, impuestos, nóminas, mercantil y asesoría jurídica), consultoría fiscal, laboral y contable, y auditoría de cuentas. Así puedes tener toda la gestión de tu empresa en un único despacho.",
  },
  {
    question: "¿Trabajáis con autónomos o solo con empresas?",
    answer:
      "Con ambos. Asesoramos a autónomos y profesionales, pymes, grupos de empresas, entidades sin ánimo de lucro, comunidades de propietarios y particulares. Adaptamos el servicio al tamaño y a las necesidades de cada cliente.",
  },
  {
    question: "¿Conocéis la normativa foral de Navarra?",
    answer:
      "Sí. Navarra tiene su propio régimen tributario y su propia Hacienda Foral, con impuestos, modelos y plazos que no siempre coinciden con los del resto de España. Llevamos desde Pamplona más de tres décadas trabajando con ella a diario.",
  },
  {
    question: "¿Mi empresa está obligada a auditar sus cuentas?",
    answer:
      "Depende principalmente de su tamaño (activo, cifra de negocios y número medio de trabajadores) durante dos ejercicios consecutivos, aunque hay otros supuestos, como haber recibido determinadas subvenciones o contratos públicos. Cuéntanos tu caso y te lo confirmamos.",
  },
  {
    question: "¿Puedo cambiar de asesoría a mitad de año?",
    answer:
      "Sí. Nos encargamos del traspaso: recopilamos la documentación contable, fiscal y laboral, revisamos que todo esté al día y continuamos la gestión sin que tengas que preocuparte por los plazos.",
  },
  {
    question: `¿Desde cuándo sois auditores?`,
    answer: `Somos auditores de cuentas desde ${AUDIT_SINCE}. Además de la auditoría obligatoria y voluntaria, realizamos auditorías de cuentas consolidadas, informes especiales, informes periciales y due diligence.`,
  },
  {
    question: "¿Dónde está vuestro despacho?",
    answer: `Estamos en el ${company.street}, ${company.postalCode} ${company.city}. Puedes llamarnos al ${company.phone} o escribirnos a ${company.email} para concertar una reunión.`,
  },
]
