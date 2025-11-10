import { useLoaderData } from "react-router-dom"

export const Movie=()=>{

    let load=useLoaderData()
    console.log(load)
return(

    <>
    <ul>
    {load.map((ele)=>(
<li key={ele.show.id}>
    <img src={ele.show.image.medium} alt="" />
    {/* {ele.genres.map((kele)=>kele[1])} */}
    <p style={{textTransform:"uppercase",fontWeight:"600px"}}>{ele.show.genres.join(" , ")}</p>


</li>

    ))}

    </ul>
    </>
)

}