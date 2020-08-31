const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const pug = require('gulp-pug');

const sassTask = function () {
    return src('ProjectHKIII-Website/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('ProjectHKIII-Website/dist/css'))
};

const jsTask = function () {
    return src('ProjectHKIII-Website/src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('ProjectHKIII-Website/dist/js'))
};

const pugTask = function () {
    return src('ProjectHKIII-Website/src/view/**/*.pug')
    .pipe(pug(
        { pretty: true}
    ))

    .pipe(dest('ProjectHKIII-Website/dist/html'))
};

function watchTask() {
    watch(['ProjectHKIII-Website/src/js/**/*.js', 'ProjectHKIII-Website/src/sass/**/*.scss', 'ProjectHKIII-Website/src/view/**/*.pug'],
        parallel(sassTask, jsTask, pugTask))
};

exports.sassTask = sassTask;
exports.jsTask = jsTask;
exports.pugTask = pugTask;
exports.watchTask = watchTask;
exports.default = series(parallel(jsTask, sassTask, pugTask),watchTask);