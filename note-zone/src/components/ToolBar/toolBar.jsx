import React from "react";
import "./toolBar.css";
import ColorPalette from "./components/ColorPalette";
import LabelContainer from "./components/LabelContainer";
import Pin from "./components/Pin";

const ToolBar = ({
  newNote,
  closeModal,
  changeBg,
  binNote,
  archiveNote,
  pinNote,
  deleteLabel,
  addNewLabel,
  unarchiveNote,
  restoreNote,
  deleteNoteForever,
}) => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-left-container">
        {!newNote.deleted && <ColorPalette changeBg={changeBg} />}
        {!newNote.deleted && (
          <i
            className="fa-solid fa-trash-can"
            title="delete note"
            onClick={() => binNote()}
          ></i>
        )}
        {!newNote.archived && !newNote.deleted && (
          <i
            className="fa-solid fa-box-archive"
            title="archive note"
            onClick={() => archiveNote()}
          ></i>
        )}
        {!newNote.deleted && (
          <LabelContainer
            label={newNote.label}
            deleteLabel={deleteLabel}
            addNewLabel={addNewLabel}
          />
        )}
        {!newNote.archived && !newNote.deleted && (
          <Pin pinNote={pinNote} pinned={newNote.pinned} />
        )}
        {newNote.archived && !newNote.deleted && (
        <i
          className="fa-solid fa-folder-open"
          title="unarchive note"
          onClick={() => unarchiveNote()}
        ></i>
      )}
      {newNote.deleted && (
        <i
          className="fa-solid fa-trash"
          title="delete forever"
          onClick={() => deleteNoteForever()}
        ></i>
      )}
      {newNote.deleted && (
        <i
          className="fa-solid fa-trash-arrow-up"
          title="restore"
          onClick={() => restoreNote()}
        ></i>
      )}
      </div>
      <div className="toolbar-right-container">
        <i
          className="fa-solid fa-circle-check"
          title="save note"
          onClick={closeModal}
        ></i>
      </div>
    </div>
  );
};

export default ToolBar;
