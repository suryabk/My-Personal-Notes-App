import React from "react";

function Button({ name, className }) {
  return (
    <button
      className={`${className} w-full font-medium text-sm md:text-base  border  px-2 md:px-4 py-1 md:py-2 rounded-lg cursor-pointer ${
        name === "Delete"
          ? "bg-red-50 text-red-500 border-red-500"
          : name === "Archive"
          ? "bg-green-50 text-green-500 border-green-500"
          : "bg-indigo-500 text-indigo-50 border-indigo-500 font-semibold"
      }`}>
      {name}
    </button>
  );
}

export default Button;
