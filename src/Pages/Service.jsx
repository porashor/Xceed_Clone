import React from 'react'
import { Helmet } from 'react-helmet-async';
import SrBanner from '../Components/SrBanner';
import Rward from '../Components/Rward';
import DMS from '../Components/DMS';
import reImage  from "../assets/reward.jpg"
import customerImage from "../assets/customerWeb.jpg"
import GrowImage from "../assets/grow.jpg"


const Service = () => {
  const cssR = {
    order: false,
    color: "text-black"
  }
  const cssC = {
    order: true,
    color: "text-black"
  }
  return (
    <div>
      <Helmet>
        <title>Digital Marketing Services - Website Design and Software Development Company</title>
      </Helmet>
      <SrBanner/>
      <Rward overview={""} css={cssR} Image={reImage} name1={"Bangladesh's #1 Rated Digital Marketing Agency"} name2={"With XCEEDBD, you get the best services, processes, and people to grow your business."}/>
      <DMS/>
      <Rward overview={"Results-Driven Website Design"} css={cssC} Image={customerImage} name1={"Get a beautiful website that wins customers."} name2={"Elevate your business with a trusted website that your customers will love. Our award-winning website designers will represent your brand in the best possible way. Your website will load extremely fast and look great on all devices."}/>
      <Rward overview={"Certified Pay-Per-Click Advertising"} css={cssR} Image={GrowImage} name1={"Improve your ROI with Scalable PPC marketing."} name2={"XCEEDBD is rated in the top 1% of digital marketing agencies. Blending performance with exceptional customer service, our PPC specialists are some of the best in the industry with a track record for growing successful businesses."}/>
    </div>
  )
}

export default Service
