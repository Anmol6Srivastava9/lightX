import React from "react";
import complaintsData from "../data" // Import your complaint data
import "./closedcomplaint.css"
import Navbar from "../Navbar/Navbar";

const ClosedComplaint = () => {
  const closedComplaints = complaintsData.filter((complaint) => complaint.Status === "Resolved");

  return (
    <div> <Navbar />
        <div className="closedContainer">
        <h2 className="complaintHeading">Closed Complaints</h2>
        <table>
            <thead>
            <tr>
                <th>StreetLightId</th>
                <th>Complaint Date</th>
                <th>Location</th>
                <th>Fault Type</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {closedComplaints.map((complaint) => (
                <tr key={complaint.StreetLightId}>
                <td>{complaint.StreetLightId}</td>
                <td>{complaint.ComplaintDate}</td>
                <td>{complaint.Location}</td>
                <td>{complaint.FaultType}</td>
                <td>{complaint.Status}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default ClosedComplaint;
