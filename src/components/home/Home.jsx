import { Helmet } from 'react-helmet'
import AboutUs from '../about_us/AboutUs'
import ContactUs from '../contact-us/ContactUs'
import Hero from '../hero/Hero'
import Works from '../works/Works'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ana Sayfa | Plise-Sineklik</title>
        <meta
          name="description"
          content="Antalya plise-sineklik için irtibata geçebilirsiniz"
        />
        <meta
          name="keywords"
          content="antalya, plise, sineklik , plise sineklik, ana sayfa"
        />
      </Helmet>
      <Hero />
      <Works />
      <AboutUs />
      <ContactUs />
    </>
  )
}
