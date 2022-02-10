// Обработка SCSS
const scss = () => {
    return $.gulp.src($.path.scss.src, {sourcemaps: $.app.isDev})
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError(error => ({
                title: "SCSS",
                message: error.message
            }))
        }))
        .pipe($.plugins.sass(require('sass'))())
        .pipe($.plugins.autoprefixer({
            overrideBrowserslist: [
                'last 10 versions',
                '> 5%'
            ]
        }))
        .pipe($.plugins.shorthand())
        .pipe($.plugins.groupCssMediaQueries())
        .pipe($.gulp.dest($.path.scss.dest, {sourcemaps: $.app.isDev}))
        .pipe($.plugins.csso())
        .pipe($.plugins.rename({suffix: '.min'}))
        .pipe($.gulp.dest($.path.scss.dest, {sourcemaps: $.app.isDev}))
        .pipe($.browserSync.stream())
}

module.exports = scss;