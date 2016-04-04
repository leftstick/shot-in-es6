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
                loader: 'traceur?experimental&runtime',
                exclude: /(node_modules)/
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname, 'test')
        ]
    }
};
