import { NavLink } from "react-router-dom"
import { TiThMenuOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

export const Header=()=>{
const[open,setopen]=useState(false)




useEffect(() => {
  if (open) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
}, [open]);
return(
    <>

     
    <nav>
        <div className="head">
            <h1>MyAtlas</h1>
            <div className="menu"  onClick={()=>setopen(!open)}>{open?<IoClose />
:<IoMdMenu />
}
</div>
            <ul className={open?"ul ajau":""}>
                <li>
    <NavLink className={({isActive})=>
    isActive?"lol":""} to="/"   onClick={()=>setopen(false)}>home</NavLink>
                </li>
                <li>
    <NavLink className={({isActive})=>
    isActive?"lol":""}to="/about" onClick={()=>setopen(false)}>about</NavLink>

                </li>
                <li>
    <NavLink className={({isActive})=>
    isActive?"lol":""}to="/country" onClick={()=>setopen(false)}>country</NavLink>

                </li>
                <li>
    <NavLink className={({isActive})=>
    isActive?"lol":""} to="/contact" onClick={()=>setopen(false)}>contact</NavLink>

                </li>
            </ul>
        </div>
    </nav>




    </>
)

}