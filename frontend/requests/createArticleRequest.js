import axios from "axios";

const createArticleRequest = async (articleDetails, _csrf) => {
  const {
    articleTitle,
    articleDescription,
    articleContent,
    isDraft,
  } = articleDetails;
  return await axios
    .post(
      `${process.env.BACKEND_END_URL}/article`,
      {
        articleTitle,
        articleDescription,
        articleContent,
        isDraft,
      },
      { headers: { "csrf-token": _csrf } }
    )
    .then((res) => {
      return { status: true, newArticle: res.data.newArticle };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default createArticleRequest;
