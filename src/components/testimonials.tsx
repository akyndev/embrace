"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import teamMember1 from "/public/team-member-1.png"
import man from "/public/man.png"
import whiteGirl from "/public/white-girl.png"

const testy = [
  {
    name: "Amelia Joseph",
    testimonial:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    image: teamMember1,
    role: "web developer"
  },
  {
    name: "John Robbin",
    testimonial:
      "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    image: man,
    role: "chief manager"
  },
  {
    name: "leo vikk",
    testimonial:
      "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    image: whiteGirl,
    role: "web designer"
  }
]


const Testimonials = () => {
  return (
    <div className="py-20 overflow-visible">
      <div className="container overflow-visible">
        <Carousel
          opts={{
            align: "start"
          }}
          className="w-full overflow-visible"
        >
          <div className="flex items-center justify-between pb-8">
            <h2 className="text-4xl sm:text-5xl">What Our Client Say About Us</h2>
            <div className="flex items-center gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="overflow-visible w-full">
            {testy.map(({ name, image, testimonial, role}, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-[40%] overflow-visible">
                <Testimonial index={index + 1} name={name} image={image} testimonial={testimonial} role={role} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials

const Testimonial = ({ name, image, role, testimonial }: { index: number, name: string, role: string, image: StaticImageData, testimonial: string }) => {
  return (
    <div className={`overflow-hidden bg-slate-50 rounded-3xl`}>
      <div className={cn(`p-8 space-y-6`)}>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <Image src={image} alt="string" />
          </div>
          <div className="flex-1">
            <h4 className="capitalize text-lg">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>

        <p className="text-muted-foreground">
          {testimonial}
        </p>
      </div>
    </div>
  )
}
