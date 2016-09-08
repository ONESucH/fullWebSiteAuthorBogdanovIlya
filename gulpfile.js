'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    less = require('gulp-less'),
    postCss = require('gulp-postcss'),
    sourceMaps = require('gulp-sourcemaps'),
    imageMin = require('gulp-imagemin'),
    autoPrefix = require('autoprefixer');

gulp.task('connect', function () {
    browserSync.init({
        server: 'app/'
    });
    gulp.watch([
        'app/css/*.less',
        'app/css/*.css',
        'app/scripts/*.js',
        'app/*.html'
    ], ['build']);
});

gulp.task('build', function () {
    gulp.src('app/css/main.less')
        .pipe(less())
        .pipe(cleanCSS({debug: true}, function (details) {
            console.log('color= red + >>> ' + details.name + ': ' + details.stats.originalSize);
            console.log('color= red + >>> ' + details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(sourceMaps.init())
        .pipe(postCss([autoPrefix({browsers: ['last 10 versions']})]))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('app/css/min.css/'));
    gulp.src('app/dist/*.png')
        .pipe(imageMin())
        .pipe(gulp.dest('app/dist/'));
    browserSync.reload();
});

gulp.task('default', ['connect', 'build']);