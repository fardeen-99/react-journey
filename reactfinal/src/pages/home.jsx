import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
import { About } from "./about";

export const Home=()=>{

return(
    <>
    <main>
        <div className="cont">
        <div className="first">
            <h1>Explore the World, One Country at a Time.</h1>
            <p>Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
           <NavLink to="/country"> <button className="noni">start exploring<FaArrowRightLong style={{color:"white",marginTop:"5px"}} />
</button></NavLink>
        </div>
        <div className="sec"><img src="/atlas.png" alt="worldAtlas" /></div>
        </div>

        <About/>
        
    </main>
    </>
)

}