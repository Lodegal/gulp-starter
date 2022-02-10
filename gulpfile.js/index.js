global.$ = {
    // Пакеты
    gulp: require("gulp"),
    plugins: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),

    // Конфигурация
    path: require("./config/path.js"),
    app: require("./config/app.js")
}

// Задачи
const requireDir = require('require-dir');
const tasks = requireDir('./gulp-tasks', {recurse: true})

// Наблюдение
const watcher = () => {
    $.gulp.watch($.path.html.watch, tasks.html)
    $.gulp.watch($.path.scss.watch, tasks.scss)
    $.gulp.watch($.path.js.watch, tasks.js)

    $.gulp.watch($.path.img.watch, tasks.img).on("change", $.browserSync.reload);
    $.gulp.watch($.path.fonts.watch, tasks.fonts).on("change", $.browserSync.reload);
    $.gulp.watch($.path.libs.watch, tasks.libs).on("change", $.browserSync.reload);
}

// Сборка
const build = $.gulp.series(
    tasks.clear,
    $.gulp.parallel(tasks.html, tasks.scss, tasks.js, tasks.img, tasks.fonts, tasks.libs)
)

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, tasks.server)
)


exports.default = $.app.isProd
    ? build
    : dev


