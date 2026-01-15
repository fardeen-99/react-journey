

import { useSelector } from "react-redux"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home } from "./components/Home"
import Applayout from "./components/Applayout"
import Collection from "./components/Collection"

const App = () => {
let abbu=useSelector((store)=>store.content)
console.log(abbu);
const router=createBrowserRouter([
  {
  path:"/",
  element:<Applayout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/collection",
      element:<Collection />
    }
  ]

  }
])





  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App