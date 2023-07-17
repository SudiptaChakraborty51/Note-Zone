import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import "./notes.css";
import NewNote from "../../components/NewNote/newNote";
import useNotesData from "../../hooks/useNotesData";
import Note from "../../components/Note/note";
import Layout from "../../components/Layout/layout";
import useSearch from "../../hooks/useSearch";

const Notes = ({query}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pinned, unpinned } = useNotesData();

  const searchResults = useSearch(query);

  const pinnedNotes = pinned.map((note) => <Note key={note.id} note={note} />);

  const otherNotes = unpinned.map((note) => <Note key={note.id} note={note} />);

  const searchedNotes = searchResults.map((note) => (
    <Note key={note.id} note={note} />
  ));

  return (
    <div className="notes">
      <Navbar query={query}/>
      <div className="notes-content">
        <Sidebar />
        <div className="notes-main">
          <section>
            {query !== "" ? (
              <Layout>{searchedNotes}</Layout>
            ) : (
              <>
                <div>
                  <h2>PINNED</h2>
                  {pinnedNotes.length !== 0 ? (
                    <Layout>{pinnedNotes}</Layout>
                  ) : (
                    <p>No pinned notes are found!</p>
                  )}
                </div>

                <div>
                  <h2>OTHERS</h2>
                  {otherNotes.length !== 0 ? (
                    <Layout>{otherNotes}</Layout>
                  ) : (
                    <p>No notes are found!</p>
                  )}
                </div>
              </>
            )}
          </section>
          <button
            className="new-note-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
          {isOpen && <NewNote setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Notes;
