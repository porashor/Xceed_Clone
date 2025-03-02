import React from 'react'
import Banner from '../Components/Banner'
import DegitalMarketing from '../Components/DegitalMarketing'
import { Helmet } from 'react-helmet-async';



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
      </Helmet>
      <Banner/>
      <DegitalMarketing/>
    </div>
  )
}

export default Home
