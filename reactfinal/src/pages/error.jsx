import { NavLink, useNavigate, useRouteError } from "react-router-dom";


export const Error = () => {


const navigate=useNavigate()


const hundle=()=>{
navigate(-1)

}
    let error=useRouteError()
    console.log(error)


    if(error.status===404){
  return (
    <>
     

      <div className="imgg" style={{ display: "flex", alignItems: "center", flexDirection:"column",gap:"3rem" }}>
     <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" alt="" />

      </div>
<div className="sec">
<button onClick={hundle}>previous page</button>
      <NavLink className="lola" to="/">go to home page</NavLink>
</div>

    </>
  );
}
};
