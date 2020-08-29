import axios from "axios";

const updateProfileRequest = (updateDetails, _csrf) => {
  return axios
    .patch(
      "http://localhost:3000/user",
      {
        ...updateDetails,
      },
      { headers: { "csrf-token": _csrf } }
    )
    .then((response) => {
      console.log(response.data);
      return { status: true, user: response.data };
    })
    .catch((err) => {
      return {
        status: false,
        message: err.response.data.message,
        code: err.response.status,
      };
    });
};

export default updateProfileRequest;
