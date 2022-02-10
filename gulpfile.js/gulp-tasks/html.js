// Обработка HTML
const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe($.plugins.fileInclude())
        .pipe($.gulp.dest($.path.html.dest))
        .pipe($.browserSync.stream())
}

module.exports = html;