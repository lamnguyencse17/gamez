import axios from "axios";

const getTagNamesRequest = async (limit) => {
  return await axios
    .get(`${process.env.BACKEND_END_URL}/tag/name?limit=${limit}`)
    .then((res) => {
      return { status: true, tagNames: [...res.data] };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default getTagNamesRequest;
