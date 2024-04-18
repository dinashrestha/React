import React from 'react'
import "../Assets/Styles/service.css";
import image from "../Assets/Images/grap.png";
import imgg from "../Assets/Images/web.png";
import product from "../Assets/Images/product.png";
import blog from "../Assets/Images/blog.png";
import social from"../Assets/Images/social.png";
import photo from"../Assets/Images/photo.png";

function Service() {
  return (
    <>
    <div className='main'>
        <div className='heading'>
             OUR SERVICE
        </div>
      <div className='firstrow'>
        <div className='box1'>
            <img src= {image}></img>  
            <p>Graphic Design</p>
            {/* <p>hdgfuidkhnd</p> */}
        </div>
        <div className="box2">
          <img src={imgg}></img>
       <p>Web Development</p>
        {/* <p>nmhgsdyfssukfjdbc</p> */}
    </div>
    <div className="box3">
      <img src={product}></img>
       <p>Product design</p>
        {/* <p>jfdhguerhfuy</p> */}
    </div>
      </div>
     
      <div className="secondrow">
    <div className="box4">
      <img src={blog}></img>
      <p> Blog Writing</p>
    </div>
    <div className="box5">
      <img src={social}></img>
       <p>Social Marketing</p>
    </div>
    <div className="box6">
      <img src={photo}></img>
       <p>Photography</p>
    </div>
    </div>

    </div>
    </>
  )
}

export default Service