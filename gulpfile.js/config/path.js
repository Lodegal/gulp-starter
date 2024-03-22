const pathSrc = './src';
const pathDest = './public';

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + '/*.html',
        watch: pathSrc + '/**/*.html',
        dest: pathDest
    },
    scss: {
        src: pathSrc + '/scss/main.scss',
        watch: pathSrc + '/scss/**/*.scss',
        dest: pathDest + '/css'
    },
    js: {
        src: pathSrc + '/js/**/*.js',
        watch: pathSrc + '/js/main.js',
        dest: pathDest + '/js'
    },
    img: {
        src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,webp,ico}',
        watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,webp,ico}',
        dest: pathDest + '/img'
    },
    fonts: {
        src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/fonts'
    },
    libs: {
        src: pathSrc + '/libs/**/*',
        watch: pathSrc + '/libs/**/*',
        dest: pathDest + '/libs'
    },
}
