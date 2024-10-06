module.exports = {
  sourceDir: "./dist/",
  artifactsDir: "./dist/",
  build: {
    overwriteDest: true,
  },
  run: {
    firefox: "firefox",
    startUrl: [
      "https://x.com",
      "https://x.com/i/birdwatch/t/1841834817157267685",
      "https://x.com/airi_fact_555/status/1841770143355203731",
    ],
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
