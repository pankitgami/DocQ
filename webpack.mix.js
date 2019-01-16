// Pull in Laravel Mix
var mix = require('laravel-mix')



mix.setPublicPath(path.normalize('public/build'))
    .react('src/index.js', 'js')
    .sass('scss/style.scss', 'css')
    .setResourceRoot('/build/')
    .extract(['react'], 'js/vendor');


mix.browserSync({
    proxy: 'http://docq.test',
    files: [
        'public/build/js/index.js',
        'public/build/css/style.css',
    ],
    reloadOnRestart: false,
    startPath: '/',
    notify: false,
    logPrefix: 'DocQ',
    logLevel: 'debug',
    port: 4321,
    ui: {
        port: 8080,
    },
});

