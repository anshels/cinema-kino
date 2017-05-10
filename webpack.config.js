var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + '/public_app/app.js',
    output: {
        path: __dirname + "/public",
        filename: 'index_bundle.js',
        publicPath: "/ "
    },
    module: {
        loaders:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]

    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "assets" }
        ], {})
    ]
}
