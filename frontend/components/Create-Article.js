import React from "react";
import EditSpace from "./Editor/EditSpace";
import TitleForm from "./Editor/TitleForm";

function CreateArticle(props) {
  return (
    <div className="container mx-auto mt-10">
      <div className="w-4/5 mb-10 mt-5 mx-auto border-2 border-black p-5">
        <TitleForm />
        <EditSpace />
      </div>
    </div>
  );
}

export default CreateArticle;
