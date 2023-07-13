import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import "./notes.css";
import NewNote from "../../components/NewNote/newNote";

const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="notes">
      <Navbar />
      <div className="notes-content">
        <Sidebar />
        <div className="notes-main">
          <button
            className="new-note-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
          {isOpen && <NewNote setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Notes;
