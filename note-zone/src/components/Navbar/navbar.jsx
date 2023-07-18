import React, { useContext, useEffect, useState } from "react";
import logo from "/notes.png";
import "./navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const Navbar = () => {
  const { user, logOut, query, setQuery } = useContext(AuthContext);

  const [showProfile, setShowProfile] = useState(false);

  const userData = JSON.parse(localStorage.getItem("user"));

  console.log(userData);

  const navigate = useNavigate();

  const navbarNode = useOutsideClick(() => setShowProfile(false));

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
              value={query}
              onClick={() => navigate("/search")}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query.trim() === "" ? (
              <i className="fa-solid fa-magnifying-glass"></i>
            ) : (
              <i className="fa-solid fa-xmark" onClick={() => setQuery("")}></i>
            )}
          </div>
        </div>
        <div className="right-nav">
          <div className="profile-image-container">
            <img
              src={
                user?.photoURL ||
                userData?.photoURL ||
                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
              }
              alt={user?.displayName}
              onClick={(e) => {
                e.stopPropagation();
                setShowProfile(!showProfile);
              }}
            />
            {showProfile && (
              <div className="profile-logout-modal" ref={navbarNode}>
                <div onClick={() => navigate("/profile")}>Profile</div>
                <div
                  onClick={() => {
                    logOut();
                    toast.success("Logged out!");
                  }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
