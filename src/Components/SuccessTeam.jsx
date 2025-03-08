import React from 'react'
import image from "../assets/success.jpg"
import Header from "../Components/Header"
import { BsStarFill } from 'react-icons/bs'
import cer1 from "../assets/certificate/c1.jpg"
import cer2 from "../assets/certificate/c2.jpg"

navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => console.error("Error fetching location:", error)
  );


const SuccessTeam = () => {
  return (
    <div className='bg-slate-100 py-20 '>
       {/* container section  */}
       <div className='w-[90%] mx-auto py-5 flex items-center justify-between gap-5 '>
        {/* details section  */}
        <div className='w-[30%] flex flex-col items-start justify-between gap-3'>
            {/* header section  */}
            <Header stylex={"text-start px-3"}>The team you need to succeed</Header>
            {/* paragraph  */}
            <p className='text-2xl text-slate-600 py-5'>Fueled by passion and a commitment to our clients, our team of over 100 digital experts drives performance for small businesses and Fortune 500 companies alike.</p>
            {/* review card  */}
            <a href="#" className='bg-white w-full h-[100px] flex items-center justify-center rounded-xl shadow-md shadow-[#999]'>
                <div className='flex items-center justify-center gap-4 text-xl uppercase font-bold'>
                    <p>Excellent</p>
                    <div className='flex'>
                        <BsStarFill className='text-yellow-400'/>
                        <BsStarFill className='text-yellow-400'/>
                        <BsStarFill className='text-yellow-400'/>
                        <BsStarFill className='text-yellow-400'/>
                        <BsStarFill className='text-yellow-400'/>
                    </div>
                </div>
            </a>
            {/* certicication part  */}
            <div className='flex items-center justify-between gap-3'>
                <img src={cer1} alt="" className='w-[150px] ' />
                <img src={cer2} alt="" className='w-[150px] ' />
            </div>
        </div>
        {/* image section  */}
        <div className='w-[70%]'>
            <img src={image} alt="" />
        </div>
       </div>
    </div>
  )
}

export default SuccessTeam
