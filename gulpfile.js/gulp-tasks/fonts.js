// Обработка Шрифтов
const fonts = () => {
    return $.gulp.src($.path.fonts.src)
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError(error => ({
                title: "Fonts",
                message: error.message
            }))
        }))
        .pipe($.plugins.newer($.path.fonts.dest))
        .pipe($.plugins.fonter({
            formats: ['woff', 'ttf', 'eot', 'svg']
        }))
        .pipe($.gulp.dest($.path.fonts.dest))
        .pipe($.plugins.ttf2woff2())
        .pipe($.gulp.dest($.path.fonts.dest))
}

module.exports = fonts;