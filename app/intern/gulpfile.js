
var gulp = require('gulp');
var sass = require('gulp-sass');

var browserify = require('browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
    gulp.run('scripts');
    gulp.run('html');
});

gulp.task('scripts', function() {

    return browserify({
        entries: ['./app.js'],
        paths: ['./app/bower_components']
    }).bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
        .pipe(livereload());

});

gulp.task('html', function() {

    gulp.src('./index-dev.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'))
        .pipe(livereload());

    gulp.src('./views/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dest'))
        .pipe(livereload());

});

gulp.task('watch', function() {
    gulp.run('default');
    livereload.listen();
    var jsWatcher = gulp.watch(['./app.js', './views/**/*.js', './services/**/*.js', './shared/**/*.js', './directives/**/*.js'], ['scripts']);
    var htmlWatcher = gulp.watch(['./*.html', './views/**/*.html', './directives/**/*.html'], ['html']);
});

