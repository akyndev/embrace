import CallToAction from "@/components/call-to-action"
import FAQs from "@/components/faqs"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import OurCommitments from "@/components/our-commitments"
import OurWork from "@/components/our-work"
import Partner from "@/components/partner"
import StartCallToAction from "@/components/start-call-to-action"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Partner />
      <OurCommitments />
      <HowItWorks />
      <OurWork />
      <CallToAction />
      <Team />
      <Testimonials />
      <StartCallToAction />
      <FAQs />
      <Footer />
    </main>
  )
}
