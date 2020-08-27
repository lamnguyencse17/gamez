import React from "react";
import Link from "next/link";

export default function UserNav() {
  return (
    <>
      <Link href="/profile">
        <button className="inline-block px-5 py-2 mt-4 leading-none text-white border border-orange-600 rounded hover:border-transparent hover:text-orange-600 hover:bg-white lg:mt-0 md:ml-10">
          Your Profile
        </button>
      </Link>
      <Link href="/create">
        <button className="inline-block px-5 py-2 mt-4 leading-none text-white border border-orange-600 rounded hover:border-transparent hover:text-orange-600 hover:bg-white lg:mt-0 md:ml-10">
          Create New Article
        </button>
      </Link>
      <Link href="/stats">
        <button className="inline-block px-5 py-2 mt-4 leading-none text-white border border-orange-600 rounded hover:border-transparent hover:text-orange-600 hover:bg-white lg:mt-0 md:ml-10">
          Statistics
        </button>
      </Link>
    </>
  );
}
