import React, { useEffect, useState } from "react";
import Navigation from "./Menu/Navigation";
import SearchBar from "./Menu/SearchBar";
import AuthNav from "./Menu/AuthNav";
import UserNav from "./Menu/UserNav";
import { useSelector } from "react-redux";
import validateMongoId from "../../../validators/pureValidators/mongoIdValidator";
import getNavbarTags from "../../../requests/getNavbarTags";

export default function Menu(props) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    //IIFE to use async/await
    (async () => {
      const getTagsResult = await getNavbarTags();
      if (!getTagsResult.status) {
        console.log(getTagsResult.message);
        return -1;
      }
      setTags(getTagsResult.tags);
    })();
  });
  const isLogin = validateMongoId(useSelector((state) => state.user._id));
  return (
    <div className="flex-grow block w-full lg:text-xl md:text-sm sm:text-xs md:flex md:items-center md:w-auto">
      <div className="flex">
        <Navigation tags={tags} />
      </div>
      <div className="flex-auto">
        <SearchBar />
      </div>
      <div className="flex items-end">
        {isLogin ? <UserNav /> : <AuthNav />}
      </div>
    </div>
  );
}
