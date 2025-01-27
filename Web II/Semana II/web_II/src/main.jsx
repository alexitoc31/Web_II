import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import CounterApp from './CounterApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp initialValue={10}/>
  </StrictMode>,
)
