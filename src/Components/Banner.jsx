import React from 'react'
import video1 from '../assets/video1.mp4'




const Banner = () => {
  return (
    <div className='w-full h-[100vh] bg-[#0d0d3a9c]  relative z-1 flex  items-center justify-center overflow-hidden'>
      {/* container section  */}
      <div className='w-[80%] mx-auto text-white text-center pt-20 z-10 relative space-y-6'>
        <h1 className='text-7xl '>Boost Your Marketing Reach</h1>
        <h1 className='text-5xl '>Leading Digital Marketing Agency in Bangladesh</h1>
        {/* this is a slide shower  */}
        <p>We are passionate about designing beautiful websites.learning new technologies.Facebook Advertising.our clients success.challenging our client.helping brands grow.a great cup of coffee.writing clean code.digital marketing.conversion rate optimization.custom development.innovation.</p>
      </div>
      <video className='w-full object-center absolute top-0 right-0 z-[-40]' loop autoPlay muted src={video1}></video>
    </div>
  )
}

export default Banner
