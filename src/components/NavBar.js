import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "10px",
  margin: "0 5px 5px",
  background: "#0f4c81",
  textDecoration: "none",
  color: "#e78b90",

}

const activeStyles = {
  background: "#BAD9E8",
}

function NavBar() {
  return (

   <div className="navbar">
     <NavLink to="/" exact style={linkStyles} style={linkStyles} activeStyle={activeStyles}>Home</NavLink>
     <NavLink to="/movies" style={linkStyles} style={linkStyles} activeStyle={activeStyles}>Movies</NavLink>
     <NavLink to="/directors" style={linkStyles} style={linkStyles} activeStyle={activeStyles}>Directors</NavLink>
     <NavLink to="/actors" style={linkStyles} style={linkStyles} activeStyle={activeStyles}>Actors</NavLink>
   
   </div>
  )
}

export default NavBar;
