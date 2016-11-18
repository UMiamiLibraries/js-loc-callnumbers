var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ["./src/app/assets/scripts/entry.js"],
    output: {
        path: "./dist/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [

            { test: /\.css$/, loaders: [ 'style-loader', 'css-loader?modules&importLoaders=1' ] },
            { test: /\.png$/, loader: "file-loader" }

        ]
    },
    pure: {
        loaders: {
            css: ExtractTextPlugin.extract( 'css' )
        }
    },
    plugins: [

        new ExtractTextPlugin({
            filename: "[name].css"
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

    ]
}