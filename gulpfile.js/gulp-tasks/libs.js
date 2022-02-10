// Обработка Библиотек
const libs = () => {
    return $.gulp.src($.path.libs.src)
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError(error => ({
                title: "Libs",
                message: error.message
            }))
        }))
        .pipe($.gulp.dest($.path.libs.dest))
}

module.exports = libs;