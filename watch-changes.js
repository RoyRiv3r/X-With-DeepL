const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");

chokidar
  .watch(distDir, { ignored: /(^|[\/\\])\../ })
  .on("all", (event, filePath) => {
    if (event === "change" || event === "add") {
      const manifestPath = path.join(distDir, "manifest.json");
      fs.utimes(manifestPath, new Date(), new Date(), (err) => {
        if (err) console.error(err);
      });
    }
  });
