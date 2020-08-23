import React from "react";

const NavigateButton = () => {
  return (
    <div className="flex mt-10 justify-center w-full space-x-10">
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
        Prev
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
        Next
      </button>
    </div>
  );
};

export default NavigateButton;
