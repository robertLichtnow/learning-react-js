import React from "react";

//Statless Functional Component

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">{totalCounters}</span>
      </span>
    </nav>
  );
}
 
export default NavBar;