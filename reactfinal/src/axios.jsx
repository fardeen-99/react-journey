import axios from "axios"

const Api=axios.create({

  baseURL: "https://restcountries.com/v3.1",

})


export const Getapi=()=>{
 return Api.get("/all?fields=name,population,region,capital,flags");}