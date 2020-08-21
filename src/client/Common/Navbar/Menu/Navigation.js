import React from "react";

export default function Navigation() {
  return (
    <>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-white mr-6"
      >
        Docs
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-white mr-6"
      >
        Examples
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-white"
      >
        Blog
      </a>
    </>
  );
}
