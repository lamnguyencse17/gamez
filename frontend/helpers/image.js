const jimp = require("jimp");

const optimizeImageSize = (filePath) => {
  return new Promise((resolve, reject) => {
    jimp.read(filePath, (err, image) => {
      if (err) {
        reject(err);
      }
      image.quality(60).write(filePath);
      resolve();
    });
  });
};

module.exports = { optimizeImageSize };
