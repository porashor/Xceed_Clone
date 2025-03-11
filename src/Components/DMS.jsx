import React from 'react'
import { PPCdata, seoData, SocialMarketingData, webDesign } from '../Data/RewardData'

const DMS = () => {
  return (
    <div className='bg-[#297EBB] py-20 text-white'>
        {/* header  */}
        <div className='text-center text-4xl md:text-5xl xl:text-6xl py-10 font-semibold'>Digital Marketing Services</div>
      {/* container  */}
      <div className='w-[90%] mx-auto flex items-center justify-between gap-5'>
        <div className='hover:bg-yellow-600 py-5 px-3 w-full min-h-[300px] space-y-4'>
            {/* header  */}
            <div className='text-3xl'>Web Design</div>
            <div className='space-y-2 text-xl'>
                {webDesign.map((item, index)=>(
                    <div key={index} className=''>
                        <a href={item.links}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
        <div className='hover:bg-yellow-600 py-5 px-3 w-full min-h-[300px] space-y-4'>
            {/* header  */}
            <div className='text-3xl'>Search Engine Optimization</div>
            <div className='space-y-2 text-xl'>
                {seoData.map((item, index)=>(
                    <div key={index} className=''>
                        <a href={item.links}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
        <div className='hover:bg-yellow-600 py-5 px-3 w-full min-h-[300px] space-y-4'>
            {/* header  */}
            <div className='text-3xl'>Pay Per Click Advertising</div>
            <div className='space-y-2 text-xl'>
                {PPCdata.map((item, index)=>(
                    <div key={index} className=''>
                        <a href={item.links}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
        <div className='hover:bg-yellow-600 py-5 px-3 w-full min-h-[300px] space-y-4'>
            {/* header  */}
            <div className='text-3xl'>Social Media Marketing</div>
            <div className='space-y-2 text-xl'>
                {SocialMarketingData.map((item, index)=>(
                    <div key={index} className=''>
                        <a href={item.links}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default DMS
