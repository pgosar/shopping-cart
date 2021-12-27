import React, { Component } from "react";

//navigation bar
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge bg-pill bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
