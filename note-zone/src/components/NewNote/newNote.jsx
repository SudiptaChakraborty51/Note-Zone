import React from "react";
import "./NewNote.css";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import ToolBar from "../ToolBar/toolBar";

const NewNote = ({ setIsOpen }) => {
  const newNoteModalNode = useOutsideClick(() => setIsOpen(false));
  return (
    <div className="new-note-modal-container">
      <div className="new-note-modal" ref={newNoteModalNode}>
        <div className="new-note-container">
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="title"
        />
        <textarea
          placeholder="Take a note..."
          name="content"
          className="content"
        />
        <ToolBar />
        </div>
      </div>
    </div>
  );
};

export default NewNote;
