const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Replaces `contentBase`
    },
    open: false, // Prevents automatically opening the browser
    hot: true, // Enables hot module replacement
    devMiddleware: {
      writeToDisk: true, // Enables writing files to disk
    },
    port: 3000, // Change to the desired port
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|jpg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "assets", // Defines where files will be placed in the output folder
        },
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
