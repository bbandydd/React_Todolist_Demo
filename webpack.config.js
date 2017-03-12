const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/main.js')],
    output: {
        filename: './dist/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader'],
            }
        ]
    }, 
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};