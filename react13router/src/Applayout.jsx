import { Outlet } from "react-router-dom"
import { Footer } from "./footer"
import { Header } from "./header"

export const Applayout=()=>{

return(
    <>
    
<Header />
<Outlet />
<Footer />
    
    </>

)


}