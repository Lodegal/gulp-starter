// Обработка Images
const img = () => {
    return $.gulp.src($.path.img.src)
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError(error => ({
                title: "Images",
                message: error.message
            }))
        }))
        .pipe($.plugins.newer($.path.img.dest))
        .pipe($.plugins.if($.app.isProd, $.plugins.imagemin({verbose: true})))
        .pipe($.gulp.dest($.path.img.dest))
}

module.exports = img;