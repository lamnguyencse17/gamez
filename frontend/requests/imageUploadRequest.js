import axios from "axios";
import { nanoid } from "nanoid";

const imageUploadRequest = async (image) => {
  const form = new FormData();
  await form.append("files", image[0], nanoid(20));
  return await axios
    .post(`${process.env.FRONT_END_URL}/api/upload-image`, form, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export default imageUploadRequest;
