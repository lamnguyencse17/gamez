import React from "react";

export default function AuthNav() {
  return (
    <>
        <button
          href="#"
          className="inline-block px-5 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0 md:ml-10"
        >
          Sign Up
        </button>
        <button
          href="#"
          className="inline-block px-5 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0 md:ml-10"
        >
          Login
        </button>
    </>
  );
}
