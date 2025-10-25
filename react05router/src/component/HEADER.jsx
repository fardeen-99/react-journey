import React from 'react';

  import'../App.css';


   import { NavLink } from "react-router-dom";
function Header() {
return(
  <div class="head">
    <div class="h1"><svg id="cute" style="color: #00FF88;" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circuit-board h-8 w-8" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M11 9h4a2 2 0 0 0 2-2V3"></path><circle cx="9" cy="9" r="2"></circle><path d="M7 21v-4a2 2 0 0 1 2-2h4"></path><circle cx="15" cy="15" r="2"></circle></svg>
                <h1>top circuits</h1>
            </div>
            <div class="h2">
                <ul>
                    <li><NavLink to="/main"style={({isActive})=>({
                        color:isActive ? "red":"white",
                        borderbottom:isActive ? "2px solid black":"none"
                    })}>home</NavLink></li>
                    <li><NavLink to="/service" style={({isActive})=>({
                        
                        color:isActive ? "red":"white",
                        borderbottom:isActive ? "2px solid black":"none"

                    })}  >service</NavLink></li>  
                    <li><NavLink to="/feature" style={({isActive})=>({
                        
                        color:isActive ? "red":"white",
                        borderbottom:isActive ? "2px solid black":"none"

                    })} >feature</NavLink></li>
                    <li><NavLink to="/whyus" style={({isActive})=>({
                        
                        color:isActive ? "red":"white",
                        borderbottom:isActive ? "2px solid black":"none"

                    })} >why us</NavLink></li>
                    <li><NavLink to="/contact" style={({isActive})=>({
                        
                        color:isActive ? "red":"white",
                        borderbottom:isActive ? "2px solid black":"none"

                    })} >contact</NavLink></li>
                </ul>
                <div class="h3"><div class="ic"><i class="fa-solid fa-bars"></i></div></div>
                {/* <div class="burg">
                    <ul>
                       <li><a href="#main">home</a></li>
                       <li><a href="#moto">service</a></li>
                       <li><a href="#main3">feature</a></li>
                       <li><a href="#main4">why us</a></li>
                       <li><a href="#contact">contact</a></li>
                   </ul>
            //    </div> */}
            </div>
        </div>

                )
}

export default Header