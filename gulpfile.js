'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('index', function(cb) {

    var _ = require('lodash');
    var path = require('path');
    var resolve = path.resolve;
    var fs = require('fs');
    var extra = require('fs-extra');

    fs.readFile(resolve(__dirname, 'test', 'index.vm'), 'utf8', function(err, data) {

        if (err) {
            cb(err);
            return;
        }
        var compiled = _.template(data);
        var modules = [];
        extra.walk(resolve(__dirname, 'test'))
            .on('data', function(item) {
                if (item.stats.isFile() && !item.path.endsWith('shot-in-es6/test/index.vm') && !item.path.endsWith('shot-in-es6/test/index.js') && !item.path.endsWith('shot-in-es6/test/test.bundle.js')) {
                    modules.push(item.path);
                }
            })
            .on('end', function() {
                var out = compiled({modules: modules});
                extra.outputFile(resolve(__dirname, 'test', 'index.js'), out, cb);
            });
    });

});

gulp.task('test', ['index'], function(callback) {
    var resolve = require('path').resolve;
    var config = require('./webpack.config');
    var karma = require('karma');
    var Server = karma.Server;

    var compiler = webpack(config);
    compiler.run(function(err, stats) {
        if (err) {
            gutil.log('webpack', err);
            return;
        }
        Server.start({
            configFile: resolve(__dirname, 'karma.conf.js')
        }, function(exitCode) {
            gutil.log('Karma has exited with ' + exitCode);
            process.exit(exitCode);
        });
    });

});
