'use strict';
var path = require('path');
require('webpack');

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
                exclude: /(node_modules)/,
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
