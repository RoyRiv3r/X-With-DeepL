const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "scripts/contentScript": "./src/scripts/twitter.js",
    "scripts/background": "./src/scripts/background.js",
    "options/options": "./src/options/options.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        // Transpile JavaScript files using Babel
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // Handle CSS files
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: "manifest.json" },
        { from: "icons", to: "icons" },
        { from: "src/locales/lang.json", to: "locales/lang.json" }, // Add this line to include the locales directory
        { from: "src/options/index.html", to: "options/index.html" },
        { from: "src/popup/popup.html", to: "popup/popup.html" },
        { from: "src/popup/styles.css", to: "popup/styles.css" },
        { from: "src/options/styles.css", to: "options/styles.css" },
      ],
    }),
  ],
};
