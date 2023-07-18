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
            <div>
              <img
                src={
                  user?.photoURL ||
                  `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                }
                alt="profile-img"
              />
              <h2>{user?.displayName}</h2>
              <strong>{user?.email}</strong>
            </div>
            <div className="profile-content">
              <p>
                <strong>Total Notes:</strong> {allNotes.length}
              </p>
              <p>
                <strong>Archived Notes:</strong> {archived.length}
              </p>
              <p>
                <strong>Pinned Notes:</strong> {pinned.length}
              </p>
              <p>
                <strong>Deleted Notes:</strong> {deleted.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
