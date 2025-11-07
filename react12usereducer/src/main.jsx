import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Counter } from './counter.jsx'
import { Provider } from './context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <App />

    </Provider>
    <Counter />
  </StrictMode>,
)
