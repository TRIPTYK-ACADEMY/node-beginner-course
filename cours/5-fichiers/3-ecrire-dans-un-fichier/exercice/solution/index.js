const fs = require("fs/promises");

const mergeFiles = async (file1, file2) => {
  const [content1, content2] = await Promise.all([
    fs.readFile(file1),
    fs.readFile(file2),
  ]);

  await fs.writeFile(file1 + file2, content1 + content2);
};

mergeFiles("file1.txt", "contact.log");

const mergeFilesInfinite = async (...files) => {
  const contents = await Promise.all(files.map((f) => fs.readFile(f)));

  await fs.writeFile(files.join(""), contents.join());
};

mergeFilesInfinite("file1.txt", "contact.log", "index.js");
