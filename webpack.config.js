const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-bundler.js',
      },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader", 
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ],
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
              },
        ],
    },
    plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
    devServer: {
        port: 4444,
        open: true,
    },
  };