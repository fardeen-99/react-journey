import { useEffect, useState, useTransition } from "react"
import { Getapi } from "../axios"
import {Atom} from 'react-loading-indicators'


export const Country=()=>{
    const[country,setcountry]=useState([])
  const [isPending, startTransition] = useTransition();
  
  const popat=async()=>{
  
      let res=await Getapi()
      startTransition(() => {
          setcountry(res.data);
          console.log(country)
        });
      }
useEffect(()=>{
    
popat()
    
},[])
console.log(country)
if(isPending){
    return(
        <Atom color="#32cd32" size="medium" text="" textColor="" />

    )
}
return(
    <>
    <h1>Country</h1>
    </>
)

}