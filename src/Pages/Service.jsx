import React from 'react'
import SrBanner from '../Components/SrBanner';
import Rward from '../Components/Rward';
import DMS from '../Components/DMS';
import reImage  from "../assets/reward.jpg"
import customerImage from "../assets/customerWeb.jpg"
import GrowImage from "../assets/grow.jpg"
import seoImage from "../assets/seo.jpg"
import BandAware from "../assets/bandAwareness.jpg"
import Trust from '../Components/Trust';
import TrestDP from '../Components/TrestDP';
import Getstart from '../Components/Getstart';

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
      <SrBanner/>
      <Rward overview={""} css={cssR} Image={reImage} name1={"Bangladesh's #1 Rated Digital Marketing Agency"} name2={"With XCEEDBD, you get the best services, processes, and people to grow your business."}/>
      <DMS/>
      <Rward overview={"Results-Driven Website Design"} css={cssC} Image={customerImage} name1={"Get a beautiful website that wins customers."} name2={"Elevate your business with a trusted website that your customers will love. Our award-winning website designers will represent your brand in the best possible way. Your website will load extremely fast and look great on all devices."}/>
      <Rward overview={"Certified Pay-Per-Click Advertising"} css={cssR} Image={GrowImage} name1={"Improve your ROI with Scalable PPC marketing."} name2={"XCEEDBD is rated in the top 1% of digital marketing agencies. Blending performance with exceptional customer service, our PPC specialists are some of the best in the industry with a track record for growing successful businesses."}/>
      <Rward overview={"Proven Organic SEO"} css={cssC} Image={seoImage} name1={"Drive more organic traffic to your website."} name2={"Get more qualified traffic on the search terms that matter most to your business. We achieve measurable results by working on every variable that impacts SERPs. Trust our proven track record to maximize your visibility online. Set your business up for long-term success."}/>
      <Rward overview={"Engaging Social Media Management"} css={cssR} Image={BandAware} name1={"Raise brand awareness and expand your influence."} name2={"We tell your company’s story with original branded content. From custom graphics to commenting and boosting, our comprehensive solutions cover all aspects of your business’s social media presence."}/>
      <Trust/>
      <TrestDP/>
      <Getstart/>
    </div>
  )
}

export default Service
