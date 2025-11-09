import { Footer } from "./footer"
import { Header } from "./header"
import {Outlet} from 'react-router-dom'
export const Applayout=()=>{

return(

<>
<Header />
<Outlet />
<Footer />

</>


)


}
