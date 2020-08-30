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
        let form = new formidable.IncomingForm({
          uploadDir: path.join(process.cwd(), "/public"),
          keepExtensions: true,
          maxFileSize: 5 * 1024 * 1024,
        });
        form.on("fileBegin", (name, file) => {
          //rename the incoming file to the file's name
          file.path = form.uploadDir + "/" + file.name;
        });
        form.parse(req, (err, fields, files) => {
          if (err) {
            console.log(err);
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
