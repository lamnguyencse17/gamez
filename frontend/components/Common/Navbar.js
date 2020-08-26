import React from "react";
import Brand from "./Navbar/Brand";
import Menu from "./Navbar/Menu";

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-6 bg-gray-700">
        <Brand/>
        <Menu/>
      </nav>
    </div>
  );
}
