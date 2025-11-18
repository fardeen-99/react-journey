export function Todoapp({isempty,addtodo,input,setinput}){

const inputchange =(value)=>{
  setinput(value)

}


    return(
             <form  onSubmit={addtodo} >
                <input type="text"
                placeholder='type....'
                value={input}
                onChange={(e)=>inputchange(e.target.value)}
                />
        
        
                <button type="click" onClick={addtodo} value={isempty?"add":"edit"} >{isempty?"add":"edit"}</button>
              </form>
    )

    
}