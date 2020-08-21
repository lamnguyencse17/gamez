import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img
              className="w-32 mt-2"
              src="https://user-images.githubusercontent.com/46278271/90849148-d5386b00-e398-11ea-82c5-75deedaf7432.png"
              alt="Sunset in the mountains"
            ></img>
          </div>
          {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </a>
            </div>
          </div> */}
        </nav>
      </div>
    );
  }
}
