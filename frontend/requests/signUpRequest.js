import axios from "axios";

const signUpRequest = (signUpDetails) => {
  return axios
    .post(`${process.env.BACK_END_SERVER}/auth/signup`, {
      ...signUpDetails,
    })
    .then(() => {
      return { status: true };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default signUpRequest;
