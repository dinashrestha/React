import React from 'react';
import '../Assets/Styles/contact.css'

function Contact() {
  return (
    <>
    
    <div className='contact'>
        <div className='con'>CONTACT US</div> 
            <div class="info">
            <div>Name</div>
            <input type="text" name="Fullname" placeholder="Enter your name"/>
            
            <div>Email</div>
            <input type="text" name="Email" placeholder="Enter your email"/>

            <div>Number</div>
            <input type="text" name="Phone" placeholder="Enter your Number"/>
            
            <div>Message</div>
            <input type="text"name="Message" placeholder="Type your message"/> 

            {/* <div>Subject</div>
            <textarea class="textarea" name="subject" placeholder="Subject"></textarea> */}
        </div>

        <div class="btn" >
            <button onclick="isvalidcontact()">Submit</button>
            
        </div>
    </div>
   
    </>
  );
};

export default Contact