import React from "react";
import Link from "next/link";

export default function AuthNav() {
  return (
    <>
      <button
        href=""
        className="inline-block px-5 py-2 mt-4 leading-none text-white border border-orange-600 rounded hover:border-transparent hover:text-orange-600 hover:bg-white lg:mt-0 md:ml-10"
      >
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>

      </button>

      <button
        className="inline-block px-5 py-2 mt-4 leading-none text-white border border-orange-600 rounded hover:border-transparent hover:text-orange-600 hover:bg-white lg:mt-0 md:ml-10"
      >
        <Link href="/login">
          <a>Login</a>
        </Link>
      </button>

    </>
  );
}
