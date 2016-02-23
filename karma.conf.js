'use strict';

require('webpack');
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        autoWatch: false,
        basePath: __dirname,
        browsers: [
            'PhantomJS'
        ],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './node_modules/babel-polyfill/dist/polyfill.min.js',
            'test/index.js'
        ],
        preprocessors: {
            './test/index.js': [
                'webpack'
            ]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        frameworks: [
            'mocha'
        ],
        reporters: ['mocha'],
        logLevel: config.LOG_INFO,
        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher'
        ],
        singleRun: true
    });
};
