import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditSpace from "./Editor/EditSpace";
import TitleForm from "./Editor/TitleForm";
import DescriptionForm from "./Editor/DescriptionForm";
import createArticleValidator from "../validators/createArticleValidator";
import createArticleRequest from "../requests/createArticleRequest";

function CreateArticle(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    articleTitle: null,
    articleDescription: null,
    articleContent: null,
  });
  const handleSubmitArticle = async () => {
    const articleContent = await localStorage.getItem("editorState");
    const articleValidation = createArticleValidator({
      articleContent,
      articleTitle: title,
      articleDescription: description,
    });
    if (
      articleValidation.articleContent ||
      articleValidation.articleDescription ||
      articleValidation.articleTitle
    ) {
      setError(articleValidation);
      setTimeout(
        () =>
          setError({
            articleTitle: null,
            articleDescription: null,
            articleContent: null,
          }),
        5000
      );
      return -1;
    }
    const createAritlceResult = await createArticleRequest({
      articleTitle: title,
      articleDescription: description,
      articleContent,
      isDraft: false,
    });
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="w-4/5 mb-10 mt-5 mx-auto border-2 border-black p-5 space-y-5">
        <div className="text-red-500 italic">{error.articleTitle}</div>
        <TitleForm title={title} setTitle={setTitle} />
        <div className="text-red-500 italic">{error.articleDescription}</div>
        <DescriptionForm
          description={description}
          setDescription={setDescription}
        />
        <EditSpace />
        <div className="text-red-500 italic">{error.articleContent}</div>
        <div className="flex justify-end">
          <button
            className="border-black border-2 p-2 shadow"
            onClick={handleSubmitArticle}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateArticle;
