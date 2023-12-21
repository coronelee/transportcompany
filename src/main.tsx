import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Header.tsx'
import './index.css'
import Slider from './components/Slider.tsx'
import CalculatedSumm from './components/CalculatedSumm.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Slider />
    <CalculatedSumm />
  </React.StrictMode>,
)
