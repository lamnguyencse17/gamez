import formidable from "formidable-serverless";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};
const uploadHandler = (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      {
        let form = new formidable.IncomingForm();
        form.uploadDir = path.join(process.cwd(), "/public");
        form.keepExtensions = true;
        form.maxFileSize = 5 * 1024 * 1024;
        form.parse(req, (err, fields, files) => {
          if (err) {
            return res.send(err);
          }
          return res.send(`http://localhost:8080/image/${files.name}`);
        });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
export default uploadHandler;
