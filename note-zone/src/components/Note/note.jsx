import React, { useState } from "react";
import "./note.css";
import NotePreview from "../NotePreview/notePreview";

const Note = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("HI HI", note);
  return (
    <div className="note-card-container">
      <div className={`note-card ${note?.bg}`} onClick={() => setIsOpen(true)}>
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
        {note?.editedAt ? (
          <p>Edited At: {note?.editedAt}</p>
        ) : (
          <p>Created At: {note?.createdAt}</p>
        )}
      </div>
      {isOpen && (
        <NotePreview note={note} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default Note;
