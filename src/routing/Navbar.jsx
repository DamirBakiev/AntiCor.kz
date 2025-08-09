import React from "react";
import { Link  } from "react-router-dom"

function Navbar() {
    return(
        <div style={{margin: "10px", padding: "10px"}}>
          {/* <Link to="/home" state={{padding: "10px"}}>Home</Link>
          <Link to="/about">About</Link> */}
          <Link to="/contact">Contact</Link>
          {/* <Link to={"/users"}>Users</Link> */}
      <Link to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>My Profile</Link>
      <Link to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>My Projects</Link>
      <Link to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Me</Link>
        </div>
    )
}

export default Navbar