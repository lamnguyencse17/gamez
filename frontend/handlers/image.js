const path = require("path");
const formidable = require("formidable-serverless");
const { optimizeImageSize } = require("../helpers/image");

const uploadHandler = (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      {
        let form = new formidable.IncomingForm({
          uploadDir: path.join(process.cwd(), "/public/image"),
          keepExtensions: true,
          maxFileSize: 5 * 1024 * 1024,
        });
        form.on("fileBegin", (name, file) => {
          file.path = form.uploadDir + "/" + file.name;
        });
        form.parse(req, (err, fields, files) => {
          if (err) {
            return res.send(err);
          }
          const filePath = form.uploadDir + "/" + files.files.name;
          optimizeImageSize(filePath).then((result, err) => {
            if (err) {
              return res.send(err);
            }
            return res.send(`http://localhost:8080/image/${files.files.name}`);
          });
        });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

module.exports = uploadHandler;
