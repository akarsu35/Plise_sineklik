import './App.css'
import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/components/home/Home'
import AboutUs from '../src/components/about_us/AboutUs'
import ContactUs from '../src/components/contact-us/ContactUs'
import {NavbarWithMegaMenu} from '../src/components/navbarmegamenu/NavbarWithMegaMenu'
import Footer from '../src/components/footer/Footer'
import Campaigns from './components/campaigns/Campaigns'
function App() {
  return (
    <>
      <Helmet>
        <title>Plise-Sineklik | Eviniz artık daha sessiz</title>
        <meta
          name="description"
          content="Plise sineklik Antalya olarak hizmet sunmaktayız"
        />
        <meta
          name="keywords"
          content="plise, sineklik, antalya"
        />
      </Helmet>

      <NavbarWithMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
       
       
        <Route path="/about-us" element={<AboutUs />} />
        
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
