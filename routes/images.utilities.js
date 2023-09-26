const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const seedrandom = require("seedrandom");

const imagePath = path.join(__dirname, "../images");
const images = fs.readdirSync(imagePath);

const process = async (image, { height, width, grayscale, sigma }) =>
  await sharp(image)
    .resize(parseInt(width), parseInt(height))
    .grayscale(grayscale)
    .blur(sigma)
    .webp({ lossless: true })
    .toBuffer();

const random = (seed) => {
  let { random } = Math;
  if (seed) {
    random = seedrandom(seed);
  }

  const randomImage = images[Math.floor(random() * images.length)];
  return path.join(imagePath, randomImage);
};

const getById = (id) => path.join(imagePath, images[id]);

module.exports = {
  process,
  random,
  getById
};
