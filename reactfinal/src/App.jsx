import { Applayout } from "./applayout"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Country } from "./pages/country"
import { Home } from "./pages/home"
import{createBrowserRouter, RouterProvider}from 'react-router-dom'
import "./App.css"
import { Error } from "./pages/error"
import { Singlecountry } from "./pages/singlecountry"
const App=()=>{

const router=createBrowserRouter([
{
  path:"/",
  element:<Applayout/>,
  errorElement:<Error/>,
  children:[
{
path:"/",
element:<Home />
},
{
  path:"/about",
  element:<About />
},
{
  path:"/country",
  element:<Country />
},
{
  path:"/country/:id",
  element:<Singlecountry />
},
{
  path:"/contact",
  element:<Contact />
}
  ]
}
  
])




return(
  <RouterProvider router={router} />
)


}
export default App