import React from "react";

export default function Navigation() {
  return (
    <>
      <a
        href="#responsive-header"
        className="block mt-4 mr-6 text-orange-600 lg:inline-block lg:mt-0 hover:text-white"
      >
        Docs
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 mr-6 text-orange-600 lg:inline-block lg:mt-0 hover:text-white"
      >
        Examples
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 text-orange-600 lg:inline-block lg:mt-0 hover:text-white"
      >
        Blog
      </a>
    </>
  );
}
