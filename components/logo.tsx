import { LOGO_PATH, LOGO_VIEWBOX } from "@/lib/logo-path"
import { cn } from "@/lib/utils"

export function LogoMark({
  className,
  title,
}: {
  className?: string
  title?: string
}) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
    </svg>
  )
}

/** Monograma + nombre, inspirado en el membrete original de la firma. */
export function Logo({
  className,
  markClassName,
  showTagline = true,
}: {
  className?: string
  markClassName?: string
  showTagline?: boolean
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark
        className={cn("h-11 w-auto text-brand-accent", markClassName)}
      />
      <span className="flex flex-col leading-none">
        <span className="font-condensed text-lg font-bold tracking-tight text-white uppercase">
          Master Navarra
        </span>
        <span className="font-condensed text-[13px] font-medium tracking-wide text-zinc-400 uppercase">
          de Consulting <span className="text-zinc-500">S.L.</span>
        </span>
        {showTagline && (
          <span className="mt-1.5 border-t border-brand-accent/40 pt-1.5 text-[11px] tracking-[0.2em] text-zinc-500 uppercase">
            Auditores · Consultores
          </span>
        )}
      </span>
    </span>
  )
}
