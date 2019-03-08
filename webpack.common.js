const path = require("path");

module.exports = {
    devtool: "none",
    entry: {
        main: "./src/index.js",
        vendor: "./src/vending.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["to-string-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    }
}