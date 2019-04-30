import React, { Component } from "react";

//Statless Functional Component

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">{props.totalCounters}</span>
      </span>
    </nav>
  );
}
 
export default NavBar;