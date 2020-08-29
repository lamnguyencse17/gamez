import React from "react";
import Navbar from "../components/Common/Navbar";
import CreateArticle from "../components/Create-Article";

function CreatePage(props) {
  return (
    <div>
      <Navbar />
      <CreateArticle />
    </div>
  );
}

export default CreatePage;
