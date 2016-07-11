// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
// var imagemin = require('gulp-imagemin');
 // Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/public/scripts/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('buildgulp/js'));
});

gulp.task('sass', function() {
    return sass('src/public/styles/*.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/public/styles/css'));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('buildgulp/images'));
});

gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('src/public/scripts/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('src/public/styles/*.scss', ['sass']);
   // Watch image files
  gulp.watch('src/images/**/*', ['images']);
 });


 // Default Task
gulp.task('default', ['scripts', 'sass', 'watch']);