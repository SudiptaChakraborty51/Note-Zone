import React, { useContext } from "react";
import "./profile.css";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import { AuthContext } from "../../contexts/AuthContext";
import useNotesData from "../../hooks/useNotesData";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { allNotes, deleted, archived, pinned } = useNotesData();

  return (
    <div className="profile">
      <Navbar />
      <div className="profile-content">
        <Sidebar />
        <div className="profile-main">
          <div className="profile-container">
            <img src={user?.photoURL} alt="profile-img" />
            <h2>{user?.displayName}</h2>
            <strong>{user?.email}</strong>
            <div className="profile-content">
              <p><strong>Total Notes:</strong> {allNotes.length}</p>
              <p><strong>Archived Notes:</strong> {archived.length}</p>
              <p><strong>Pinned Notes:</strong> {pinned.length}</p>
              <p><strong>Deleted Notes:</strong> {deleted.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;