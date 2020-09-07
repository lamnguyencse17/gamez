import React from "react";
import Link from "next/link";

export default function SideItem(props) {
  return (
    <div className="w-full lg:h-32 md:h-24 md:flex">
      <img
        className="flex-none lg:h-48 md:h-24 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
        src="https://cdn.oneesports.gg/wp-content/uploads/2020/08/Valorant_JettTrailer-768x432.jpg"
      />
      <div className="flex flex-col justify-between leading-normal bg-white border-b-2 border-l-2 border-r-2 border-gray-400 rounded-b py-auto lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
        <div className="mx-4 my-auto overflow-y-hidden">
          <div className="lg:text-xl md:text-sm font-bold text-gray-900">
            <Link href={`/article/${props._id}`}>
              <a>{props.articleTitle}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
