import React from "react";
import "./contact-us.css";
import Navbar from "../Navbar/Navbar";

const ContactUs = () => {
  return (
    <div>
        <Navbar />
        <div className="main">
        <div className="contactdiv">
            <div className="contact-card">
            <h2 className="contactHeading">Contact Us</h2>
            <p>
                <strong>Contact Number:</strong> +123-456-7890
            </p>
            <p>
                <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p>
                <strong>LightX</strong> Bringing light to Our neighborhoods
            </p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ContactUs;
