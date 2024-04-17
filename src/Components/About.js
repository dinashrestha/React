import React from "react";
import "../Assets/Styles/about.css";


import image from "../Assets/Images/bg .png";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";

function About() {
  return (
    <>
      <div className="hole">
        <div>
          <h1>About us</h1>
          
        </div>
        <div className="momo">
          <div className="imgg">
            <img src={image}></img>
          </div>
          <div className="body">
            <p> <span className="bg">
             Hi, I am Dina Shrestha.</span>
             <p>I live in Itahari Sunsari. I'm currently
              reading in 8th semester. I am new in website desiging and learning
              new designing. I love cooking and coding.{" "}</p>
            </p>
            
            <h4>-------Intro</h4>

            <p className="hhh">
              {" "}
              I was born and raised in itahari, where i grew up in a town and
              always had playing around the house. I am entering my final year
              at the University Of Koshi St james College where i am studying
              Bachelor of Computer Application. I am 
            </p>
          </div>
        </div>
        

        {/* <div className="facebook">
       <p><FaFacebook /></p>
    
     <div class="insta">
    <FaInstagram />
    </div> 
    </div>  */}
    <div className="wholecircle">
    <div className="circle1">
     <p>Resume</p> 
    </div>
    <div className="circle2">
     <p>Resume</p> 
    </div>
    </div>
    <button name="button" type=""button>Get in touch</button>
      </div>
    </>
  );
}

export default About;
