import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditSpace from "./Editor/EditSpace";
import TitleForm from "./Editor/TitleForm";
import DescriptionForm from "./Editor/DescriptionForm";
import createArticleValidator from "../validators/createArticleValidator";
import { debounce } from "lodash";
import {
  clearArticle,
  createArticle,
  setArticleContent,
} from "./redux/actions/article";
import { useRouter } from "next/router";
import TagDropdown from "./Editor/TagDropdown.js";

function CreateArticle(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);
  const [error, setError] = useState({
    articleTitle: null,
    articleDescription: null,
    articleContent: null,
    createArticle: null,
  });
  const [thumbnail, setThumbnail] = useState({ isSet: false });
  const handleChangeContent = debounce((content) => {
    dispatch(setArticleContent(content));
  }, 1000);

  const { articleDescription, articleTitle, articleContent } = article;

  const resetError = () => {
    setTimeout(
      () =>
        setError({
          articleTitle: null,
          articleDescription: null,
          articleContent: null,
          createArticle: null,
        }),
      5000
    );
  };
  const validateArticle = (articleDetails) => {
    const articleValidation = createArticleValidator(articleDetails);
    if (
      articleValidation.articleContent ||
      articleValidation.articleDescription ||
      articleValidation.articleTitle
    ) {
      setError({ ...error, ...articleValidation });
      resetError();
      return false;
    }
    if (!thumbnail.isSet) {
      setError({
        articleTitle: null,
        articleDescription: null,
        articleContent: null,
        createArticle: "One image is required to be used for thumbnail",
      });
      resetError();
      return false;
    }
    return true;
  };
  const handleSubmitArticle = async () => {
    const articleDetails = {
      articleContent: articleContent,
      articleTitle: articleTitle,
      articleDescription: articleDescription,
      isDraft: false,
      articleThumbnail: thumbnail.url,
    };
    if (!validateArticle(articleDetails)) {
      return -1;
    }
    const createArticleResult = await dispatch(createArticle(articleDetails));
    if (!createArticleResult.status) {
      setError({ ...error, createArticle: createArticleResult.message });
      resetError();
      return -1;
    }
    dispatch(clearArticle());
    router.push("/");
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="text-2xl text-red-500">{error.createArticle}</div>
      <div className="w-4/5 mb-10 mt-5 mx-auto border-2 border-black p-5 space-y-5">
        <div className="text-red-500 italic">{error.articleTitle}</div>
        <TitleForm title={articleTitle} />
        <div className="text-red-500 italic">{error.articleDescription}</div>
        <DescriptionForm description={articleDescription} />
        <EditSpace
          changeContent={handleChangeContent}
          readOnly={false}
          setThumbnail={setThumbnail}
        />
        <div className="text-red-500 italic">{error.articleContent}</div>
        <TagDropdown />
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
