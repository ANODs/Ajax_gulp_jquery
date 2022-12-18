        
const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

// Load plugins

const pugtohtml = require('gulp-pug');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();

// Clean assets

function clear() {
    return src('./website/generated/*', {
            read: false
        })
        .pipe(clean());
}

// JS function 

function js() {
    const source = 'scripts/*.js';

    return src(source)
        .pipe(changed(source))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('./website/generated/js/'))
        .pipe(browsersync.stream());
}

// Pug function

function indexpug() {
    const index_source = 'pug/index.pug';
    const index_dest = './website/generated/';

    return src(index_source)
        .pipe(changed(index_source))
        .pipe(pugtohtml())
        .pipe(rename({
            extname: '.php'
        }))
        .pipe(dest(index_dest))
        .pipe(browsersync.stream());
}

function pug() {
    const source = 'pug/pages/*.pug';
    const destenation  = './website/generated/html';

    return src(source)
        .pipe(changed(source))
        .pipe(pugtohtml())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(dest(destenation))
        .pipe(browsersync.stream());
}

// CSS function 

function css() {
    const source = 'styles/main.sass';

    return src(source)
        .pipe(changed(source))
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cssnano())
        .pipe(dest('./website/generated/styles/'))
        .pipe(browsersync.stream());
}

// Watch files

function watchFiles() {
    watch('styles/*', css);
    watch('pug/index.pug', indexpug);
    watch('pug/includes/*.pug', pug);
    watch('pug/includes/*.pug', indexpug);
    watch('pug/pages/*.pug', pug);
    watch('scripts/*', js);
}

// BrowserSync

function browserSync() {
    browsersync.init({
        server: {
            baseDir: '../website/generated/index.php'
        },
        port: 3000
    });
}

exports.watch = parallel(browserSync, watchFiles);
exports.default = series(clear, parallel(indexpug, pug, css, js));
    