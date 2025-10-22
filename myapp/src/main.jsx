import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Tikka from './module.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
  <Tikka/>
    </>
  </StrictMode>
)
