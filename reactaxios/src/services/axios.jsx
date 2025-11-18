
import axios from "axios"


const Api=axios.create({

    baseURL:'https://jsonplaceholder.typicode.com'

})

export const Getapi=()=>{
return(
    Api.get("/posts")
)


}
export const Dltapi=(id)=>{
return(
Api.delete(`/posts/${id}`)
)

}

export const Postapi=(post)=>{

return(
Api.post("/posts",post)

)

}
export const Putapi=(id,post)=>{

return(
Api.put(`/posts/${id}`,post)

)

}