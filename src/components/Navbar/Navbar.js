import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/Home"><span className="logo">LightX</span></Link>
      <ul className="nav-links">
        <li>
          <Link to="/active-complaint">Active Complaint</Link>
        </li>
        <li>
          <Link to="/closed-complaint">Closed Complaint</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
