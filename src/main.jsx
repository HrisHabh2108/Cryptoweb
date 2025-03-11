import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cryptocontext from './Components/Cryptocontext.jsx'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='defaultcolor pt-4' >
    <Cryptocontext>
    <App/>
    </Cryptocontext>
    </div>
  </StrictMode>,
)


