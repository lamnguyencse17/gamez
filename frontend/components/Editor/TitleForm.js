import React from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { setArticleTitle } from "../redux/actions/article";

function TitleForm(props) {
  const dispatch = useDispatch();
  const handleChangeTitle = debounce((description) => {
    dispatch(setArticleTitle(description));
  }, 1000);
  const handleChange = (e) => {
    handleChangeTitle(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="w-full shadow border-2 border-gray-200"
        placeholder="Title"
        value={props.title}
        onChange={handleChange}
      />
    </>
  );
}

export default TitleForm;
