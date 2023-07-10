import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import "./notes.css";

const Notes = () => {
  return (
    <div className="notes">
      <Navbar />
      <div className="notes-content">
        <Sidebar />
        <div className="notes-main"></div>
      </div>
    </div>
  );
};

export default Notes;
