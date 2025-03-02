import React from 'react'
import Header from '../Components/Header'
import { DegitalData } from '../Data/DegitalData'
const DegitalMarketing = () => {
  return (
    <div>
      {/* container section  */}
      <div className='w-[80%] mx-auto py-10'>
        {/* header section  */}
        <Header>Results-driven Digital Marketing Expertise</Header>
        {/* main container section  */}
        <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {
            DegitalData.map((item,index)=>(
              <a href={item.URL} key={index} className='py-10 bg-slate-100 hover:bg-slate-300 transition-all duration-300 flex flex-col items-center justify-center gap-5'>
                {/* icons section  */}
                <div className='text-5xl text-yellow-600 font-bold'>
                  {item.icons}
                </div>
                {/* name section  */}
                <div className='text-3xl w-[70%] mx-auto font-bold text-center'>
                  {item.name}
                </div>
                {/* details section  */}
                <div className='text-2xl text-center '>
                  {item.details}
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DegitalMarketing
