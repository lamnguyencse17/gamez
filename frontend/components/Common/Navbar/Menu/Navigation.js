import React from "react";
import Link from "next/link";

export default function Navigation(props) {
  return (
    <>
      {props.tags.map((tag) => {
        return (
          <Link href={`/tag/${tag.tagName}`} key={tag._id}>
            <a className="block mt-4 mr-6 text-orange-600 lg:inline-block lg:mt-0 hover:text-white">
              {tag.tagName}
            </a>
          </Link>
        );
      })}
    </>
  );
}
