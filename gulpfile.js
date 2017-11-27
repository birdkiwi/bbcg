var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function() {
    return gulp.src('./less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function(err) {
            console.log(err);
        }))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/'))
        .pipe(postcss([
            cssnano({
                preset: 'default'
            })
        ]))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./build/'));
});

var jsFiles = [
        './node_modules/jquery/dist/jquery.js',
        './node_modules/inputmask/dist/jquery.inputmask.bundle.js',
        './node_modules/slick-carousel/slick/slick.js',
        './js/components/**/*.js',
        './js/scripts.js'
    ],
    jsDest = './build';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest(jsDest))
            .pipe(rename('scripts.min.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['less', 'scripts'], function() {
    gulp.watch('./less/**/*.less', ['less']);
    gulp.watch('./js/**/*.js', ['scripts']);
});