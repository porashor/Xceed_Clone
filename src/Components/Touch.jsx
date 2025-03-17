import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'

const Touch = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 items-center justify-between'>
      {/* details section  */}
      <div className='w-[80%] flex flex-col items-end justify-between gap-4'>
        {/* header  */}
        <h1 className='text-center text-4xl md:text-6xl lg:text-7xl'>Get In Touch</h1>
        {/* address  */}
        <div className='flex items-start justify-center gap-2'>
            <BiLocationPlus/>
            <div>
                <h1>Address</h1>
                <div>
                    <p>Xceed Bangladesh LTD.</p>
                    <p>Chattogram Software Technology Park </p>
                    <p>(Level 9),</p>
                    <p>Agrabad, Chattogram – 4100</p>
                </div>
            </div>
        </div>
        {/* call section  */}
      </div>
      {/* map sections  */}
      <div>map section</div>
    </div>
  )
}

export default Touch
