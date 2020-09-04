const uploadHandler = require("./handlers/image");
const express = require("express");
const next = require("next");
const compression = require("compression");

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express(compression());
  server.get("/public/*", (req, res) => {
    let target = req.originalUrl.replace("..", "");
    return res.sendFile(__dirname + "/public" + target);
  });

  server.post("/api/upload-image", uploadHandler);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
