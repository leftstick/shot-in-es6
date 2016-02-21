'use strict';

var gulp = require('gulp');

gulp.task('index', function(cb) {

    var template = require('lodash.template');
    var path = require('path');
    var resolve = path.resolve;
    var fs = require('fs');
    var extra = require('fs-extra');

    fs.readFile(resolve(__dirname, 'test', 'index.vm'), 'utf8', function(err, data) {
        if (err) {
            return cb(err);
        }

        var modules = [];
        extra
            .walk(resolve(__dirname, 'test'))
            .on('data', function(item) {
                if (item.stats.isFile() &&
                    !item.path.endsWith('shot-in-es6/test/index.vm') &&
                    !item.path.endsWith('shot-in-es6/test/index.js') &&
                    !item.path.endsWith('shot-in-es6/test/test.bundle.js')) {
                    modules.push(item.path);
                }
            })
            .on('end', function() {
                var out = template(data)({modules: modules});
                extra.outputFile(resolve(__dirname, 'test', 'index.js'), out, cb);
            });
    });

});

gulp.task('test', ['index'], function(callback) {
    var resolve = require('path').resolve;
    var karma = require('karma');
    var Server = karma.Server;

    Server.start({
        configFile: resolve(__dirname, 'karma.conf.js')
    }, function(exitCode) {
        console.log('Karma has exited with ' + exitCode);
        process.exit(exitCode);
    });

});
