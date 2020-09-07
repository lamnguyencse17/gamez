import React from "react";
import SideCard from "./SideItem";

export default function SideNews(props) {
  return (
    <div className="space-y-8">
      {props.randomArticles.map((article) => {
        return <SideCard key={article._id} {...article} />;
      })}
    </div>
  );
}
