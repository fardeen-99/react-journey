import { useRef, useEffect } from "react";
import { Form, useActionData } from "react-router-dom";



export const Contacaction = async({request})=>{



let aloo = await request.formData()
let gomuk=Object.fromEntries(aloo)

console.log(gomuk)


return { success:true }

}
console.log(Contacaction)
export const Contact = () => {

let data=useActionData()
let formref=useRef()

console.log(data);

useEffect(()=>{

if(data?.success){
 formref.current.reset()
}

},[data]);

 
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>


        <Form  ref={formref} method="post" >
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
         
          
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
          
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
           
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message 
          </button>
        </Form>
      </div>
    </div>
  );
};
