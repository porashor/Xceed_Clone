import React from 'react'
import Navbar from './Components/Navber'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import NotFound from "./Pages/NotFound";
import SEO from "./Pages/SEO";
import Wdesign from "./Pages/Wdesign";
import Wdevelop from "./Pages/Wdevelop";
import Website from "./Pages/Website";
import Wmentain from "./Pages/Wmentain";
import Whosting from "./Pages/Whosting";
import Sorganic from "./Pages/Sorganic";
import Secom from "./Pages/Secom";
import Shealth from "./Pages/Shealth";
import Slocal from "./Pages/Slocal";
import Portfolio from "./Pages/Portfolio";
import Edevelop from "./Pages/Edevelop";
import Degital from "./Pages/Degital";
import Dppc from "./Pages/Dppc";
import Dfacebook from "./Pages/Dfacebook";
import Decom from './Pages/Decom';
import OurTeam from './Pages/OurTeam';
import { HelmetProvider } from 'react-helmet-async';
import Foother from './Components/Foother';

const App = () => {
  const helmetContext = {};
  return (
    <div className='relative'>
      <HelmetProvider context={helmetContext}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='service' element={<Service/>} />
          <Route path='seo' element={<SEO />} />
          <Route path='wdesign' element={<Wdesign />} />
          <Route path='wdevelop' element={<Wdevelop />} />
          <Route path='website' element={<Website />} />
          <Route path='wmentain' element={<Wmentain />} />
          <Route path='whosting' element={<Whosting />} />
          <Route path='sorganic' element={<Sorganic />} />
          <Route path='secom' element={<Secom />} />
          <Route path='shealth' element={<Shealth />} />
          <Route path='slocal' element={<Slocal />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='edevelop' element={<Edevelop />} />
          <Route path='degital' element={<Degital />} />
          <Route path='dppc' element={<Dppc />} />
          <Route path='dfacebook' element={<Dfacebook />} />
          <Route path='decom' element={<Decom />} />
          <Route path='ourteam' element={<OurTeam />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Foother/>
      </Router>
      </HelmetProvider>
    </div>
  )
}

export default App
