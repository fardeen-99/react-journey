import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouteProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './component/layout.jsx'
import Home from './component/HOME.JSX'


let router= createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<Layout/>}>
<Route path='/main' element={<Home/>} />

</Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider router={router} />
  </StrictMode>,
)
