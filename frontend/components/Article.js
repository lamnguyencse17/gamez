import React from "react";
import dynamic from "next/dynamic";
// dynamic loading will prevent mismatch in draft-js data-key-prop
const Reader = dynamic(() => import("./Reader/Reader"));

function Article(props) {
  return (
    <div className="container mx-auto">
      <div className="font-bold text-5xl my-8">{props.articleTitle}</div>
      <div className="text-3xl my-8">{props.articleDescription}</div>
      <div className="mt-10">
        <Reader articleContent={props.articleContent} />
      </div>
    </div>
  );
}

export default Article;
