import React from 'react'
import bbd from "../assets/bg-contact.jpg"
import { BsArrowRight } from 'react-icons/bs'



const ContactUs = () => {

    const styleImg = {
    backgroundImage: `url(${bbd})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    }

  return (
    <div style={styleImg} className='py-20 relative z-0'>
      {/* overlay section  */}
      <div className='bg-[#254cfa7d] z-1 w-full h-full top-0 left-0 absolute'></div>
      {/* main container section  */}
      <div className='z-2 relative text-white w-[90%] mx-auto'>
        {/* header section  */}
        <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-center xl:text-6xl py-10'>Contact Us</div>
        {/* form area  */}
        <div className='w-[90%] md:w-[50%] lg:w-[40%] mx-auto'>
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
      </div>
    </div>
  )
}

export default ContactUs
