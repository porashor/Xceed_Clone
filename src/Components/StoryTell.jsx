import React from 'react'
import bbd from '../assets/story1.jpg'
import Header from '../Components/Header'
const StoryTell = () => {
  const styleImg = {
    backgroundImage: `url(${bbd})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  return (
    <div className='py-2 relative z-1' style={styleImg}>
      {/* overlay  */}
      <div className='absolute top-0 z-2 left-0 w-full h-full bg-[#000000c6]'></div>
      {/* container section  */}
      <div className='w-[80%] relative mx-auto py-10 text-white grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-10'>
        {/* image section  */}
        <div className='flex items-center justify-center'>
          <img src={bbd} alt="" />
        </div>
        {/* details section  */}
        <div className='space-y-10 text-xl '>
          {/* header section  */}
          <Header stylex={`text-[#fff]`}>Our Story</Header>
          {/* para */}
          <p>Xceed Bangladesh Ltd. is a leading digital marketing company in Bangladesh that provides high-quality, affordable web design and software development services to businesses of all sizes. Founded in 2008 by Sarwar Abdullah and Moin Uddin, the company has grown rapidly through its innovative approach and commitment to providing excellent customer service.</p>
          <p>XceedBD works closely with various organizations, including small businesses, large corporations, educational institutions, service organizations, and government agencies. The company’s team of experienced professionals has a proven track record of success in delivering high-quality projects on time and within budget.</p>
          <p>XceedBd is committed to providing its clients with the highest level of service. The company offers a 100% satisfaction guarantee on all services, and its team is always available to answer questions and provide support. The company’s headquarters is located in Agrabad, Chittagong, Bangladesh. However, XceedBD serves clients all over the world. XceedBd is the perfect choice if you are looking for a reliable and experienced IT partner.</p>
        </div>
      </div>
    </div>
  )
}

export default StoryTell
