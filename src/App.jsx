import './App.css'

import Navbar from './components/_layout/Navbar';
import Hero from './components/_layout/Hero';
import LoadingScreen from './components/_layout/LoadingScreen';

function App() {  

  return (
    <div className='flex w-full h-screen'>

      <LoadingScreen />

      <Navbar />

      <Hero />

    </div>      
  )
}

export default App
