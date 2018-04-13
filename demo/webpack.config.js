const path = require('path');

const distDir = path.resolve(__dirname, 'build-demo');

module.exports = {
  entry: path.resolve(__dirname, './index.jsx'),
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: distDir,
    library: 'ReactHighlightTiny',
    libraryTarget: 'umd',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: distDir,
    port: 8888,
  },
  module: {
    rules: [
      {
        test: /.*\.jsx/,
        use: 'babel-loader',
      },
      {
        test: /.*\.html/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          query: {
            import: false,
            importLoaders: 1,
            localIdentName: '[folder]__[local]___[hash:base64:5]',
            modules: true,
            sourceMap: true,
          },
        }],
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  mode: 'development',
};
