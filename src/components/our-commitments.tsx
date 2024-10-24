import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const OurCommitments = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <div className="flex items-stretch gap-20 justify-center flex-col sm:flex-row h-max">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className='rounded-lg shadow space-y-2 bg-slate-50 p-4 sm:p-6'>
              <h2 className="font-medium text-4xl sm:text-6xl">245%</h2>
              <p className="text-sm text-muted-foreground">More revenues for the brand</p>
            </div>
    
            <div className='rounded-lg shadow space-y-2 bg-slate-50 p-4 sm:p-6'>
              <h2 className="font-medium text-4xl sm:text-6xl">130+</h2>
              <p className="text-sm text-muted-foreground">Audiences Reached</p>
            </div>
    
            <div className='rounded-lg shadow space-y-2 bg-slate-50 p-4 sm:p-6'>
              <h2 className="font-medium text-4xl sm:text-6xl">50+</h2>
              <p className="text-sm text-muted-foreground">Brand trust Us</p>
            </div>
    
            <div className='rounded-lg shadow space-y-2 bg-slate-50 p-4 sm:p-6'>
              <h2 className="font-medium text-4xl sm:text-6xl">24+</h2>
              <p className="text-sm text-muted-foreground">
                worldwide Awards
              </p>
            </div>
    
          </div>
          <div className="flex flex-col  h-auto items-start space-y-6 sm:space-y-0">
            <div className='flex-1 space-y-4'>
              <h2>Commitments</h2>
              <p className='text-muted-foreground'>
                We are committed to work with you colaboratively to understand <br /> your goals and create a strategy
                that will acheive them.
              </p>
            </div>
            <Button variant={"link"} className="text-primary p-0 text-md font-medium">
              Learn More <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCommitments