import React, { useEffect } from "react";
import Index from "../components/Index";
import axios from "axios";

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3000/article?limit=3&offset=0");
  return {props: { articles: response.data.articles, _csrf: response.data._csrf }};
}

const indexPage = (props) => {
  return (
    <>
      <Index {...props}/>
    </>
  );
};

export default indexPage;
