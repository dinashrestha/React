import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Contact from '../src/Components/Contact';
import Service from '../src/Components/Service';
import About from '../src/Components/About';
import Navbar from '../src/Components/Navbar';

function App() {
  return (
   
      <Router>
        <Navbar/>
          <Routes>   
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
         <Route path="/Service" element={<Service/>}/> 
        </Routes>
      </Router>
  
  );
}

export default App;
