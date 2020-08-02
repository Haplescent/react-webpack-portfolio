const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    Form: "./src/js/components/Form.js",
    AppBar: "./src/js/components/AppBar.js",
    ExpansionPanel: "./src/js/components/ExpansionPanel.js",
    Grid: "./src/js/components/Grid.js",
    ImageGridList: "./src/js/components/ImageGridList.js",
    ProfileCard: "./src/js/components/ProfileCard.js",
    tileData: "./src/js/components/tileData.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
