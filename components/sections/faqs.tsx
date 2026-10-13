"use client"

import { useState } from "react"
import { homeFaqs } from "@/lib/faqs"
import { cn } from "@/lib/utils"

function FaqItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-zinc-900">
      <h3>
        <button
          id={`${id}-button`}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
        >
          <span className="text-lg font-semibold text-white">{question}</span>
          <span
            aria-hidden
            className={cn(
              "shrink-0 text-2xl leading-none font-light text-white transition-transform duration-300",
              isOpen && "rotate-45"
            )}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={cn(
          "grid transition-all duration-300",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-7 pb-6 text-base leading-relaxed text-zinc-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-brand-primary py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 size-[28rem] rounded-full bg-white/10 blur-3xl" />
      <div className="relative container mx-auto grid grid-cols-1 gap-12 px-6 sm:px-12 lg:grid-cols-[1fr_1.6fr] lg:px-24">
        <div className="flex flex-col gap-3 lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase">
            Dudas
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="text-base text-white/80">
            Resolvemos las dudas más habituales. Si no encuentras la tuya,
            llámanos y te lo explicamos.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {homeFaqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              id={`faq-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
