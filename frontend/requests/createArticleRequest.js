import axios from "axios";

const createArticleRequest = (articleDetails, _csrf) => {
  const {
    articleTitle,
    articleDescription,
    articleContent,
    isDraft,
  } = articleDetails;
  axios
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
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export default createArticleRequest;
