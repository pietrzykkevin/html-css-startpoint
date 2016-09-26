var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            open: true,
            online: false
        }
    });
});

gulp.task('styles', function () {
    return gulp.src('style.css')
        .pipe(browserSync.stream());
});

// Default task to be run with `gulp`
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("style.css", ['styles']);
    gulp.watch("index.html", browserSync.reload);
});