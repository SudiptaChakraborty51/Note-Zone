import React from "react";
import useNotesData from "./useNotesData";

const useSearch = (query) => {
  const { allNotes } = useNotesData();
  const searchResult = allNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.content.toLowerCase().includes(query.toLowerCase()) ||
      note.label.join(" ").toLowerCase().includes(query.toLowerCase())
  );
  return searchResult;
};

export default useSearch;
