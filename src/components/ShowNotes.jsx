import React from "react";
import { showFormattedDate } from "../utils";

function ShowNotes({
  allNotes,
  handleDelete,
  handleArchived,
  setArchivedButton,
}) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-y-8 gap-x-4">
        {allNotes.length > 0 ? (
          allNotes.map((note) => (
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
                  className={`w-full font-semibold text-sm md:text-base  border  px-2 md:px-4 py-1 md:py-2 rounded-lg cursor-pointer ${
                    setArchivedButton
                      ? "bg-green-50 text-green-500 border-green-500 hover:bg-green-700 hover:text-green-50"
                      : "bg-yellow-50 text-yellow-500 border-yellow-500 hover:bg-yellow-700 hover:text-yellow-50"
                  } `}
                  onClick={() => handleArchived(note.id, setArchivedButton)}>
                  {setArchivedButton ? "Archive" : "Unarchive"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-xl font-bold text-pink-700">No Files Found</h2>
            <p className="text-base text-indigo-900">
              Sorry mate. You dont have any note in here
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowNotes;
