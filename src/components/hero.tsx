import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import crown from "/public/crown.png"
import darkGirl from "/public/dark-girl.png"
import man from "/public/man.png"
import pencil from "/public/pencil.png"
import pinch from "/public/pinch.png"
import smile from "/public/smile.png"
import smilyGirl from "/public/smily-girl.png"
import whiteGirl from "/public/white-girl.png"
import woman from "/public/woman-technologist-emoji.png"

const Hero = () => {
  return (
    <div className="container py-16 sm:py-0">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="font-semibold text-6xl text-center sm:text-left sm:text-8xl">
            We Take <br /> Care Of <br /> Your Brand
          </h1>
          <p className="font-medium text-lg sm:text-xl text-muted-foreground w-8/12 sm:w-full text-center sm:text-left mx-auto">
            We care about your work and we care about your clients.
          </p>
          <div className="flex items-center gap-3">
            <Input className="px-8 h-16 max-w-96" placeholder="Enter Your Email" />
            <Button className="w-36 h-16">Let&apos;s Talk</Button>
          </div>
        </div>

        <div className="w-fit scale-75 sm:scale-[.85]">
          <div className="flex items-center justify-center">
            <Image
              src={whiteGirl}
              alt="white-girl"
              className="rounded-full h-[240px] w-[367px] object-cover object-top"
            />
            <div className="relative">
              <Image src={smilyGirl} alt="white-girl" className="rounded-full h-[240px] w-[240px] object-cover" />

              <div className="absolute -top-14 -left-14 scale-75">
                <div className="relative">
                  <svg width="151" height="111" viewBox="0 0 151 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M90.1322 2.25593C114.159 -5.55837 139.988 7.57954 147.822 31.6003C154.475 51.9994 146.011 73.687 128.592 84.549L141.033 104.255L99.1886 95.524L60.0694 108.247C36.0422 116.061 10.2136 102.923 2.37955 78.9023C-5.45451 54.8815 7.67258 29.0741 31.6998 21.2598L90.1322 2.25593Z"
                      fill="black"
                    />
                  </svg>

                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-[18deg]">
                    <Image className=" w-28 " src={smile} alt="crown" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-full h-[190px] w-[240px] flex items-center justify-center bg-purple">
              <Image className=" w-28 " src={pencil} alt="crown" />
            </div>
            <Image src={darkGirl} alt="white-girl" className="rounded-full h-[190px] w-[367px] object-cover" />
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image src={man} alt="man" className="rounded-full h-[240px] w-[240px] object-cover" />

              <div className="absolute -top-14 -right-14 scale-75">
                <div className="relative">
                  <svg width="151" height="111" viewBox="0 0 151 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M60.0694 2.25593C36.0422 -5.55837 10.2136 7.57954 2.37955 31.6003C-4.27336 51.9994 4.19071 73.687 21.6098 84.549L9.16885 104.255L51.0131 95.524L90.1322 108.247C114.159 116.061 139.988 102.923 147.822 78.9023C155.656 54.8815 142.529 29.0741 118.502 21.2598L60.0694 2.25593Z"
                      fill="black"
                    />
                  </svg>
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-[18deg]">
                    <Image className=" w-28 " src={pinch} alt="crown" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full flex items-center justify-center h-[240px] w-[183px] bg-yellow">
              <Image className=" w-28 " src={woman} alt="crown" />
            </div>
            <div className="rounded-full  h-[240px] w-[183px] bg-orange text-7xl flex items-center justify-center">
              <Image className="w-24 " src={crown} alt="crown" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
