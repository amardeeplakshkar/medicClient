import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router } from 'react-router-dom'
import Landing from './components/Landing.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router location={""}>
      <Landing/>
    </Router>
  </StrictMode>,
)
