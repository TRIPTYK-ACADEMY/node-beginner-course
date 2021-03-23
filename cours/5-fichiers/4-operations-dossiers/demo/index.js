const fs = require("fs/promises");

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const main = async () => {
  await fs.mkdir("dossier");
  console.log("📁 Dossier créé !");

  await sleep(2000);
  await fs.rename("dossier", "dossier-rename");
  console.log("📂 Dossier renommé!");

  await sleep(2000);
  await fs.rename("dossier", "../dossier-rename");
  console.log("📂 Dossier déplacé!");

  await sleep(2000);
  await fs.rmdir("../dossier-rename");
  console.log("📂 Dossier supprimé !");
};

main();
