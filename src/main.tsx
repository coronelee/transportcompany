import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Header.tsx'
import './index.css'
import Slider from './components/Slider.tsx'
import CalculatedSumm from './components/CalculatedSumm.tsx'
import Advantages from './components/Advantages.tsx'
import SliderVars from './components/SliderVars.tsx'
import Services from './components/Services.tsx'
import AboutCompany from './components/AboutCompany.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Slider />
    <CalculatedSumm />
    <Advantages />
    <SliderVars />
    <Services />
    <AboutCompany />
    <Footer />
  </React.StrictMode>,
)
