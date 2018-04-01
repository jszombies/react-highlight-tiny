/* global __dirname */
var path = require('path');
var srcDir = path.resolve(__dirname, 'src');
var distDir = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(__dirname, './index.jsx'),
    output: {
        path: distDir,
        library: 'ReactHighlightTiny',
        libraryTarget: 'umd',
        filename: 'bundle.js'
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
                    }
                }]
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode: 'development'
};
