import axios from "axios";

const getArticleIdRequest = async (limit) => {
  return await axios
    .get(`${process.env.BACKEND_END_URL}/article/id?limit=${limit}`)
    .then((res) => {
      return { status: true, articleIds: [...res.data] };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default getArticleIdRequest;
