import React from 'react'
import { BlogData } from '../Data/BlogData'
import { BsArrowRight } from 'react-icons/bs'

const Blog = () => {
  return (
    <div className='overflow-hidden'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none' className='fill-blue-200 w-[500%] object-cover h-[400px]'>
        <path d='M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z'></path>
      </svg>
      {/* main blog sections  */}
      <div className='grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-between'>
        {BlogData.map((item, index)=>(
          <div key={index} className='flex flex-col items-start justify-center gap-3'>
            {/* img section  */}
            <img src={item.image} alt="" className='w-full h-[300px] object-cover'/>
            {/* title section  */}
            <h1 className='text-4xl font-semibold text-slate-600 py-5 line-clamp-2'>{item.name}</h1>
            {/* btn section  */}
            <button className='capitalize text-yellow-600 text-2xl py-2 font-semibold flex items-center gap-2'>{item.btn} <BsArrowRight/> </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
