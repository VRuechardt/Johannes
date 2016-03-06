
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
    gulp.run('styles');
    gulp.run('scripts');
    gulp.run('html');
});

gulp.task('styles', function() {
    gulp.src("./app/scss/app.scss")
        .pipe(sass())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest("./app/dest/"))
        .pipe(livereload());
});

gulp.task('scripts', function() {

    return browserify({
        entries: ['./app/app.js'],
        paths: ['./app/bower_components']
    }).bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./app/dest'))
        .pipe(livereload());

});

gulp.task('html', function() {

    gulp.src('./app/index-dev.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./app'))
        .pipe(livereload());

    gulp.src('./app/views/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./app/dest'))
        .pipe(livereload());

    gulp.src('./app/directives/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./app/dest'))
        .pipe(livereload());


});

gulp.task('watch', function() {
    gulp.run('default');
    livereload.listen();
    var scssWatcher = gulp.watch('./app/scss/**/*.scss', ['styles']);
    var jsWatcher = gulp.watch(['./app/app.js', './app/views/**/*.js', './app/services/**/*.js', './app/shared/**/*.js', './app/directives/**/*.js'], ['scripts']);
    var htmlWatcher = gulp.watch(['./app/*.html', './app/views/**/*.html', './app/directives/**/*.html'], ['html']);
});

