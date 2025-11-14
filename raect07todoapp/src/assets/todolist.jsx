import { IoMdCheckmark 
} from "react-icons/io";
import { MdDelete } from "react-icons/md";


export function Todolist({ele,index,kato,toggleComplete,editing,edit}){

    
      return(
<li key={index}>
<span  style={{ textDecoration: ele.completed ? "line-through" : "none",
          color: ele.completed ? "gray" : "black"}}>{ele.text}</span>
<IoMdCheckmark
  style={{
    color: ele.completed ? "gray" : "green",
    fontSize: "20px",
    cursor: "pointer"
  }}
  onClick={() => toggleComplete(ele.text)}
/>

<MdDelete style={{color:'red',fontSize:'20px'}}  onClick={()=>kato(ele.text)}/>


<span onClick={()=>editing(index)}>edit</span>


</li>
  )
}