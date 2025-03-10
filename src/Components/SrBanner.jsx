import React from 'react'
import BannerSec from "../assets/bannerSr.jpg"
const SrBanner = () => {
  const bgStyles = {
    backgroundImage: `url(${BannerSec}),`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  return (
    <div style={bgStyles} className='bg-[#0558cb75] text-white min-h-[120vh] flex items-center justify-center py-20'>
      {/* container section   */}
      <div className='w-[90%] mx-auto flex items-center justify-between gap-5'>
        <div className='w-2/3 flex flex-col items-start justify-center gap-5'>
          <div className='text-2xl lg:text-3xl text-yellow-600'>Grow Your Business With Scalable Digital Marketing</div>
          <div className='text-4xl lg:text-6xl'>Outsmart the competition with best-in-class digital marketing services</div>
          <div className='text-lg md:text-xl'>Get more traffic. Acquire more customers. Sell more stuff. XCEEDBD offers proven strategies & reliable execution to exceed your marketing goals.</div>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-center gap-5'>
          {/* main form here  */}
          <div className='bg-black  h-[100vh] flex flex-col items-start justify-center text-xl gap-5'>
            <div className='text-3xl lg:text-6xl text-center '>Improve Results</div>
            <div className='text-xl text-center mx-auto'>with a better website today</div>
            {/* progress area  */}
            <div className='flex items-center justify-between gap-5 w-full px-2'>
              <div className=' w-[80px] aspect-square border-2 flex items-center justify-center rounded-full'>1</div>
              <hr  className='w-[100%] border-1'/>
              <div className=' w-[80px] aspect-square border-2 flex items-center justify-center rounded-full'>2</div>
            </div>
            {/* form area  */}
            <form action="#" className='w-[90%] mx-auto flex flex-col items-start justify-center gap-4'>
              <input type="text" placeholder='Full Name*' className='py-2 px-4 w-full rounded-md outline-none border border-slate-400 bg-white' requared />
              <input type="email" placeholder='Enter Email*' className='py-2 px-4 w-full rounded-md outline-none border border-slate-400 bg-white' requared />
              <input type="number" placeholder='Enter phone number*' className='py-2 px-4 w-full rounded-md outline-none border border-slate-400 bg-white' requared />
              <input type="submit" value="Submit" className='py-2 px-4 w-full rounded-md outline-none border border-slate-400 bg-[#20d66f]' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SrBanner
