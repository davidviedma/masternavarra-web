# CLAUDE.md

Guía para Claude Code (claude.ai/code) al trabajar en este repositorio.

## Comandos

```bash
pnpm install      # dependencias
pnpm dev          # desarrollo en http://localhost:3000 (Turbopack)
pnpm build        # build de producción (todas las rutas son estáticas)
pnpm lint         # ESLint
pnpm typecheck    # TypeScript
pnpm format       # Prettier
```

## Proyecto

Web corporativa de **Master Navarra de Consulting, S.L.** (Pamplona): despacho de
economistas, asesores fiscales y abogados. Tres áreas: Despacho Profesional,
Consultoría (fiscal, laboral y contable) y Auditoría (auditores desde 1993).

El diseño sigue el de `davidviedma/web-iruman` (mismo stack, nav tipo "isla",
botones, tarjetas con esquinas, secciones oscuras zinc-900/950), con la marca en
azul y componentes de [React Bits](https://reactbits.dev).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript estricto
- Tailwind CSS 4 (tokens en `app/globals.css`, bloque `@theme inline`)
- shadcn/ui (`components/ui/button.tsx`) + HugeIcons
- `motion` (necesario para RotatingText y CountUp de React Bits)
- Fuentes: Inter (texto) y Roboto Condensed (`font-condensed`, eco del membrete)

## Estructura

```
app/
  page.tsx                    Home (composición de secciones)
  despacho-profesional/       Landing del área
  consultoria/                Landing del área
  auditoria/                  Landing del área
  aviso-legal/, politica-de-privacidad/, politica-de-cookies/
  layout.tsx                  Fuentes, metadata y JSON-LD del negocio
  sitemap.ts, robots.ts, icon.svg, apple-icon.png
components/
  nav.tsx                     Nav "isla" (igual patrón que Iruman)
  logo.tsx                    Monograma MC en SVG + nombre
  landing.tsx                 Primitivas compartidas (Section, FeatureGrid, Steps, FAQ, CTA...)
  legal-page.tsx              Plantilla de páginas legales
  call-button.tsx             Botón flotante de llamada
  sections/                   Secciones de la home
  reactbits/                  Componentes copiados de React Bits (no editar salvo necesidad)
lib/
  site.ts                     Datos de la empresa, áreas, metadata helper  ← fuente única
  faqs.ts                     FAQs de la home (también alimentan el JSON-LD)
  logo-path.ts                Trazado SVG del monograma
public/
  logo-mark.svg, membrete.png, og-image.png
```

## Convenciones

- **Datos de contacto**: solo en `lib/site.ts` (`company`). No duplicarlos en componentes.
- **Colores**: `brand-primary` (#2f5bb5, fondos y botones), `brand-accent` (#6b93ec,
  texto destacado e iconos sobre fondo oscuro). No usar `brand-primary` para texto
  pequeño sobre fondo oscuro (contraste insuficiente).
- **React Bits**: los ficheros de `components/reactbits/` se mantienen como el
  original (con cabecera de licencia MIT + Commons Clause). Están excluidos de
  Prettier y tienen reglas de ESLint relajadas en `eslint.config.mjs`.
- **Nueva área/servicio**: añadirlo a `areas` en `lib/site.ts` (alimenta nav del
  footer, sitemap, formulario y "Otras áreas") y crear `app/<slug>/page.tsx`
  usando las primitivas de `components/landing.tsx`.
- **Mapa**: Google Maps solo se carga tras pulsar "Cargar mapa" (sin cookies de
  terceros por defecto, por eso no hay banner de cookies).
- **Formulario de contacto**: abre el cliente de correo (`mailto:`) con el mensaje
  redactado; no hay backend.

## Pendiente antes de publicar

- `company.cif` y `company.registry` en `lib/site.ts` (aparecen en las páginas legales).
- Revisar los textos con el cliente (servicios, FAQs, procesos).
