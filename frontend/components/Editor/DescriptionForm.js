import React from "react";
import { useDispatch } from "react-redux";
import { setArticleDescription } from "../redux/actions/article";
import { debounce } from "lodash";

function DescriptionForm(props) {
  const dispatch = useDispatch();
  const handleChangeDescription = debounce((description) => {
    dispatch(setArticleDescription(description));
  }, 1000);
  const handleChange = (e) => {
    handleChangeDescription(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="w-full shadow border-2 border-gray-200"
        placeholder="Description"
        onChange={handleChange}
      />
    </>
  );
}

export default DescriptionForm;
