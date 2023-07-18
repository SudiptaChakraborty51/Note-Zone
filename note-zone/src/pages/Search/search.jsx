import React from "react";
import "./search.css";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import useSearch from "../../hooks/useSearch";
import Note from "../../components/Note/note";
import Layout from "../../components/Layout/layout";
import search from "../../assets/search.svg";

const Search = ({ query }) => {
  const searchResults = useSearch(query);

  const searchedNotes = searchResults.map((note) => (
    <Note key={note.id} note={note} />
  ));
  return (
    <div className="search">
      <Navbar query={query} />
      <div className="search-content">
        <Sidebar />
        <div className="search-main">
          <section>
            {query.trim() !== "" ? (
              searchedNotes.length !== 0 ? (
                <Layout>{searchedNotes}</Layout>
              ) : (
                <p>No notes found!</p>
              )
            ) : (
              <div className="search-notes-initial">
                <img src={search} alt="search" />
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Search;
