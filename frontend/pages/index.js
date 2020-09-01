import React, { useEffect } from "react";
import Index from "../components/Index";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../components/redux/actions/auth";

export async function getStaticProps() {
  const response = await axios.get(
    "http://localhost:3000/article?limit=3&offset=0"
  );
  return {
    props: { articles: response.data.articles, _csrf: response.data._csrf },
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
