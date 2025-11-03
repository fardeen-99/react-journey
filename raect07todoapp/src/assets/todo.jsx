export function Todoapp({addtodo,input,setinput}){

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
        
        
                <button type="click" onClick={addtodo} >add</button>
              </form>
    )

    
}