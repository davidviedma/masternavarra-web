# Master Navarra de Consulting — web

Web corporativa de **Master Navarra de Consulting, S.L.**, despacho de auditores y
consultores en Pamplona (Paseo García de Nájera, 4 - 1º C).

- **Home** (`/`): hero interactivo, áreas, servicios, la firma, cómo trabajamos,
  clientes, preguntas frecuentes y contacto.
- **Áreas**: `/despacho-profesional`, `/consultoria`, `/auditoria`.
- **Legal**: `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies`.

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
```

Stack: Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, HugeIcons y componentes de
[React Bits](https://reactbits.dev) (DotGrid, RotatingText, ShinyText, LogoLoop,
SpotlightCard, CountUp).

Todos los datos de la empresa están en `lib/site.ts`. Antes de publicar hay que
completar el CIF y los datos registrales (ver `CLAUDE.md`).

## Créditos

Componentes de `components/reactbits/` © David Haz — React Bits, licencia MIT +
Commons Clause.
