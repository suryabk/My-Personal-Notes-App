import React, { useState } from "react";

import Button from "../components/Buttons";
import { getInitialData } from "../utils/index";
import ShowNotes from "../components/ShowNotes";
import FormNewNote from "../components/FormNewNote";

function Home() {
  const [notes, setNotes] = useState(getInitialData);

  const [newNote, setNewNote] = useState({
    id: +new Date(),
    title: "",
    body: "",
    createdAt: new Date().toISOString(),
    archived: false,
  });

  const handleSubmit = (e) => {
    setNotes([...notes, newNote]);
    e.preventDefault();
  };

  const handleNewNoteTitle = (e) => {
    setNewNote({ ...newNote, title: e.target.value });
  };

  const handleNewNoteBody = (e) => {
    setNewNote({ ...newNote, body: e.target.value });
  };

  return (
    <>
      <FormNewNote
        newNote={notes}
        formSubmit={handleSubmit}
        handleBody={handleNewNoteBody}
        handleTitle={handleNewNoteTitle}
      />
      <ShowNotes allNotes={notes} />
    </>
  );
}

export default Home;
