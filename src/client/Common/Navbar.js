import React from "react";
import Brand from "./Navbar/Brand";
import Menu from "./Navbar/Menu";

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <Brand/>
        <Menu/>
      </nav>
    </div>
  );
}
