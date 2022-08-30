const path = require('path');

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
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
              },
        ],
    },
    devServer: {
        port: 4444,
        open: true,
        stats: "errors-only",
    },
  };