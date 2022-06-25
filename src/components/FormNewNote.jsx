import React from "react";

function FormNewNote({ newNote, handleTitle, handleBody, formSubmit }) {
  return (
    <>
      <h1 className="text-2xl text-indigo-800 font-bold w-full">
        Add New Note
      </h1>
      <form
        className="flex flex-col justify-center items-center w-full gap-y-2"
        onSubmit={formSubmit}>
        <input
          id="title"
          type="text"
          placeholder="Enter your Note Title ..."
          className="px-4 py-2 rounded-md outline-none md:w-1/2 w-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100"
          value={newNote.title}
          onChange={handleTitle}
          required={true}
        />

        <textarea
          type="text"
          placeholder="Enter your Note Body ..."
          className="px-4 py-2 rounded-md outline-none md:w-1/2 w-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100"
          value={newNote.body}
          onChange={handleBody}
          required={true}
        />
        <button className="py-2 px-2 md:px-4 md:py-2 mt-4 w-full md:w-1/2 font-semibold text-sm md:text-base border rounded-lg cursor-pointer bg-indigo-500 text-indigo-50 border-indigo-500 hover:bg-indigo-50 hover:text-indigo-500">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormNewNote;
