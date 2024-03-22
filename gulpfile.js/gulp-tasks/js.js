// Обработка JavaScript
const js = () => {
    return $.gulp.src($.path.js.src)
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError(error => ({
                title: "JavaScript",
                message: error.message
            }))
        }))
        .pipe($.plugins.babel({
            presets: ['@babel/env']
        }))
        .pipe($.gulp.dest($.path.js.dest))
        // .pipe($.plugins.uglify())
        // .pipe($.plugins.rename({suffix: '.min'}))
        .pipe($.gulp.dest($.path.js.dest))
        .pipe($.browserSync.stream())
}

module.exports = js;
