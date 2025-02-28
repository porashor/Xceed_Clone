import React, { useState } from 'react'
import navdata from '../Data/navdata'
import { MdArrowDropDown } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

const Navber = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='flex justify-between items-center py-3'>
      {/* logo section  */}
        <div className='text-2xl font-bold text-yellow-800'>
            <img src="https://xceedbd.com/wp-content/uploads/2023/06/xceed-bangladesh-logo.png" alt="" />
        </div>
        {/* nav section  */}
        <div className=' group flex space-x-4 text-[#4B4646]'>
            {navdata.map((item, index)=>(
              <div key={index} className='flex items-center justify-center gap-1'>
                <div className='flex items-center gap-1 relative'>
                  {/* main nav  */}
                  <div className='py-3'>
                    <a href={item.url} className='hover:text-yellow-500 text-3xl active:text-yellow-500'>
                      {item.title}
                    </a>
                  </div>
                  {/* dropdown icons  */}
                  <div className={`${item.subMenu ? "block" : "hidden"}`}><MdArrowDropDown/></div>
                  {item.subMenu ? <div className='hidden'>a</div> : <div></div>}
              </div>
            </div>))}
        </div>
        <div className='flex items-center justify-center gap-2 text-white text-[15px]'>
            <a href='#' className='bg-blue-700 p-4 rounded-md'><FaFacebook/></a>
            <a href='#' className='bg-blue-400 p-4 rounded-md'><BsTwitter/></a>
            <a href='#' className='bg-blue-600 p-4 rounded-md'><LiaLinkedin/></a>
        </div>
    </div>
  )
}

export default Navber
