import React from 'react'
import { trustDegitalData } from '../Data/DegitalData'

const TrestDP = () => {
  return (
    <div className='text-black py-20'>
      {/* container  */}
      <div className='w-[90%] mx-auto'>
        {/* header section  */}
        <h1 className='text-center py-10 text-4xl lg:text-5xl font-semibold'>Your Trusted Digital Marketing Partner</h1>
        {/* main section  */}
        <div className='flex items-center justify-between gap-5'>
            {trustDegitalData.map((item, index)=>(
                <div className='w-full h-full flex flex-col items-start justify-center gap-3' key={index}>
                    {/* image section  */}
                    <img src={item.Image} className='' alt="" />
                    {/* title section  */}
                    <h1 className='uppercase py-4 text-2xl font-semibold'>{item.title}</h1>
                    {/* details section  */}
                    <p className='text-xl text-slate-700'>{item.details}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TrestDP
