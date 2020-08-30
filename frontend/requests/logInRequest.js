import axios from "axios";

const logInRequest = (logInDetails) => {
  return axios
    .post(`${process.env.BACKEND_END_URL}/auth/login`, {
      ...logInDetails,
    })
    .then((response) => {
      console.log(response);
      const { user, token } = response.data;
      return { status: true, user, token };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default logInRequest;
