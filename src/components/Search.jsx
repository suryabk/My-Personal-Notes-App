import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function Search({ search, handleSearch }) {
  return (
    <label className="flex justify-center items-center w-full md:w-1/2 relative text-blue-800">
      <SearchIcon className="w-10 h-10 absolute left-0 rounded-l-md bg-blue-500 p-2 text-blue-50 z-10" />

      <input
        id="title"
        type="text"
        placeholder="Seach your note..."
        className="pl-12 py-2 rounded-md outline-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100"
        value={search.searchInput}
        onChange={handleSearch}
      />
    </label>
  );
}

export default Search;
