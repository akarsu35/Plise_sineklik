import './App.css'
import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/components/home/Home'
import AboutUs from '../src/components/about_us/AboutUs'
import ContactUs from '../src/components/contact-us/ContactUs'
import {NavbarWithMegaMenu} from '../src/components/navbarmegamenu/NavbarWithMegaMenu'
import Footer from '../src/components/footer/Footer'
import Campaigns from './components/campaigns/Campaigns'
import implementations from './datas/implementations'
import Duble from './utils/implemantations/Duble'
import Fransiz from './utils/implemantations/Fransiz'
import Kapi from './utils/implemantations/Kapi'
import Pencere from './utils/implemantations/Pencere'
import Surgulu from './utils/implemantations/Surgulu'


function App() {
  console.log(implementations[3])
  return (
    <>
      <Helmet>
        <title>Plise-Sineklik | Eviniz artık daha sessiz</title>
        <meta
          name="description"
          content="Plise sineklik Antalya olarak hizmet sunmaktayız"
        />
        <meta name="keywords" content="plise, sineklik, antalya" />
      </Helmet>

      <NavbarWithMegaMenu />
      <Routes>
        <Route path={implementations[0].path} element={<Duble />} />
        <Route path={implementations[1].path} element={<Pencere />} />
        <Route path={implementations[2].path} element={<Surgulu />} />
        <Route path={implementations[3].path} element={<Kapi/>} />
        <Route path={implementations[4].path} element={<Fransiz/>} />
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
