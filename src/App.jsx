import './App.css'

import { heroSection } from './data/landing-page/squares';

import Navbar from './components/_layout/Navbar';
import Hero from './components/landingPage/Hero';
import LoadingScreen from './components/_layout/LoadingScreen';
import BetterSchoolSection from './components/landingPage/BetterSchoolSection';
import EarlyMoneySection from './components/landingPage/EarlyMoneySection';
import OnlineCloudSection from './components/landingPage/OnlineCloudSection';
import HaydnSection from './components/landingPage/haydnSection';
import EcommerceSection from './components/landingPage/EcommerceSection';
import AboutMeSection from './components/landingPage/AboutMeSection';
import ContactSection from './components/landingPage/ContactSection';
import SectionDivider from './components/SectionDivider';
import Footer from './components/_layout/Footer';

function App() {  

  return (
    <div className='relative bg-[#0F1010] flex flex-col'>

      <LoadingScreen />

      <Navbar />

      <Hero squares={heroSection} />
      <SectionDivider />

      <BetterSchoolSection squares={{"oi": 1231}} />
      <SectionDivider />

      <EarlyMoneySection teste="asda" />
      <SectionDivider />
      
      <OnlineCloudSection />
      <SectionDivider />

      <HaydnSection />
      <SectionDivider />
      
      <EcommerceSection />
      <SectionDivider />

      <AboutMeSection />
      <SectionDivider />

      <ContactSection />
      <SectionDivider />

      <Footer />
      
    </div>      
  )
}

export default App
