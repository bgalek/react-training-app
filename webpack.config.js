var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './client/scripts/main.js',
    output: {
        path: './public/dist',
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                loader: 'url?limit=10000'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/')
    }
};