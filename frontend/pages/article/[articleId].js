import React from "react";
import Navbar from "../../components/Common/Navbar";
import getArticleIdRequest from "../../requests/getArticleIdRequest";
import getArticleRequest from "../../requests/getArticleRequest";
import { useRouter } from "next/router";
import Article from "../../components/Article";

export async function getStaticPaths() {
  const getArticleIdResult = await getArticleIdRequest(50);
  if (!getArticleIdResult.status) {
    return { paths: [], fallback: true };
  }
  return {
    paths: getArticleIdResult.articleIds.map((_id) => {
      return {
        // eslint-disable-next-line no-unused-labels
        params: {
          // eslint-disable-next-line no-unused-labels
          articleId: _id,
        },
      };
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const getArticleResult = await getArticleRequest(params.articleId);
  if (!getArticleResult.status) {
    return {
      props: {
        article: null,
      },
      revalidate: 1,
    };
  }
  return {
    props: { article: getArticleResult.article },
    revalidate: 1,
  };
}

function articlePage(props) {
  const router = useRouter();
  // console.log(router.isFallback);
  // console.log(!router.isFallback && !props.article && process.browser);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!router.isFallback && !props.article && process.browser) {
    //TODO: async work to manually render it
  }
  return <div>{!!props.article && <Article {...props.article} />}</div>;
}

export default articlePage;
