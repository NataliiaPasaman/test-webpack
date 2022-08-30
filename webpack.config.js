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
        ],
    },
    devServer: {
        port: 5555,
        open: true,
        stats: "errors-only",
    },
  };