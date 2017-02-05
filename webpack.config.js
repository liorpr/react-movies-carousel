var path = require('path');
var webpack = require('webpack');

var entries = process.env.NODE_ENV === "production" ? [ './entry.js'] : [
    'webpack-dev-server/client?http://localhost:8080',
    './entry.js'
];

module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "."],
        extensions: ["", ".js", ".min.js", ".scss"]
    },
    entry: {
        app: entries
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: ".",
        inline: true,
        watch: true,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                  presets: ['es2015', 'react'],
                  plugins: ["transform-object-rest-spread"]
                },
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass",
                exclude: [
                    /node_modules/
                ]
            }
        ]
    }
};
