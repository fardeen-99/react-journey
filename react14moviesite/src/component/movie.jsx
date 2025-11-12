import { useLoaderData, useNavigate } from "react-router-dom"

export const Movie=()=>{

    let load=useLoaderData()
  let navi=  useNavigate()
    console.log(load)
return(

    <>
    <ul className="box" style={{flexWrap:"wrap",gap:"2.5rem",padding:"2rem 0px"}}>
    {load.map((ele)=>(
<li key={ele.show.id} className="bax" style={{padding:"0"}}>
    


    <div className="card">
       <img src= {ele.show.image.medium} alt="" />
    <button  onClick={()=>navi(`/movie/${ele.show.id}`)}>watch-now</button>
    </div>

 


</li>

    ))}

    </ul>
    </>
)

}