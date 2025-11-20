import { useEffect, useState, useTransition } from "react"
import { getCountryIndData } from "../axios"
import { NavLink, useParams } from "react-router-dom";

import {Atom} from 'react-loading-indicators'

export const Singlecountry=()=>{

    const [single,setsingle]=useState()
let params=useParams()
console.log(params);
const[ispending,setTransition]=useTransition()



const banao=async()=>{

    let res=await getCountryIndData(params.id)
    console.log(res.data);
    setsingle(res.data[0])
    setTransition(()=>single)

}
useEffect(()=>{
banao()
},[])
if(ispending){
    return(
        <Atom color="#32cd32" size="medium" text="" textColor="" />
    )
}

return(
    <>
    <div className="container">


{single &&( 
    <>
    <div className="pehla">
<img src={single.flags.svg} alt="" />
</div>


<div className="doora">
    <h2>{single.name.official}</h2>
<p>native Names: {Object.keys(single.name.nativeName)
                    .map((key) => single.name.nativeName[key].common)
                    .join(", ")}</p>

<p>population:{single.population}</p>
<p>Region:{single.region}</p>
<p>Sub-Region:{single.subregion}</p>
<p>Capital:{single.capital}</p>
<p>Toplevel-domain:{single.tld}</p>
<p>currencies:{Object.keys(single.currencies).map((ele)=>single.currencies[ele].name).join(",")}</p>
<p>languages:     {Object.keys(single.languages)
                    .map((key) => single.languages[key])
                    .join(", ")}</p>

<NavLink to="/country" className="lion"><button>back</button></NavLink>
</div>

    </>
)
}
    </div>


    </>
)
}