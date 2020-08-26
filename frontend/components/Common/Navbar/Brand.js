import React from "react";
import Link from "next/link";

export default function Brand() {
  return (
    <div className="flex items-center flex-shrink-0 mr-6 text-white">
      <Link href="/">
        <img
          className="w-32 mt-2"
          src="https://user-images.githubusercontent.com/46278271/90849148-d5386b00-e398-11ea-82c5-75deedaf7432.png"
          alt="Sunset in the mountains"
        ></img>
      </Link>
    </div>
  );
}
