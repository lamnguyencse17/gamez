import imageUploadRequest from "../../../requests/imageUploadRequest";
import base64Handler from "base64-arraybuffer";

const handleUpload = async (src) => {
  const url = await imageUploadRequest(src);
  return url;
};

export default handleUpload;
