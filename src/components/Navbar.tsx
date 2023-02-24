import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { logo } from "../assets";
import "./navbar.css";
const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar-header">
          <img src={logo} alt="" />
          <h3>Portfolio</h3>
        </div>
        <ul className="nav-links">
          {/* checkbox hack */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="toggler" onClick={()=>{setToggle(prevToggle=>!prevToggle
            )}}>
            {toggle?<AiOutlineClose/>: <AiOutlineMenu/>}
          </label>
          <div className="menu">
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Portfolio</li>
            <li className="nav-link">
              <button>Contact</button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
