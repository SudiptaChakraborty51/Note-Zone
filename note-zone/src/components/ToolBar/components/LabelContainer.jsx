import React, { useState } from "react";
import "./toolBarComponents.css";

const LabelContainer = ({ label, deleteLabel, addNewLabel }) => {
  const [showLabels, setShowLabels] = useState(false);
  const [newLabel, setNewLabel] = useState("");

  return (
    <div>
      <i
        className="fa-solid fa-tag"
        title="add label"
        onClick={() => setShowLabels((prev) => !prev)}
      ></i>
      {showLabels && (
        <div className="label-modal">
          <input
            placeholder="Enter label name"
            value={newLabel}
            maxLength={30}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <div className="modal-labels-container">
            {label?.map((label) => (
              <div key={label} className="labels">
                <span>{label}</span>
                <i
                  className="fa-solid fa-xmark"
                  title="remove label"
                  onClick={() => deleteLabel(label)}
                ></i>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              addNewLabel(newLabel);
              setNewLabel("");
            }}
            disabled={newLabel === "" ? true : false}
            style={{ cursor: newLabel === "" ? "not-allowed" : "pointer" }}
          >
            Create New Label
          </button>
        </div>
      )}
    </div>
  );
};

export default LabelContainer;
