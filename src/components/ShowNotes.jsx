import React from "react";
import { showFormattedDate } from "../utils";
import Button from "./Buttons";

function ShowNotes({ allNotes }) {
  const buttonGroup = [
    {
      name: "Delete",
    },
    {
      name: "Archive",
    },
  ];
  return (
    <>
      <h1 className="text-2xl text-indigo-800 font-bold w-full">All Notes</h1>
      <div className="flex flex-wrap justify-center gap-y-8 gap-x-4">
        {allNotes.map((note) => (
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
              {buttonGroup.map((button, idx) => (
                <Button name={button.name} key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowNotes;
