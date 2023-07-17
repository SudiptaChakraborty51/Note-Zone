import React, { useState } from 'react';
import "./notePreview.css";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { notesRef } from '../../firebase';
import {toast} from "react-toastify";
import ToolBar from '../ToolBar/toolBar';
import { getCurrentDateTime } from '../../utils/getCurrentDateTime';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const NotePreview = ({note, setIsOpen}) => {

  const notePreviewModalNode = useOutsideClick(() => setIsOpen(false));

    console.log("HE he", note);
    const [notes, setNotes] = useState({
        title: note.title,
        content: note.content,
        bg: note.bg,
        label: note.label,
        archived: note.archived,
        deleted: note.deleted,
        pinned: note.pinned
    });

    const updateNote = async (id, value) => {
        const note = doc(notesRef, id);
        try {
          await updateDoc(note, { ...value, editedAt: getCurrentDateTime() });
        } catch (err) {
          console.error(err);
        }
      }
    
      const deleteNote = async (id) => {
        const note = doc(notesRef, id);
        try {
          await deleteDoc(note);
        } catch (err) {
          console.error(err);
        }
      }
    
      // others
      const changeBg = (bg) => {
        setNotes((prevNote) => ({ ...prevNote, bg }));
      }
    
      const pinNote = () => {
        updateNote(note.id, { pinned: !note.pinned });
        closeModal();
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNotes((prevNote) => ({ ...prevNote, [name]: value }));
      }
    
      const binNote = () => {
        updateNote(note.id, { deleted: !note.deleted });
        toast.success("Note Binned");
        closeModal();
      }
    
      function archiveNote() {
        updateNote(note.id, { archived: !note.archived });
        toast.success("Note Archived");
        closeModal();
      }
    
      const unarchiveNote = () => {
        updateNote(note.id, { archived: !note.archived });
        toast.success("Note Unarchived");
        closeModal();
      }
    
      const restoreNote = () => {
        updateNote(note.id, { deleted: !note.deleted });
        toast.success("Note Restored");
        setIsOpen(false);
      }
    
      const deleteNoteForever = () => {
        deleteNote(note.id);
        setIsOpen(false);
      }
    
      const setUpdatedNote = () => {
        for (let key in notes) {
          if (notes[key].toString() !== note[key].toString()) {
            updateNote(note.id, { [key]: notes[key] });
          }
        }
      }
    
      const closeModal = () => {
        setUpdatedNote();
        setIsOpen(false);
      }
    
      const deleteLabel = (labelName) => {
        setNotes((prevNote) => ({
          ...prevNote,
          label: prevNote.label.filter((l) => l !== labelName),
        }));
      }
    
      const addNewLabel = (labelName) => {
        if (labelName.trim() !== "" && !note.label.includes(labelName.trim().toLowerCase())) {
          setNotes((prevNote) => ({
            ...prevNote,
            label: [...prevNote.label, labelName.trim().toLowerCase()],
          }));
        }
      }

  return (
    <div className="new-note-modal-container">
      <div className={`new-note-modal ${notes.bg}`} ref={notePreviewModalNode}>
        <div className="new-note-container">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="title"
            value={notes.title}
            disabled={notes.deleted}
            onChange={handleChange}
          />
          <textarea
            placeholder="Take a note..."
            name="content"
            className="content"
            disabled={notes.deleted}
            value={notes.content}
            onChange={handleChange}
          />
          <ToolBar
            newNote={notes}
            closeModal={closeModal}
            changeBg={changeBg}
            binNote={binNote}
            archiveNote={archiveNote}
            unarchiveNote={unarchiveNote}
            pinNote={pinNote}
            restoreNote={restoreNote}
            deleteNoteForever={deleteNoteForever}
            deleteLabel={deleteLabel}
            addNewLabel={addNewLabel}
          />
        </div>
      </div>
    </div>
  )
}

export default NotePreview
