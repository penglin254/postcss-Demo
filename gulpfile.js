var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var will_change = require('postcss-will-change');
var circle = require('postcss-circle');
var triangle = require('postcss-triangle');
var alias = require('postcss-alias');
var crip = require('postcss-crip');
var magician = require('postcss-font-magician');
var triangle = require('postcss-triangle');
var circle = require('postcss-circle');
var linkColors = require('postcss-all-link-colors');
var center = require('postcss-center');
var clearfix = require('postcss-clearfix');
var position = require('postcss-position');
var size = require('postcss-size');
var colorShort = require('postcss-color-short');

var less = require('gulp-less');

gulp.task('css', function () {
    var processors = [
        alias,
        crip,
        magician,
        triangle,
        circle,
        linkColors,
        center,
        clearfix,
        position,
        size,
        colorShort,
        will_change,
        autoprefixer,
        color_rgba_fallback,
        opacity,
        pseudoelements,
        vmin,
        pixrem
    ];
    return gulp.src('./src/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});