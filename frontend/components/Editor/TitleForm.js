import React from "react";

function TitleForm(props) {
  return (
    <>
      <input
        type="text"
        className="w-full shadow border-2 border-gray-200"
        placeholder="Title"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />
    </>
  );
}

export default TitleForm;
