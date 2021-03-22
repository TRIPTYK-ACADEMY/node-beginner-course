const fs = require("fs/promises");

const names = ["Pierre", "Paul", "Jacques"];

const main = async () => {
  await fs.writeFile("contact.txt", names.join("\n"));
  await fs.appendFile("contact.txt", "\nAjouté ! 😈");
};

main();
