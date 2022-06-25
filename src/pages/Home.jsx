import React, { useState } from "react";
import { getInitialData } from "../utils/index";
import ShowNotes from "../components/ShowNotes";
import FormNewNote from "../components/FormNewNote";
import Search from "../components/Search";

function Home() {
  const [notes, setNotes] = useState(getInitialData);

  const [newNote, setNewNote] = useState({
    id: +new Date(),
    title: "",
    body: "",
    createdAt: new Date().toISOString(),
    archived: false,
  });
  const [search, setSearch] = useState({ results: [], searchInput: "" });

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

  const handleDelete = (id) => {
    setNotes([...notes.filter((note) => note.id !== id)]);
  };

  const handleArchived = (id, status = false) => {
    const archived = notes.map((note) => {
      if (note.id !== id) {
        return note;
      } else {
        if (!status) {
          return { ...note, archived: false };
        } else {
          return { ...note, archived: true };
        }
      }
    });
    setNotes(archived);
  };
  const handleSearch = (e) => {
    if (e.target.value === "")
      setSearch({ results: [], searchInput: e.target.value });
    else
      setSearch({
        results: [
          ...notes.filter(
            (note) =>
              note.title
                .toLowerCase()
                .includes(search.searchInput.toLocaleLowerCase()) ||
              note.body
                .toLowerCase()
                .includes(search.searchInput.toLocaleLowerCase())
          ),
        ],
        searchInput: e.target.value,
      });
  };

  console.log(search);

  return (
    <>
      <Search handleSearch={handleSearch} search={search} />
      <FormNewNote
        newNote={notes}
        formSubmit={handleSubmit}
        handleBody={handleNewNoteBody}
        handleTitle={handleNewNoteTitle}
      />

      <h1 className="text-2xl text-indigo-800 font-bold w-full">All Notes</h1>
      <ShowNotes
        allNotes={
          search.results.length > 0
            ? search.results.filter((note) => note.archived === false)
            : search.results.length === 0 && search.searchInput !== ""
            ? []
            : notes.filter((note) => note.archived === false)
        }
        handleDelete={handleDelete}
        handleArchived={handleArchived}
        setArchivedButton={true}
      />
      <h1 className="text-2xl text-indigo-800 font-bold w-full">Archived</h1>
      <ShowNotes
        allNotes={
          search.results.length > 0
            ? search.results.filter((note) => note.archived === true)
            : search.results.length === 0 && search.searchInput !== ""
            ? []
            : notes.filter((note) => note.archived === true)
        }
        handleDelete={handleDelete}
        handleArchived={handleArchived}
        setArchivedButton={false}
      />
      {/* <>
        <h1 className="text-2xl text-indigo-800 font-bold w-full">All Notes</h1>
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-4">
          {notes.map((note) => (
            <div
              className="w-full md:w-72 h-auto md:h-80 items-center bg-white border border-indigo-200/50 py-4 px-6 rounded-lg flex flex-col gap-x-4 gap-y-2"
              key={note.id}>
              <h1 className="w-full h-auto text-xl font-bold text-center md:text-left">
                {note.title}
              </h1>
              <p className="w-full text-sm text-gray-400">
                {showFormattedDate(note.createdAt)}
              </p>
              <hr className="w-full h-[2px] bg-indigo-400"></hr>
              <p className="w-full h-4/5 text-justify md:text-left indent-5 overflow-auto scrollbar-thumb-blue-300 scrollbar-track-blue-100 scrollbar-thin pr-2">
                {note.body}
              </p>
              <div className="px-8 flex justify-evenly gap-x-4 my-2">
                <button
                  className="
                  w-full font-semibold text-sm md:text-base  border  px-2 md:px-4 py-1 md:py-2 rounded-lg cursor-pointer
                 bg-red-50 text-red-500 border-red-500 hover:bg-red-700 hover:text-red-50"
                  onClick={() => handleDelete(note.id)}>
                  Delete
                </button>
                <button
                  className="
                  w-full font-semibold text-sm md:text-base  border  px-2 md:px-4 py-1 md:py-2 rounded-lg cursor-pointer
                 bg-green-50 text-green-500 border-green-500 hover:bg-green-700 hover:text-green-50"
                  onClick={() => handleArchived(note.id, true)}>
                  Archive
                </button>
              </div>
            </div>
          ))}
        </div>
      </> */}
    </>
  );
}

export default Home;
