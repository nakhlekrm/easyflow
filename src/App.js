import React from "react";
import { Container, checkList,Button } from "react-bootstrap";
import CoreDiv from "./core/components/coreDiv";
import Marquee from "react-fast-marquee";
import CoreCheckBox from "./core/components/coreCheckBox";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
import Why from "./core/screens/why/why";
import Pricing from "./core/screens/pricing/pricing";
import Home from "./core/screens/home/home"
import Dropdown from 'react-bootstrap/Dropdown';
const App = () => {
  return (<div>
    <Router>
      <nav style={{display:'flex', padding:15, margin:15, justifyContent:"space-around", width:1400, marginLeft:150}}>
        <Link to="/"><img src="https://proxify.io/_nuxt/img/9fc8ff3.svg" /></Link>
        <Link to="/Why"><h5>Why</h5></Link>
        <Link to="/Pricing"><h5>Pricing</h5></Link>
        <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      Company
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">About us</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Careers </Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="" id="">
       Resources
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Qd3Fm4oW-RyUs8GLY2qD9t0qrE-d6TUaxw&usqp=CAU" width={15} height={15} />Help center</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMec8Ibzr-dOH5lNxdsGp1H4i-06ZUIbIVHg&usqp=CAU" width={15} height={15}/>Blog </Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMec8Ibzr-dOH5lNxdsGp1H4i-06ZUIbIVHg&usqp=CAU" width={15} height={15}/>Glossary </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Button variant="White">Apply as a developer</Button>{' '}
    <Button variant="primary">Find a developer</Button>{' '}
    <Button variant="White">Login</Button>{' '}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why" element={<Why />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
      
          </Router>
    
  </div>
  )
}
export default App;