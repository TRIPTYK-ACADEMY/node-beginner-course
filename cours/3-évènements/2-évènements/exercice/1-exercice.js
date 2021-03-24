/**
 * Simulez un module de téléchargement, il doit implémenter les évènements utilisés ci-dessous:
 * - Le début du téléchargement, qui doit émettre le nom du fichier à télécharger
 * - Le pourcentage du téléchargement, qui augmente de 10 pourcents toutes les secondes et doit émettre le pourcentage actuel
 * - La fin du téléchargement, qui émet le contenu du fichier (une chaine de caractères au pif actuellement)
 *
 * Si un téléchargement est en cours, on ne peut relancer la fonction "download"
 */
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
