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
            <button>start exploring<NavLink to="/country"><FaArrowRightLong style={{color:"white",marginTop:"5px"}} />
</NavLink></button>
        </div>
        <div className="sec"><img src="https://github.com/thapatechnical/thapa-react-19-website/blob/master/react_country_thapa/public/images/world.png?raw=true" alt="atlas" /></div>
        </div>

        <About/>
    </main>
    </>
)

}