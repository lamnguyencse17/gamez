import React from "react";

export default function SearchBar() {
  return (
    <div className="mt-4 lg:mt-0 text-orange-600 lg:w-1/2 md:w-2/3 md:mx-auto sm:w-3/4 sm:mx-0">
      <input type="text" placeholder="Search an article" className="shadow appearance-none border rounded placeholder-orange-600 w-full py-1 px-3"></input>
    </div>
  );
}
