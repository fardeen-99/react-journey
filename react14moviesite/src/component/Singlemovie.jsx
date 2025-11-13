import { useLoaderData } from "react-router-dom"
import "./SingleMovie.css";

export const SingleMovie=()=>{

    let load=useLoaderData()
    console.log(load)
return(

    <>
    <ul>
    {load.map((ele)=>(
<li key={ele.show.id} >
    <div className="one"><img src={ele.show.image.medium} alt="" /></div>
    <div className="two">
<p>{ele.show.name}</p>
<h1>{ele.show.language}</h1>
<h2 className="lopi">{ele.show.genres.join(" , ")}</h2>
<p className="popi">
  Story-lineup:{" "}
  {ele.show.summary
    ? ele.show.summary.replace(/<[^>]+>/g, "") // removes <p>, <b>, etc.
    : "No summary available"}
</p>
<h1>Rating: {ele.show.rating?.average || "N/A"}</h1>


    </div>


   

 


</li>

    ))}

    </ul>
    </>
)

}