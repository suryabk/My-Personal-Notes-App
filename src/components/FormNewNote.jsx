import React from "react";
import Button from "./Buttons";

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
          className="px-4 py-2 rounded-md outline-none w-1/2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100"
          value={newNote.title}
          onChange={handleTitle}
          required={true}
        />

        <textarea
          type="text"
          placeholder="Enter your Note Body ..."
          className="px-4 py-2 rounded-md outline-none w-1/2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100"
          value={newNote.body}
          onChange={handleBody}
          required={true}
        />
        <Button className="w-1/2 mt-4" name="Submit" />
      </form>
    </>
  );
}

export default FormNewNote;
