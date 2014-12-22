(function() {
    'use strict';

    var changed = require('gulp-changed');
    var concat = require('gulp-concat');
    var del = require('del');
    var gulp = require('gulp');
    var jshint = require('gulp-jshint');
    var plumber = require('gulp-plumber');
    var prettify = require('gulp-jsbeautifier');
    var rename = require('gulp-rename');
    var runSequence = require('run-sequence');
    var streamify = require('gulp-streamify');
    var ngAnnotate = require('gulp-ng-annotate');
    var uglify = require('gulp-uglify');
    var wrap = require('gulp-wrap');
    var yargs = require('yargs');


    var paths = {
        src: './src/',
        wrap: './src/wrap.txt',
    };
    var bower = require('./bower.json');
    var pkg = require('./package.json');


    /**
     Clean
     */
    gulp.task('clean-build', function(cb) {
        del(paths.build, cb);
    });


    /**
     Build
     */
    gulp.task('build', function(cb) {
        runSequence(
            'build-js',
            'minify-js',
            cb
        );
    });

    gulp.task('build-js', function() {
        return gulp.src([
            paths.src + 'mock-data.js',
            paths.src + 'module/*.js',
            paths.src + 'classes/*.js',
            paths.src + 'namespaces/*.js',
        ])
            .pipe(plumber())
            .pipe(concat(bower.name + '.js'))
            .pipe(wrap({src: paths.wrap }))
            .pipe(ngAnnotate())
            .pipe(prettify())
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(gulp.dest('.'));
    });

    gulp.task('minify-js', function() {
        return gulp.src(bower.main)
            .pipe(streamify(uglify()))
            .pipe(rename(bower.name + '.min.js'))
            .pipe(gulp.dest('.'));
    });


    /**
     Watch
     */
    gulp.task('watch', function() {
        return gulp.watch(paths.src + '**/**', ['build']);
    });


    /**
     Default
     */
    gulp.task('default', function(cb) {
        runSequence(
            'build',
            'watch',
            cb
        )
    });

}());
