import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let Context=createContext()



export let Provider=({children})=>{

const [theme, settheme] = useState(() => {
  
    const saved = localStorage.getItem("theme");
    if (!saved) return "dark"; // default theme
    return JSON.parse(saved);
  
});



const handletheme=()=>{
    return settheme((prev)=> prev==="dark"?"light":"dark")
}
useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme))

},[theme])

    return(
        <Context.Provider value={{theme,handletheme}}>
            {children}
        </Context.Provider>
    )
}