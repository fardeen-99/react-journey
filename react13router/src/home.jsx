import { FaWhatsapp } from "react-icons/fa";

export const Home=()=>{


return(

<>

 <div id="main">
        <div class="land">
            <div class="l1 animate__animated animate__fadeInLeft" >
                <h1>Premium <span>circuit <br /> boards</span> Manufacturing Solutions</h1>
                <p class="go">Delivering industry-leading PCB manufacturing with cutting-edge technology, rapid turnaround, and exceptional quality.</p>
                <div class="l-btn"><button class="b1"><a href="#moto">get started<i class="fa-solid fa-arrow-right"></i></a></button><button class="b2"> <a href="#moto">explore service</a></button></div>
                     <div class="l-box">
                <div class="box">
                    <h2>500+</h2>
                    <p>Projects Completed</p>
                </div>
                <div class="box">
                    <h2>300+</h2>
                    <p>Happy Clients</p>
                </div>
                <div class="box">
                    <h2>50+</h2>
                    <p>Expert Engineers</p>
                </div>
            </div>
            </div>
                <div class="l2 animate__animated animate__fadeInRight"><img src="https://electropcb.pk/wp-content/uploads/2025/02/double-layer-pcb.jpg" alt="pcb" />
         
            </div>
           
            <div style={{position: "fixed", bottom: "5px", right: "0", zIndex:"1000"}} class="what"><a href="https://wa.me/919810011453?text=Hey%20I%20am%20interested%20to%20know%20about%20PCB"><FaWhatsapp />
</a></div>
                    </div>
               
        </div>
        


        
    
</>


)

} 