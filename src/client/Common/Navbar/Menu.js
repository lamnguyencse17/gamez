import React from "react";
import Navigation from "./Menu/Navigation";
import SearchBar from "./Menu/SearchBar";
import AuthNav from "./Menu/AuthNav";

export default function Menu() {
  return (
    <div className="w-full lg:text-xl md:text-sm block flex-grow md:flex md:items-center md:w-auto">
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
