import React from 'react'
import Banner from '../Components/Banner'
import DegitalMarketing from '../Components/DegitalMarketing'
import { Helmet } from 'react-helmet-async';
import StoryTell from '../Components/StoryTell';
import ImageGallary from '../Components/ImageGallary';



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Digital Marketing Agency, Web Design & SEO | Xceedbd</title>
        <meta name="description" content="This is the home page" />
      </Helmet>
      <Banner/>
      <DegitalMarketing/>
      <StoryTell/>
      <ImageGallary/>
    </div>
  )
}

export default Home
