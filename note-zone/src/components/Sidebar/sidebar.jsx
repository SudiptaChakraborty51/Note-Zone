import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "var(--white-color)",
    backgroundColor: isActive && "var(--primary-color)",
  });
  return (
    <div>
      <div className="sidebar">
        <NavLink to="/notes" className="sidebar-items" style={getActiveStyle}>
          <i className="fa-solid fa-note-sticky"></i> <span>Notes</span>
        </NavLink>
        <NavLink to="/archive" className="sidebar-items" style={getActiveStyle}>
          <i className="fa-solid fa-box-archive"></i> <span>Archive</span>
        </NavLink>
        <NavLink to="/bin" className="sidebar-items" style={getActiveStyle}>
          <i className="fa-solid fa-trash-can"></i> <span>Bin</span>
        </NavLink>
        <NavLink to="/labels" className="sidebar-items" style={getActiveStyle}>
          <i className="fa-solid fa-tag"></i> <span>Labels</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
