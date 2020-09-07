import React, { useEffect } from "react";
import Index from "../components/Index";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../components/redux/actions/auth";

export async function getStaticProps() {
  const latestArticles = await axios.get(
    "http://localhost:3000/article?limit=3&offset=0"
  );
  const randomArticles = await axios.get(
    "http://localhost:3000/article/random?limit=3"
  );
  return {
    props: {
      latestArticles: latestArticles.data.articles,
      _csrf: latestArticles.data._csrf,
      randomArticles: randomArticles.data.articles,
    },
    revalidate: 10,
  };
}

const indexPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuth({ _csrf: props._csrf }));
  });
  return (
    <>
      <Index {...props} />
    </>
  );
};

export default indexPage;
