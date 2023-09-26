const Images = require('./images.utilities');


const getImage = async (req, res, next) => {
  const { id, seed, height, width = height } = req.params;
  const { grayscale , blur } = req.query;

  const options = {
    width,
    height,
    grayscale: !(grayscale === "false" || grayscale === null || grayscale === undefined),
    sigma: parseInt(blur) || !(blur === "false" || blur === null || blur === undefined)
  }
  let image;

  if (id) {
    image = Images.getById(id);
  } else {
    image = Images.random(seed);
  }
  
  res
    .writeHead(200, {
      "Content-Type": "image/png",
    })
    .end(await Images.process(image, options));
};

module.exports = {
  get: getImage
};
