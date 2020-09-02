import React from "react";
import dynamic from "next/dynamic";

const Reader = dynamic(() => import("./Reader/Reader"), { ssr: false });

function Article(props) {
  return (
    <div>
      <p>{props.articleTitle}</p>
      <p>{props.articleDescription}</p>
      <Reader articleContent={props.articleContent} />
    </div>
  );
}

export default Article;
