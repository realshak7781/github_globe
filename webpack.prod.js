const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  devtool: "source-map", // Keeps source maps for debugging production code
  optimization: {
    minimize: true, // Enable JavaScript minification
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Path to your index.html in the root directory
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|jpg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "assets", // Places image files in 'assets' folder
        },
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
