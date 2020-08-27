import axios from "axios";

const getUserRequest = () => {
  return axios
    .get("http://localhost:3000/user")
    .then((response) => {
      const { user, _csrf } = response.data;
      return { status: true, user, _csrf };
    })
    .catch((err) => {
      return { status: false, message: err.response.data.message };
    });
};

export default getUserRequest;
