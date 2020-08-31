import axios from "axios";

const updateProfileRequest = (updateDetails, _csrf) => {
  return axios
    .patch(
      `${process.env.BACKEND_END_URL}/user`,
      {
        ...updateDetails,
      },
      { headers: { "csrf-token": _csrf } }
    )
    .then((response) => {
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
