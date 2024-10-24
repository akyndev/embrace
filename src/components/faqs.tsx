import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const faqs = [
  {
    question: "How do I sign up for the project?",
    answer: "Yes, there are multiple ways we can do that without having to use web builder"
  },
  {
    question: "What that thing I should prepare before starting?",
    answer: "Yes, there are multiple ways we can do that without having to use web builder"
  },
  {
    question: "Does my company need help for marketing advices?",
    answer: "Yes, there are multiple ways we can do that without having to use web builder"
  },
  {
    question: "Would I get customer support after project completion?",
    answer: "Yes, there are multiple ways we can do that without having to use web builder"
  },
]

const FAQs = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="flex items-start justify-center gap-16 flex-col sm:flex-row">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(({ question, answer }, i) => (
              <AccordionItem value={`item-${i}`} key={question} className="last:border-b">
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex flex-col justify-between h-full w-full space-y-4">
            <h2>How Can We Help You?</h2>
            <p className="font-medium text-black/60">
              Follow our newsletter. We will regularly update <br /> our lastest project and availability.
            </p>
            <div className="flex items-center gap-3">
              <Input className="px-8 h-12 max-w-80" placeholder="Enter Your Email" />
              <Button className="w-36 h-12">Let&apos;s Talk</Button>
            </div>

            <Link href={"#"} className="text-primary flex items-center justify-start gap-2">
              <Button variant={"link"} className="font-medium text-md">
                More FAQ <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs
