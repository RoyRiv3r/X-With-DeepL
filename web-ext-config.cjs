module.exports = {
  sourceDir: "./dist/",
  artifactsDir: "./dist/",
  build: {
    overwriteDest: true,
  },
  run: {
    firefox: "firefox",
    startUrl: ["https://x.com"],
    firefoxProfile: "Default User",
    browserConsole: true,
  },
  ignoreFiles: [
    "package.json",
    "package-lock.json",
    "webpack.config.js",
    "web-ext-config.js",
    "watch-changes.js",
    "node_modules/**",
  ],
};
