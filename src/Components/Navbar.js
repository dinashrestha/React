import React from 'react';
import '../Assets/Styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Nav'>
           <li> <Link to='/'> Home</Link></li> 
            <li><Link to='/contact'>Contactus</Link></li>
            <li><Link to='/about'>Aboutus</Link></li>
            <li><Link to='/service'>Service</Link></li>
        </div>
    
  )
}

export default Navbar