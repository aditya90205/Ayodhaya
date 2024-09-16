import About from '../components/About'
import Card from '../components/Card'
import DivineConnect from '../components/DivineConnect'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HolidaySpecialOffer from '../components/HolidaySpecialOffer'
import Ram from '../components/Ram'
import Testimonials from '../components/Testimonials'
import UpcomingEvents from '../components/UpcomingEvents'

const LandingPage = () => {
  return (
    <>
    <Header />
    <Ram />
    <Card />
    <UpcomingEvents />
    <About />
    <DivineConnect />
    <HolidaySpecialOffer />
    <Testimonials />
    <Footer />
    </>
  )
}

export default LandingPage