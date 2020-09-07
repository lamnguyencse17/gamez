import axios from "axios";

const getNavbarTags = async () => {
  return await axios
    .get(`${process.env.BACKEND_END_URL}/tag?limit=6`)
    .then((res) => {
      return { status: true, tags: res.data.tags, _csrf: res.data._csrf };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default getNavbarTags;
