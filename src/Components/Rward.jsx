import React from 'react'




const Rward = ({Image,overview, name1, name2, css}) => {
  return (
    <div className='py-20'>
      {/* container section   */}
      <div className='w-[90%] mx-auto flex items-center justify-between gap-5'>
        {/* image section  */}
        <div className={`w-1/2 ${css.order ? "order-2" : "order-1"}`}>
            <img src={Image} alt="" />
        </div>
        {/* details section  */}
        <div className={`flex flex-col items-start justify-center gap-5 w-1/2 ${css.order ? "order-1" : "order-2"}`}>
            <div className='font-bold text-xl'>{overview}</div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl `}>{name1}</h1>
            <p className='text-xl text-slate-600'>{name2}</p>
        </div>
      </div>
    </div>
  )
}

export default Rward
