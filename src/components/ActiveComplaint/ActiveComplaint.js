import React, { useState } from "react";
import complaintsData from "../data"; // Import your complaint data
import "./ActiveComplaint.css"
import Navbar from "../Navbar/Navbar";
const ActiveComplaint = () => {
  const [activeComplaints, setActiveComplaints] = useState(
    complaintsData.filter((complaint) => complaint.Status === "Unresolved")
  );

  const markAsResolved = (streetLightId) => {
    setActiveComplaints((complaints) =>
      complaints.map((complaint) => {
        if (complaint.StreetLightId === streetLightId) {
          return { ...complaint, Status: "Resolved" };
        }
        return complaint;
      })
    );
  };

  return (
    <div>
        <Navbar />
        <div className="activeContainer">
        <h2 className="activeHeading">Active Complaints</h2>
        <table>
            <thead>
            <tr>
                <th>StreetLightId</th>
                <th>Complaint Date</th>
                <th>Location</th>
                <th>Fault Type</th>
                <th>Fault Status</th>
                <th>Click If resolved</th>
            </tr>
            </thead>
            <tbody>
            {activeComplaints.map((complaint) => (
                <tr key={complaint.StreetLightId}>
                <td>{complaint.StreetLightId}</td>
                <td>{complaint.ComplaintDate}</td>
                <td>{complaint.Location}</td>
                <td>{complaint.FaultType}</td>
                <td>{complaint.Status}</td>
                <td>
                    {complaint.Status === "Unresolved" ? (
                    <button onClick={() => markAsResolved(complaint.StreetLightId)}>Resolve</button>
                    ) : (
                    "Resolved"
                    )}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default ActiveComplaint;
