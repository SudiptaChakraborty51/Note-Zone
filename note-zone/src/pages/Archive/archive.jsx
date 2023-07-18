import React from "react";
import "./archive.css";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import useNotesData from "../../hooks/useNotesData";
import Note from "../../components/Note/note";
import Layout from "../../components/Layout/layout";

const Archive = () => {
  const { archived } = useNotesData();

  const archivedNotes = archived.map((note) => (
    <Note key={note.id} note={note} />
  ));
  return (
    <div className="archive">
      <Navbar />
      <div className="archive-content">
        <Sidebar />
        <div className="archive-main">
          <section>
            <Layout>
              {archivedNotes.length !== 0 ? (
                <Layout>{archivedNotes}</Layout>
              ) : (
                <p>No notes in archived!</p>
              )}
            </Layout>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Archive;
