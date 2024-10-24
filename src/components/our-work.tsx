import Image from "next/image"
import { Button } from "./ui/button"
import apple from "/public/apple.png"
import cocacola from "/public/cocacola.png"
import nike from "/public/nike.png"


const OurWork = () => {
  return (
    <div className="py-16">
      <div className="container">
        <h2 className="text-center">Our Works</h2>
        <p className="text-black/60 text-center text-lg font-medium">A glimpse of portfolio</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-fit mx-auto py-10">
          <div className="text-center space-y-4">
            <Image className="rounded-3xl" src={apple} alt="apple mac" />
            <h5 className="font-medium text-lg">Apple</h5>
          </div>
          <div className="text-center space-y-4">
            <Image className="rounded-3xl" src={cocacola} alt="coca cola" />
            <h5 className="font-medium text-lg">Coca cola</h5>
          </div>
          <div className="text-center space-y-4">
            <Image className="rounded-3xl" src={nike} alt="nike shoe" />
            <h5 className="font-medium text-lg">Nike</h5>

          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button className="mx-auto w-44 h-12">See More</Button>
        </div>
      </div>
    </div>
  )
}

export default OurWork
