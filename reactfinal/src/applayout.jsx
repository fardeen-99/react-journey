import { Footer } from "./footer"
import {Atom} from 'react-loading-indicators'
import { Header } from "./header"
import { Outlet, useNavigation } from "react-router-dom"
export const Applayout=()=>{

    let navu=useNavigation()
    if(navu.state==="loading"){

        return(
            <Atom color="#32cd32" size="medium" text="" textColor="" />
        )
    }else
return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
)

}