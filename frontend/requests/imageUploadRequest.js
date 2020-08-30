import axios from "axios";
import { nanoid } from "nanoid";

const imageUploadRequest = async (image) => {
  const form = new FormData();
  console.log(image);
  await form.append("files", image, nanoid(20));
  return await axios
    .post("http://localhost:8080/api/upload-image", form, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((url) => url)
    .catch((err) => console.log(err));
};

export default imageUploadRequest;
