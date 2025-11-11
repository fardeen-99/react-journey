import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'

import { Applayout } from './applayout'
import { Home } from './component/home'
import { About } from './component/about'
import { Movie } from './component/movie'
import { Contacaction, Contact } from './component/contact'
import { Error } from './component/error'
import { MovieApi } from './component/movieapi'
import { SingleMovie } from './component/Singlemovie'
import { SingleApi } from './component/single'

function App() {


const router=createBrowserRouter([

{

path:"/",
element:<Applayout /> ,
errorElement:<Error />,
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
  path:"/movie",
  element:<Movie />,
  loader: MovieApi
},
{
  path:"/movie/:id",
  element:<SingleMovie />,
  loader: SingleApi
},
{
  path:"/contact",
  element:<Contact />,
  action: Contacaction
}

]

}

])



return(

<RouterProvider router={router}/>


)

}

export default App
