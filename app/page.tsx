import { Nav } from "@/components/nav"
import { CallButton } from "@/components/call-button"
import { Hero } from "@/components/sections/hero"
import { Ticker } from "@/components/sections/ticker"
import { Areas } from "@/components/sections/areas"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Process } from "@/components/sections/process"
import { Faqs } from "@/components/sections/faqs"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { homeFaqs } from "@/lib/faqs"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <div className="flex min-h-svh flex-col">
          <Hero />
        </div>
        <Ticker />
        <Areas />
        <Services />
        <About />
        <Process />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <CallButton />
    </>
  )
}
