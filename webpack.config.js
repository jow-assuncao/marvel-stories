const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point that indicates where
  // should the webpack starts bundling
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, //checks for .css files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // Options for resolving module requests
  // extensions that are used
  resolve: { extensions: ["*", ".ts", ".tsx", ".js", ".jsx"] },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  // Output point is where webpack should
  // output the bundles and assets
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
};
