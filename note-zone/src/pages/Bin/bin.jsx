import React from "react";
import "./bin.css";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import useNotesData from "../../hooks/useNotesData";
import Note from "../../components/Note/note";
import Layout from "../../components/Layout/layout";

const Bin = () => {
  document.title = "Note Zone | Bin";
  const { deleted } = useNotesData();

  const deletedNotes = deleted?.map((note) => (
    <Note key={note.id} note={note} />
  ));

  return (
    <div className="bin">
      <Navbar />
      <div className="bin-content">
        <Sidebar />
        <div className="bin-main">
          <section>
            <Layout>
              {deletedNotes.length !== 0 ? (
                <Layout>{deletedNotes}</Layout>
              ) : (
                <p>No notes in bin!</p>
              )}
            </Layout>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Bin;
