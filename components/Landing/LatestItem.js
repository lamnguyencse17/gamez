import React from "react";

export default function LatestItem() {
  return (
    <div className="w-full h-32 lg:flex">
      <img
        className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
        src="https://cdn.oneesports.gg/wp-content/uploads/2020/08/Valorant_JettTrailer-768x432.jpg"
      />
      <div className="flex flex-col justify-between leading-normal bg-white border-b-2 border-l-2 border-r-2 border-gray-400 rounded-b lg:w-4/5 py-auto lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
        <div className="mx-4 my-auto">
          <div className="text-xl font-bold text-gray-900">
            Can coffee make you a better developer?
          </div>
        </div>
      </div>
    </div>
  );
}
