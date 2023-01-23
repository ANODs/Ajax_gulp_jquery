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
const browsersync = require("browser-sync");

// Destination folder

const dist = './build';

// Clean assets

function clear() {
    return src(dist + '/*', {
            read: false
        })
        .pipe(clean());
}

// JS function 

function js() {
    const source = 'scripts/*.js';
    const destination  = dist + '/js';

    return src(source)
        .pipe(changed(source))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest(destination))
        .pipe(browsersync.stream());
}

// Pug function

function indexpug() {
    const index_source = 'pug/index.pug';
    const index_dest = dist;

    return src(index_source)
        .pipe(changed(index_source))
        .pipe(pugtohtml())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(dest(index_dest))
        .pipe(browsersync.stream());
}

function pug() {
    const source = 'pug/pages/*.pug';
    const destination  = dist + '/html';

    return src(source)
        .pipe(changed(source))
        .pipe(pugtohtml())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(dest(destination))
        .pipe(browsersync.stream());
}

// CSS function 

function css() {
    const source = 'styles/*.sass';
    const destination  = dist + '/styles';

    return src(source)
        .pipe(changed(source))
        .pipe(concat('main.sass'))
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cssnano())
        .pipe(dest(destination))
        .pipe(browsersync.stream());
}

// Clone assets

function assets(){
    const source = 'assets/**/*';
    const destination  = dist + '/assets';

    return src(source)
        .pipe(changed(source))
        .pipe(dest(destination))
        .pipe(browsersync.stream());
}

function frameworks(){
    const source = 'frameworks/*';
    const destination  = dist + '/frameworks';

    return src(source)
        .pipe(changed(source))
        .pipe(dest(destination))
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
    watch('assets/**/*', assets);
    watch('frameworks/*', frameworks);
}

// BrowserSync

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        port: 3000
    });
}

exports.watch = parallel([watchFiles, browserSync]);
exports.default = series(clear, parallel(indexpug, pug, frameworks, css, js, assets));
    