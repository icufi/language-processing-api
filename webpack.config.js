const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { plugins } = require("./webpack.dev");
module: {
    rules: [
            {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
            }
    ]
}

module.exports = {
  entry: "./src/client/index.js",
};

plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    }),
]
