const express = require('express');
const imageRouter = require('./routes/image.routes')
// const sharp = require('sharp');

const PORT = process.env.PORT || 4000;

const app = express();

const getRandomImage = () => {
  return './images/software-developer.jpg'
}

app.use('/image', imageRouter)


app.use(function(req, res, next){
  res.status(404);

  res.format({
    html: function () {
      res.status(404).send({ url: req.url })
    },
    json: function () {
      res.json({ error: 'Not found' })
    },
    default: function () {
      res.type('txt').send('Not found')
    }
  })
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  res.status(500).send({ error: err });
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})