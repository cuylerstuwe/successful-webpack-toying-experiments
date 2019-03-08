
const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: "none",
    module: { 
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/temp.html",
            filename: "index.html",
        })
    ]
} )