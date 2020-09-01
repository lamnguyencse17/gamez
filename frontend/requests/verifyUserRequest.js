import axios from "axios";

const verifyUserRequest = async (hash) => {
  return await axios
    .get(`${process.env.BACKEND_END_URL}/auth/verify/${hash}`)
    .then((res) => {
      return { status: true, message: res.data.message };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default verifyUserRequest;
