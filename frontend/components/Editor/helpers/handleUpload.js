import imageUploadRequest from "../../../requests/imageUploadRequest";
import base64Handler from "base64-arraybuffer";

const handleUpload = async (src) => {
  // const byteCharacters = atob(
  //   src.replace(/^data:image\/(png|jpg);base64,/, "")
  // );
  // const byteNumbers = new Array(byteCharacters.length);
  // for (let i = 0; i < byteCharacters.length; i++) {
  //   byteNumbers[i] = byteCharacters.charCodeAt(i);
  // }
  // const byteArray = new Uint8Array(byteNumbers);
  let mimeType = src.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
  console.log(mimeType);
  const image = base64Handler.decode(src);
  const blob = new Blob([image], { type: mimeType });
  const url = await imageUploadRequest(blob);
  console.log(url);
  return url;
};

export default handleUpload;
