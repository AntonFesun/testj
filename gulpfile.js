var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    uncss = require('gulp-uncss'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task ('default', function() {
    return gulp.src('style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('out/'));
});

gulp.task('image', () =>
gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);