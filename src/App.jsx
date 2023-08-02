import './App.css'

import Navbar from './components/_layout/Navbar';
import Hero from './components/landingPage/Hero';
import LoadingScreen from './components/_layout/LoadingScreen';
import BetterSchoolSection from './components/landingPage/BetterSchoolSection';
import EarlyMoneySection from './components/landingPage/EarlyMoneySection';
import SectionDivider from './components/SectionDivider';

function App() {  

  return (
    <div className='relative bg-[#0F1010] flex flex-col'>

      <LoadingScreen />

      <Navbar />

      <Hero />
      <SectionDivider />

      <BetterSchoolSection />
      <SectionDivider />

      <EarlyMoneySection />
      <SectionDivider />
      
    </div>      
  )
}

export default App
