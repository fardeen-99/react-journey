import { useState } from "react";
import faq from "./json/footer.json"
import { FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer=()=>{

    const[pa,setpa]=useState(1)
const icons={
FaMapMarkedAlt:<FaMapMarkedAlt/>,
FaMapMarkerAlt:<FaMapMarkerAlt/>,
MdEmail:<MdEmail/>,
FaPhoneAlt:<FaPhoneAlt/>
}


// let limit=1
// let start=(pa-1)*limit
// let end=start+limit

// let finul=faq.slice(start,end)

// let final=Math.ceil(faq.length/limit)

return(
    <>
    <div className="f1">
        {
            faq.map((ele)=>
                
                <div key={ele.id} className="boxx">


            {/* <button disabled={pa===1} onClick={()=>setpa(prev=>prev-1)}>prev</button> */}

            <div className="loc">{icons[ele.icon]}</div>
            <div className="add"><p>{ele.label}</p>
            <p className="ol">{ele.value}</p></div>

            
            {/* <button disabled={pa===final} onClick={()=>setpa(prev=>prev+1)}>next</button> */}
        </div>
            )
        }
    </div>
    </>
)

}