var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream()));

// Move the javascript files into our /src/js folder
gulp.task('js', () => gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream()));

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass'), () => {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(gulp.series('node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'), gulp.series('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('js', 'serve'));
