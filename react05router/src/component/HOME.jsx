import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div id="main">
      <div className="land">
        <div className="l1 animate__animated animate__fadeInLeft">
          <h1>
            Premium <span>circuit <br /> boards</span> Manufacturing Solutions
          </h1>
          <p className="go">
            Delivering industry-leading PCB manufacturing with cutting-edge technology, rapid turnaround, and exceptional quality.
          </p>

          <div className="l-btn">
            <button className="b1">
              <Link to="#moto">
                get started <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </button>
            <button className="b2">
              <Link to="#moto">explore service</Link>
            </button>
          </div>

          <div className="l-box">
            <div className="box">
              <h2>500+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="box">
              <h2>300+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="box">
              <h2>50+</h2>
              <p>Expert Engineers</p>
            </div>
          </div>
        </div>

        <div className="l2 animate__animated animate__fadeInRight">
          <img
            src="https://electropcb.pk/wp-content/uploads/2025/02/double-layer-pcb.jpg"
            alt="pcb"
          />
          {/* Optional SVG (commented out properly)
          <div className="god">
            <svg ...></svg>
          </div>
          */}
        </div>

        <div
          className="what"
          style={{ position: 'fixed', bottom: '5px', right: 0, zIndex: 1000 }}
        >
          <a
            href="https://wa.me/919810011453?text=Hey%20I%20am%20interested%20to%20know%20about%20PCB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="download.png" alt="Whatsapp" />
          </a>
        </div>
      </div>

      <div className="svg">
        <svg
          id="pop"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C57.48,58.93,150.83,37.82,321.39,56.44Z"
            fill="#f5f8fa"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
