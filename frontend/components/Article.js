import React from "react";

function Article(props) {
  return (
    <div>
      <p>{props.articleTitle}</p>
      <p>{props.articleDescription}</p>
    </div>
  );
}

export default Article;
