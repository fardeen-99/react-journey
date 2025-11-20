export const Contact=()=>{


const handleform=(formdata)=>{
    let kalu=Object.fromEntries(formdata.entries())
    console.log(kalu);
    


}

return(
    <>
   <div className="formm" >

<form action={handleform}>
    <h1>contact us</h1>
    <input type="text"
    placeholder="enter your name"
    
    name="name"
    required />
    <input type="text"
    placeholder="enter your e-mail"
    
    name="e-mail"
    required />
    
    <textarea
     name="msg" 
     type="text"
     placeholder="enter your query"
  
    cols="30"
     rows="10"></textarea>
<button className="btn" type="submit" value="send">submit</button>
</form>

   </div >
    </>
)

}