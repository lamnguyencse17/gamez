import React from "react";

export default function SearchBar() {
  return (
    <div className="mt-4 text-orange-600 lg:mt-0 lg:w-1/2 md:w-2/3 md:mx-auto sm:w-3/4 sm:mx-0">
      <input type="text" placeholder="Search an article" className="w-full px-3 py-1 placeholder-orange-600 border rounded shadow appearance-none"></input>
    </div>
  );
}
