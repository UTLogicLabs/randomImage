<!-- ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png) -->

# Random Image Generator

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)


## Features

* Provides placeholder images.
* easy to use,
  * Just add the image size you want
    * e.g. `.../200/300` will return a 200x300 image
  * Specify a category of image,
    * e.g. `picsum.photos/200/300?category=nature` will return a 200x300 nature image.

## Tech Stack

**Server:** Node, Express

## Run Locally

Clone the project

```bash
  git clone https://github.com/UTLogicLabs/randomImage.git my-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API

| Parameter    | Type             | Description                                       |
| :----------- | :--------------- | :------------------------------------------------ |
| `id`         | `int`            | **Optional** Get a specific image                 |
| `seed`       | `int \| string`  | **Optional** Seed for the random number generator |
| `width`      | `int`            | **Required**. Width of the image                  |
| `height`     | `int`            | **Optional** Height of the image                  |
| `?grayscale` | bool             | **Optional** Get back a black & white image       |
| `?blur`      | `boolean \| int` | **Optional** Blur the image                       |

Easily get random image by adding desired image size:
```http
  http://localhost:4000/${width}/${height}
```

To get a square image, just add the size.
```http
  http://localhost:4000/${width}
```

### Specific Image

Add an ID to the start to get a specific image.
```http
  http://localhost:4000/image/id/${id}/${width}/${height}
```

### Static Random Image

Get the same random image every time based on a seed.
```http
  http://localhost:4000/image/seed/${seed}/${width}/${height}
```

### Grayscale

Get a grayscale image by appending ?grayscale to the end of the url.

```http
  http://localhost:4000/image/200/300?grayscale
```

### Blur

Get a blurred image by appending ?blur to the end of the url.

```http
http://localhost:4000/image/200/300/?blur
```

You can adjust the amount of blur by providing a number between `1` and `10`.

```http
http://localhost:4000/image/200/300/?blur=2
```

### Advanced Usage
You may combine any of the options above.

For example, to get a specific image that is grayscale and blurred.

```http
http://localhost:4000/image/id/${id}/${width}/${height}?grayscale&blur=2
```

## Deployment

1. Create an image folder for your server.
2. Start server.
3. Enjoy images randomly from your own server.

## Authors

- [@UTLogicLabs](https://www.github.com/UTLogicLabs)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please create an [issue](https://github.com/UTLogicLabs/randomImage/issues).
