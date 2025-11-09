import { NavLink, useRouteError } from "react-router-dom";


export const Error = () => {

    let error=useRouteError()
    console.log(error)


    if(error.status===404){
  return (
    <>
     

      <div className="imgg" style={{ display: "flex", alignItems: "center", flexDirection:"column",gap:"3rem" }}>
     <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" alt="" />


      <NavLink className="lola" to="/">go to home page</NavLink>
      </div>

    </>
  );
}
};
