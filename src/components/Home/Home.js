import React from "react";
import "./home.css";
import activeComplaintImage from "../img/complaint.jpg"
import closedComplaintImage from "../img/resolved.webp"; // Import the closed complaint image
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="home">
        <Link to="/active-complaint" className="complaint-card">
            <h3>Active Complaint</h3>
            <img src={activeComplaintImage} alt="Active Complaint" />
        </Link>
        <Link to="/closed-complaint" className="complaint-card">
            <h3>Closed Complaint</h3>
            <img src={closedComplaintImage} alt="Closed Complaint" />
        </Link>
        </div>
    </div>
  );
};

export default Home;
