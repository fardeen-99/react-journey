import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import { Home } from './home'
import { Applayout } from './Applayout'
import { Services } from './service'
import { Feature } from './assets/feature'
import { Error } from './error'

function App() {


const router=createBrowserRouter([


  {
path:"/",
element:<Applayout />,
errorElement:<Error />,
children:[


  {
  
  path:"/",
  element:<Home />
  
  }
  ,
  {
  
  path:"/service",
  element:<Services />
  
  },
  {
  
  path:"/feature",
  element:<Feature />
  
  }

]

  }



])






return(


<RouterProvider router={router}/>

)

}

export default App
