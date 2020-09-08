import axios from "axios";

const getTagRequest = async (name) => {
  return await axios
    .get(`${process.env.BACKEND_END_URL}/tag/${name}`)
    .then((res) => {
      return {
        status: true,
        tag: res.data.tag,
        _csrf: res.data._csrf,
      };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default getTagRequest;
