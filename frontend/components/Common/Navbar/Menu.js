import React from "react";
import Navigation from "./Menu/Navigation";
import SearchBar from "./Menu/SearchBar";
import AuthNav from "./Menu/AuthNav";

export default function Menu() {
  return (
    <div className="flex-grow block w-full lg:text-xl md:text-sm md:flex md:items-center md:w-auto">
      <div className="flex">
        <Navigation />
      </div>
      <div className="flex-auto">
        <SearchBar />
      </div>
      <div className="flex items-end">
        <AuthNav />
      </div>
    </div>
  );
}
