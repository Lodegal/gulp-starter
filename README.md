# Gulp Starter

> Gulp Starter for web development.

## Features 

Here is a list of the current features:

- Split HTML source into multiple files
- Copy HTML files from `src` to `dist` directory
- Auto prefix and minify CSS and put it inside `dist` directory
- Compile CSS preprocessor code (Sass/SCSS) to CSS
- Compile ES6+ to ES5 JS files and minify code
- Compress and copy images into `dist` directory
- Using different FONT formats (WOFF, WOFF2, EOT ,TTF, SVG) for maximum browser support
- Spin up local dev server at `http://localhost:3000` including auto-reloading

## Requirements
This should be installed on your computer in order to get up and running:

- [Node.js](https://nodejs.org/en/)
- [Gulp 4](https://gulpjs.com/)

## Dependencies
These [npm](https://www.npmjs.com/) packages are used in the Gulp Starter:

- [gulp-babel](https://www.npmjs.com/package/gulp-babel)
- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [browser-sync](https://www.npmjs.com/package/browser-sync)
- [del](https://www.npmjs.com/package/del)
- [gulp](https://www.npmjs.com/package/gulp)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [gulp-csso](https://www.npmjs.com/package/gulp-csso)
- [gulp-file-include](https://www.npmjs.com/package/gulp-file-include)
- [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries)
- [gulp-notify](https://www.npmjs.com/package/gulp-notify)
- [gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [gulp-shorthand](https://www.npmjs.com/package/gulp-shorthand)
- [gulp-fonter](https://www.npmjs.com/package/gulp-fonter)
- [gulp-if](https://www.npmjs.com/package/gulp-if)
- [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)
- [gulp-newer](https://www.npmjs.com/package/gulp-newer)
- [gulp-ttf2woff2](https://www.npmjs.com/package/gulp-ttf2woff2)
- [require-dir](https://www.npmjs.com/package/require-dir)

For more information, take a look at the [package.json](package.json).

### What types of images are supported?
The following types of images are currently supported:

- PNG
- JPG / JPEG
- GIF
- SVG
- WEBP
- ICO (not compressed)

Polyfill object-fit/object-position on <img>: IE9, IE10, IE11, Edge, Safari (https://github.com/fregante/object-fit-images)

### How can I specify for which browsers CSS code should be autoprefixed?
The recommended way of specifying which browsers should be targeted by the CSS autoprefixer is to add a `overrideBrowserslist` key to `package.json`:

```json
{
  "overrideBrowserslist" : [
                  "last 10 versions",
                  "> 5%"
              ]
}
```
## Getting Started

1. `npm i`: Need to install node packages.
2. `gulp`: This is the normal development script used to build all files and run all tasks, but also to serve a development server and watch for changes.
3. `gulp --prod`: This is used to build all files and run all tasks without serving a development server and watching for changes.

