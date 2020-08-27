import axios from "axios";

const signUpRequest = (signUpDetails) => {
  return axios
    .post("http://localhost:3000/auth/signup", {
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
