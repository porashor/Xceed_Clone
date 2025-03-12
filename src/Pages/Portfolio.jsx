import React from 'react'
import { Helmet } from 'react-helmet-async'
import { portfoliodata } from '../Data/PortfolioData'
import Getstart from '../Components/Getstart'



const Portfolio = () => {
  return (
    <div className=''>
      <Helmet>
        <title>Work - Website Design and Software Development Company</title>
      </Helmet>
      {/* header section  */}
      <div className='flex w-[80%] mx-auto flex-col items-center justify-center gap-5 py-10'>
        <h1 className='text-3xl lg:text-4xl font-bold text-yellow-600'>Our Portfolio</h1>
        <div className='text-xl lg:text-2xl text-center'>We have created, taken care of, and advertised hundreds of websites in the past 16 years. You can view our work by checking out the links below.</div>
      </div>
      {/* main portfolio section  */}
      <div className='w-[90%] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-4 '>
        {portfoliodata.map((item, index)=>(
          <a href={item.links} className=' flex flex-col items-start justify-start gap-4 border-[3px] border-slate-300 rounded-md p-3 shadow-xl' key={index}>
            {/* image section  */}
            <img src={item.image} className='w-full ' alt="" />
            {/* title section  */}
            <h1 className='text-2xl text-center font-bold'>{item.name}</h1>
            {/* details section  */}
            <p className='uppercase text-center text-xl text-slate-400'>{item.details}</p>
          </a>
        ))}
      </div>
      {/* get start  */}
      <Getstart/>
    </div>
  )
}

export default Portfolio
