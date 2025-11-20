import { NavLink } from "react-router-dom"
export const Header=()=>{

return(
    <>
    <nav>
        <div className="head">
            <h1>MyAtlas</h1>
            <ul>
                <li>
    <NavLink className={({isActive})=>
    isActive?"lol":""} to="/">home</NavLink>
                </li>
                <li>
    <NavLink className={({isActive})=>
    isActive?"lol":""}to="/about">about</NavLink>

                </li>
                <li>
    <NavLink className={({isActive})=>
    isActive?"lol":""}to="/country">country</NavLink>

                </li>
                <li>
    <NavLink className={({isActive})=>
    isActive?"lol":""} to="/contact">contact</NavLink>

                </li>
            </ul>
        </div>
    </nav>




    </>
)

}