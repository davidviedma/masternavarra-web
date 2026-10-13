import { HugeiconsIcon } from "@hugeicons/react"
import { Call02Icon } from "@hugeicons/core-free-icons"
import { company } from "@/lib/site"

export function CallButton() {
  return (
    <a
      href={company.phoneHref}
      aria-label={`Llamar a ${company.name}: ${company.phone}`}
      className="group fixed right-6 bottom-6 z-50 flex h-14 items-center overflow-hidden rounded-full bg-brand-primary text-white shadow-[0_10px_30px_-8px_rgba(47,91,181,0.8)] transition-all duration-300 hover:bg-brand-primary-hover"
    >
      <span className="flex size-14 shrink-0 items-center justify-center">
        <HugeiconsIcon icon={Call02Icon} size={24} />
      </span>
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-5 group-focus-visible:max-w-[160px] group-focus-visible:pr-5">
        {company.phone}
      </span>
    </a>
  )
}
