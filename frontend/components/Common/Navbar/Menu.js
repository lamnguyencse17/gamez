import React from "react";
import Navigation from "./Menu/Navigation";
import SearchBar from "./Menu/SearchBar";
import AuthNav from "./Menu/AuthNav";
import { useSelector } from "react-redux";
import validateMongId from "../../../validators/pureValidators/mongoIdValidator";

export default function Menu() {
  const isLogin = validateMongId(useSelector(state => state.user._id));
  return (
    <div className="flex-grow block w-full lg:text-xl md:text-sm md:flex md:items-center md:w-auto">
      <div className="flex">
        <Navigation/>
      </div>
      <div className="flex-auto">
        <SearchBar/>
      </div>
      <div className="flex items-end">
        {isLogin ? <></> : <AuthNav/>}
      </div>
    </div>
  );
}
