import React from 'react'
import amazon from "/public/partners-logo/amazon.png"
import shopify from "/public/partners-logo/shopify.png"
import asana from "/public/partners-logo/asana.png"
import spotify from "/public/partners-logo/spotify.png"
import paypal from "/public/partners-logo/paypal.png"
import evernote from "/public/partners-logo/evernote.png"
import google from "/public/partners-logo/google.png"
import adobe from "/public/partners-logo/adobe.png"
import microsoft from "/public/partners-logo/microsoft.png"
import uber from "/public/partners-logo/uber.png"
import Image from 'next/image'


const Partner = () => {
  return (
      <div className='py-20'>
          <div className="container">
              
        <h2 className='text-center'>Companies We <br /> Work With</h2>
        
        <div className='grid grid-cols-2 sm:grid-cols-5 place-content-center justify-items-center gap-8 py-10'>
            <Image className='w-6/12 h-auto object-cover' src={shopify} alt='shopify' />
            <Image className='w-6/12 h-auto object-cover' src={asana} alt='asana' />
            <Image className='w-6/12 h-auto object-cover' src={spotify} alt='spotify' />
            <Image className='w-6/12 h-auto object-cover' src={paypal} alt='amazon' />
            <Image className='w-6/12 h-auto object-cover' src={evernote} alt='amazon' />
            <Image className='w-6/12 h-auto object-cover' src={google} alt='amazon' />
            <Image className='w-6/12 h-auto object-cover' src={microsoft} alt='amazon' />
            <Image className='w-6/12 h-auto object-cover' src={uber} alt='amazon' />
            <Image className='w-6/12 h-auto object-cover' src={adobe} alt='amazon' />
            <Image className='w-6/12 h-auto object-cover' src={amazon} alt='amazon' />
        </div>
          </div>
    </div>
  )
}

export default Partner