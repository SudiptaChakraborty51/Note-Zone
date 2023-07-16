import React, { useContext, useState } from "react";
import logo from "/notes.png";
import "./navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import {toast} from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="navbar">
      <nav>
        <div className="left-nav">
          <img src={logo} alt="logo" />
          <h2>Note Zone</h2>
        </div>
        <div className="middle-nav">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search notes"
            />
              <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="right-nav">
          {/* <i class="fa-solid fa-table-cells-large"></i> */}
          <i className="fa-solid fa-list"></i>
          <i className="fa-solid fa-moon"></i>
          <div className="profile-image-container">
            <img
              src={
                user?.photoURL ||
                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
              }
              alt={user?.displayName}
              onClick={(e) => {
                e.stopPropagation();
                setShowProfile(!showProfile);
              }}
            />
            {showProfile && (
              <div className="profile-logout-modal">
                <div>Profile</div>
                <div onClick={() => {
                  logOut();
                  toast.success("Logged out!")}}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
