'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './test/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'test'),
        filename: 'test.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [
                        'es2015'
                    ]
                }
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname, 'test')
        ]
    }
};
