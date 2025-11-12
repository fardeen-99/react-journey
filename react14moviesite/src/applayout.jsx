import { Footer } from "./footer"
import { Header } from "./header"
import {Outlet, useLocation, useNavigation} from 'react-router-dom'
export const Applayout=()=>{
  const navu = useNavigation();

  // ✅ Check the navigation state, not just navu
  if (navu.state === "loading") {
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h1>;
  }



 let location=useLocation()
 console.log(location);
 
let path=location.pathname==="/about"
let nath=location.pathname==="/"

return(
<>
<Header />
<Outlet />
{!path && !nath && <Footer />}

</>


)


}
