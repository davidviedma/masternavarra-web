"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Call02Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons"
import { LogoMark } from "@/components/logo"
import { company } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { label: "Despacho", href: "/despacho-profesional" },
  { label: "Consultoría", href: "/consultoria" },
  { label: "Auditoría", href: "/auditoria" },
  { label: "La firma", href: "/#la-firma" },
  { label: "Dudas", href: "/#faqs" },
]

const sectionIds = ["la-firma", "faqs", "contacto"]

export function Nav() {
  const pathname = usePathname()
  // La isla arranca recogida (solo el logo) y se despliega una vez — tras
  // un instante, al pasar el ratón o al hacer scroll — y ya no se recoge.
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) setExpanded(true)
    }
    const onResize = () => setIsMobile(window.innerWidth < 768)

    onResize()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.25
      let current = ""
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) current = id
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const expand = setTimeout(() => setExpanded(true), 600)
    return () => clearTimeout(expand)
  }, [])

  const isLinkActive = (href: string) =>
    href.startsWith("/#")
      ? pathname === "/" && activeSection === href.slice(2)
      : pathname.startsWith(href)

  const islandWidth = isMobile ? (expanded ? 150 : 76) : expanded ? 800 : 76

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center">
      <div className="pointer-events-auto relative flex flex-col items-center">
        {/* ── The Island ── */}
        <nav
          aria-label="Navegación principal"
          onMouseEnter={() => setExpanded(true)}
          className={cn(
            "relative flex h-15 items-center overflow-hidden rounded-full",
            "border border-white/10",
            "bg-zinc-900/90 backdrop-blur-2xl",
            "shadow-[0_4px_32px_rgba(0,0,0,0.30),0_1px_0_rgba(255,255,255,0.06)_inset]",
            "transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.36,0.64,1)]"
          )}
          style={{ width: islandWidth }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label={`${company.name} — Inicio`}
            className={cn(
              "flex shrink-0 items-center",
              expanded ? "pr-3 pl-4" : "pr-[22px] pl-[20px]",
              "transition-[padding] duration-[420ms] ease-[cubic-bezier(0.34,1.36,0.64,1)]"
            )}
          >
            <LogoMark className="h-9 w-auto text-brand-accent" />
          </Link>

          {/* Desktop links */}
          <ul
            className={cn(
              "hidden flex-1 items-center justify-center gap-0.5 md:flex",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-[15px] whitespace-nowrap transition-colors",
                    isLinkActive(link.href)
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <div
            className={cn(
              "hidden shrink-0 pr-1.5 md:flex",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            <Link
              href="/#contacto"
              className="inline-flex h-10 items-center rounded-full bg-brand-primary px-5 text-[15px] font-medium whitespace-nowrap text-brand-primary-foreground transition-colors hover:bg-brand-primary-hover"
            >
              Contacto
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <div
            className={cn(
              "ml-auto flex shrink-0 pr-1.5 md:hidden",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <HugeiconsIcon
                icon={open ? Cancel01Icon : Menu01Icon}
                size={18}
              />
            </button>
          </div>
        </nav>

        {/* ── Mobile dropdown ── */}
        <div
          className={cn(
            "absolute top-full mt-2 w-56 overflow-hidden rounded-2xl md:hidden",
            "border border-white/10 bg-zinc-900/95 backdrop-blur-2xl",
            "shadow-[0_8px_32px_rgba(0,0,0,0.30)]",
            "flex flex-col gap-0.5 p-1.5",
            "origin-top transition-all duration-300",
            open
              ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-y-95 opacity-0"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? undefined : -1}
              className={cn(
                "rounded-xl px-3 py-2.5 text-sm transition-colors",
                isLinkActive(link.href)
                  ? "bg-white/10 text-white"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contacto"
            onClick={() => setOpen(false)}
            tabIndex={open ? undefined : -1}
            className="mt-0.5 rounded-xl bg-brand-primary px-3 py-2.5 text-center text-sm font-medium text-brand-primary-foreground transition-colors hover:bg-brand-primary-hover"
          >
            Contacto
          </Link>
          <a
            href={company.phoneHref}
            tabIndex={open ? undefined : -1}
            className="flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <HugeiconsIcon icon={Call02Icon} size={16} />
            {company.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
