import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/components/home/Home'
import AboutUs from '../src/components/about_us/AboutUs'
import ContactUs from '../src/components/contact-us/ContactUs'
import {NavbarWithMegaMenu} from '../src/components/navbarmegamenu/NavbarWithMegaMenu'
import Footer from '../src/components/footer/Footer'
function App() {
  return (
    <>
      <NavbarWithMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healy-gold-edition" element={''} />
        <Route path="/healy-holistic-edition" element={''} />
        <Route path="/healy-resonance-edition" element={''} />
        <Route path="/healy-resonance-plus-edition" element={''} />
        <Route path="/healy-professional-edition" element={''} />
        <Route path="/maghealy-classic-edition" element={''} />
        <Route path="/maghealy-professional-edition" element={''} />
        <Route path="/coil" element={''} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/whatis-healy" element={''} />
        <Route path="/campaigns" element={''} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
