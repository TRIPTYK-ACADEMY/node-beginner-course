const { Image } = require("image-js");

const execute = async () => {
  let image = await Image.load("cat.jpg");
  let grey = image.resize({ width: 200 }).rotate(180);
  await grey.save("cat.png");
};

execute().catch(console.error);
