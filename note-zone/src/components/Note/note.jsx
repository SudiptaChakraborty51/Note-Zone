import React from "react";
import "./note.css";

const Note = ({ note }) => {
  return (
    <div className="note-card-container">
      <div className={`note-card ${note?.bg}`}>
        <div className="note-content">
        <h3>{note?.title}</h3>
        <p>{note?.content}</p>
        </div>
          {note?.label?.length !== 0 && (
            <div className="note-label-container">
              {[...note?.label].map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default Note;
