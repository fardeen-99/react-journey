import { Form, useActionData } from "react-router-dom";



export const Contacaction = async({request})=>{



let aloo = await request.formData()
let gomuk=Object.fromEntries(aloo)

console.log(gomuk)

let inp=document.querySelectorAll("input")
inp.textcontent=""



}
export const Contact = () => {

const data=useActionData()



 
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below 👇</p>

        {data?.success && (
          <div className="success-message">
            ✅ Thanks {data.name}! Your message has been received.
          </div>
        )}

        <Form  method="post" action="/contact" >
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
            Send Message 🚀
          </button>
        </Form>
      </div>
    </div>
  );
};
