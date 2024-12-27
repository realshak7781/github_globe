const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: false,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Reference your HTML template file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|jpg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
