import React from 'react'
import { foothernav } from '../Data/navdata'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Foother = () => {
  return (
    <div className='bg-black text-white py-5'>
      <div className='w-[90%] mx-auto flex items-center justify-between gap-3 text-xl'>
        {/* text  */}
        <div>Copyright © 2024 XCEED Bangladesh LTD.</div>
        {/* nav  */}
        <div className='flex items-center justify-center gap-5 py-5'>
            {foothernav.map((item, index)=>(
                <div key={index} className='flex items-center justify-center gap-2'>
                    <a href={item.links}>
                        {item.name}
                    </a>
                </div>
            ))}
        </div>
        {/* icon  */}
        <div className='flex items-center justify-center gap-5'>
            <FaFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            <BsYoutube/>
        </div>
      </div>
    </div>
  )
}

export default Foother
