import React from "react";
import EditSpace from "./Editor/EditSpace";
import TitleForm from "./Editor/TitleForm";
import DescriptionForm from "./Editor/DescriptionForm";

function CreateArticle(props) {
  return (
    <div className="container mx-auto mt-10">
      <div className="w-4/5 mb-10 mt-5 mx-auto border-2 border-black p-5 space-y-5">
        <TitleForm />
        <DescriptionForm />
        <EditSpace />
      </div>
    </div>
  );
}

export default CreateArticle;
