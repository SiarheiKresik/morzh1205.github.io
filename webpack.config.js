const path = require('path');


const config = {
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    publicPath: "dist/"
  },
  devServer: {
    overlay: true
  }
};

module.exports = config;
