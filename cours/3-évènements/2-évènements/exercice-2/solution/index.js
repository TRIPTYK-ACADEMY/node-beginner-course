const downloader = require("./download");

downloader.on("progress", (progress) => {
  console.log("⬇ Downloading : ", progress, "%");
});

downloader.once("begin_download", (file) => {
  console.log("✔ Lancement du téléchargement de : ", file);
});

downloader.once("end_download", (content) => {
  console.log("📝 Contenu du fichier: ", content);
});

downloader.download("test.txt");
