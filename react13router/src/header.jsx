import { NavLink } from "react-router-dom"


export const Header=()=>{

return(
<>

  <div className="head">
    <div className="h1"><svg id="cute" style={{color: "#00FF88"}}  xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circuit-board h-8 w-8" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M11 9h4a2 2 0 0 0 2-2V3"></path><circle cx="9" cy="9" r="2"></circle><path d="M7 21v-4a2 2 0 0 1 2-2h4"></path><circle cx="15" cy="15" r="2"></circle></svg>
                <h1>top circuits</h1>
            </div>
            <div className="h2">
                <ul>
                    <li><NavLink to="/"   style={({ isActive }) => ({
    color: isActive ? "#00FF88" : "white",
    borderBottom: isActive ? "2px solid #00FF88" : "none",
})}
>home</NavLink></li>
                    <li><NavLink to="/service"   style={({ isActive }) => ({
    color: isActive ? "#00FF88" : "white",
    borderBottom: isActive ? "2px solid #00FF88" : "none",
  })}>service</NavLink></li>  
                    <li><NavLink to="/feature"   style={({isActive})=>({
                        
                        color: isActive?"#00FF88":"white"
                        ,borderBottom: isActive ? "2px solid #00FF88" : "none",


                    })}>feature</NavLink></li>
                    <li><NavLink to="/whyus">why us</NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                </ul>
           
            </div>
        </div>

</>


)


}