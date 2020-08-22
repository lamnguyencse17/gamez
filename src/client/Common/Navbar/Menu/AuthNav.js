import React from "react";

export default function AuthNav() {
  return (
    <>
        <button
          href="#"
          className="inline-block px-5 py-2 mt-4 leading-none text-white border border-orange-600 rounded hover:border-transparent hover:text-orange-600 hover:bg-white lg:mt-0 md:ml-10"
        >
          Sign Up
        </button>
        <button
          href="#"
          className="inline-block px-5 py-2 mt-4 leading-none text-white border border-orange-600 rounded hover:border-transparent hover:text-orange-600 hover:bg-white lg:mt-0 md:ml-10"
        >
          Login
        </button>
    </>
  );
}
