import React from 'react'
import Banner from '../Components/Banner'
import DegitalMarketing from '../Components/DegitalMarketing'
import { Helmet } from 'react-helmet-async';
import StoryTell from '../Components/StoryTell';
import ImageGallary from '../Components/ImageGallary';
import SuccessTeam from '../Components/SuccessTeam';
import MobileContact from '../Components/MobileContact';
import ShareLoc from '../Components/ShareLoc';
import Getstart from '../Components/Getstart';



const Home = () => {
  return (
    <div>
      {/* page title section  */}
      <Helmet>
        <title>Digital Marketing Agency, Web Design & SEO | Xceedbd</title>
        <meta name="description" content="This is the home page" />
      </Helmet>
      {/* main page section  */}
      <Banner/>
      <DegitalMarketing/>
      <StoryTell/>
      <ImageGallary/>
      <SuccessTeam/>
      <MobileContact/>
      <ShareLoc/>
      <Getstart/>
    </div>
  )
}

export default Home
