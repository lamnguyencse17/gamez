import React from "react";

function DescriptionForm(props) {
  return (
    <>
      <input
        type="text"
        className="w-full shadow border-2 border-gray-200"
        placeholder="Description"
        value={props.description}
        onChange={(e) => props.setDescription(e.target.value)}
      />
    </>
  );
}

export default DescriptionForm;
