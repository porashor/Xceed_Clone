import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Getstart = () => {
  return (
    <div className='py-20 bg-[#297EBB] text-white' > 
      {/* container section  */}
      <div className='w-[90%] mx-auto flex items-center justify-between gap-20'>
        {/* form section  */}
        <div className='w-1/2'>
          {/* header of a form  */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-center py-5 md:py-10'>Get Started</h1>
          <form action="#" className='text-xl text-black flex flex-col items-center justify-center gap-6'>
            {/* name input  */}
            <input type="text" placeholder='Full Name*' className='py-3 px-4 w-full rounded-md outline-none border border-slate-400 bg-white' required/>
            {/* email input  */}
            <input type="email" placeholder='Email Address*' className='py-3 px-4 w-full rounded-md outline-none border border-slate-400 bg-white' required/>
            {/* phone number input  */}
            <input type="phone" placeholder='Phone Number*' className='py-3 px-4 w-full rounded-md outline-none border border-slate-400 bg-white' required/>
            {/* Company input  */}
            <input type="text" placeholder='Company' className='py-3 px-4 w-full rounded-md outline-none border border-slate-400 bg-white' />
            {/* other opt dropdown select input  */}
            <select name="" id="" className='py-3 px-4 w-full rounded-md outline-none border border-slate-400 bg-white'>
              <option value="1">Other</option>
              <option value="2">Search Engine Optimization</option>
              <option value="3">Pay per click marketing</option>
              <option value="4">Social Media Menegement</option>
              <option value="5">Web design and developent</option>
            </select>
            {/* name input  */}
            <textarea type="text-area" placeholder='How can I help you?...' className='py-3 px-4 h-[150px] w-full rounded-md outline-none border border-slate-400 bg-white' />
            {/* submit button here  */}
            <div className='text-white bg-yellow-600 font-bold rounded-md py-2 text-center px-3 flex items-center justify-center'>Submit <BsArrowRight className='font-extrabold'/></div>
          </form>
        </div>
        {/* details section  */}
        <div className='w-1/2 flex flex-col items-start justify-end gap-6'>
          <p className='text-5xl lg:text-6xl'>
            Ready to speak with a marketing expert?
          </p>
          <p className='font-bold text-6xl lg:text-7xl'>
            Give us a ring
          </p>
          <p className='text-yellow-600 text-6xl lg:text-7xl'>
            01*********
          </p>
          <ul className='text-5xl list-[circle] flex flex-col gap-6'>
            <li>Leading Digital Marketing Agency</li>
            <li>900+ Websites Launched</li>
            <li>$100M+ Client Revenue Generated</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Getstart
