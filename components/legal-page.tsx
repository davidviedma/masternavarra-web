import Link from "next/link"
import type { ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"

export type LegalSection = { title: string; body: ReactNode }

export function LegalPage({
  title,
  intro,
  sections,
  updated,
}: {
  title: string
  intro: ReactNode
  sections: LegalSection[]
  updated: string
}) {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-zinc-950 text-zinc-100">
        <div className="container mx-auto max-w-3xl px-6 py-32">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-300"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            Volver al inicio
          </Link>

          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mb-2 text-xs text-zinc-600">
            Última actualización: {updated}
          </p>
          <div className="mb-12 text-sm leading-relaxed text-zinc-400">
            {intro}
          </div>

          <div className="flex flex-col gap-10">
            {sections.map(({ title, body }) => (
              <section key={title}>
                <h2 className="mb-3 text-base font-semibold tracking-widest text-brand-accent uppercase">
                  {title}
                </h2>
                <div className="flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 [&_a]:text-brand-accent [&_a:hover]:underline [&_strong]:text-zinc-200 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
                  {body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
