import React from 'react'
import { Button } from './ui/button'

const CallToAction = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="relative  rounded-[2rem] p-14 sm:p-16 sm:px-24 text-white overflow-hidden">
          <div className="flex items-center justify-between flex-col sm:flex-row space-y-8">
            <h2 className="sm:text-5xl text-4xl text-left w-full font-medium leading-tight sm:leading-snug">
              Elevate Your <br /> Brand Today!
            </h2>

            <div className="space-y-6">
              <p>
                Ready to transform your digital dresence? Let&apos;s create magic together! book our services now!
              </p>
              <Button variant={"secondary"} className="h-16 w-48 text-lg">
                {" "}
                Book A Call
              </Button>
            </div>
          </div>

          <div className="absolute bg-blue inset-0 -z-20"></div>
          <div className="bg-gradient-to-r from-[#8399E9] to-blue h-80 w-80 rounded-full absolute top-1/2 -translate-y-1/2 -left-28 -z-10"></div>
          <div className="bg-gradient-to-r from-[#8399E9] to-blue h-80 w-80 rounded-full absolute top-1/2 -translate-y-1/2 left-96 -z-10"></div>
          <div className="bg-gradient-to-r from-blue to-[#8399E9] h-80 w-80 rounded-full absolute top-1/2 -translate-y-1/2 left-12 -z-10"></div>
          <div className="bg-gradient-to-r from-blue to-[#8399E9] h-80 w-80 rounded-full absolute top-1/2 -translate-y-1/2 -left-12 -z-10"></div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction