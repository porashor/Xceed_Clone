import React, { useState } from 'react'
import navdata from '../Data/navdata'
import { MdArrowDropDown } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

const Navber = () => {
  const [isOpen, setIsOpen] = useState(0)
  const [isOpen1, setIsOpen1] = useState(0)

  return (
    <div className='flex justify-between items-center py-3 relative z-50 bg-white shadow-lg'>
      {/* logo section  */}
        <div className='text-2xl font-bold text-yellow-800'>
            <a href="/">
              <img src="https://xceedbd.com/wp-content/uploads/2023/06/xceed-bangladesh-logo.png" alt="" />
            </a>
        </div>
        {/* nav section  */}
        <div className=' group flex space-x-4 text-[#4B4646] relative z-100'>
            {navdata.map((item, index)=>(
              <div key={index} className='flex items-center justify-center gap-1'>
                <div onMouseEnter={()=>setIsOpen(index)} onMouseLeave={()=>setIsOpen(4000)} className={`flex items-center gap-1 relative `}>
                  {/* main nav  */}
                  <div className='py-3'>
                    {/* main links  */}
                    <a href={item.url} className='hover:text-yellow-500 text-3xl active:text-yellow-500'>
                      {item.title}
                    </a>
                    {item.subMenu && <div className={`absolute top-full left-0 bg-white shadow-lg  rounded-md w-[280px] ${isOpen === index ? "block" : "hidden"}`}>
                      {item.subMenu.map((subItem, index)=>(
                        <div key={index} onMouseEnter={()=>setIsOpen1(index)} onMouseLeave={()=>setIsOpen1(4000)} className={` relative px-6 py-2 hover:bg-slate-500 hover:text-white  ${index % 2 === 0 ? "bg-slate-100 px-2" : "border-b border-gray-200"}`}>
                          {/* sublinks  */}
                          <a href={subItem.url} className='text-2xl'>
                            {subItem.title}
                          </a>
                          {/* drop  */}
                          {subItem.subMenu && <div className={`absolute top-0 left-[280px] bg-white shadow-lg rounded-md ${isOpen1 === index ? "block" : "hidden"}`}>
                            {subItem.subMenu.map((subSubItem, index)=>(
                              <div key={index} className={` relative text-[#4B4646] text-2xl w-[360px] px-6 py-2 hover:bg-slate-500 hover:text-white  ${index % 2 === 0 ? "bg-slate-100 px-2" : "border-b border-gray-200"}`}>
                                <a href={subSubItem.url}>{subSubItem.title}</a>
                              </div>
                            ))}
                          </div>}
                        </div>
                      ))}
                    </div>}
                  </div>
                  {/* dropdown icons  */}
                  <div className={`${item.subMenu ? "block" : "hidden"}`}><MdArrowDropDown/></div>
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
