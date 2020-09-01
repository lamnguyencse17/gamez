import axios from "axios";

const getArticleRequest = async (articleId) => {
  return await axios
    .get(`${process.env.BACKEND_END_URL}/article/${articleId}`)
    .then((res) => {
      return { status: true, article: res.data.article };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default getArticleRequest;
