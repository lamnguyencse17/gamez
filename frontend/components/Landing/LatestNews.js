import React from "react";
import LatestItem from "./LatestItem";

export default function LatestNews(props) {
  return (
    <div className="mt-10 space-y-5">
      {props.latestNews.map(latestNew => <LatestItem key={latestNew._id} {...latestNew}/>)}
    </div>
  );
}
