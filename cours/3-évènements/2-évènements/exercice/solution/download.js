const events = require("events");

const download = new events.EventEmitter();
let isDownloading = false;

exports.isDownloading = false;

exports.on = (event, fonction) => {
  return download.on(event, fonction);
};

exports.once = (event, fonction) => {
  return download.once(event, fonction);
};

exports.download = (file) => {
  if (isDownloading) {
    throw new Error("Vous avez déjà lancé un téléchargment");
  }

  let progress = 0;
  isDownloading = true;

  download.emit("begin_download", file);

  const interval = setInterval(() => {
    progress += 10;
    if (progress >= 100) {
      download.emit("progress", 100);
      download.emit("end_download", "test123*");
      isDownloading = false;
      clearInterval(interval);
      return;
    }

    download.emit("progress", progress);
  }, 1000);
};
