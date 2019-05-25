var Encore = require('@symfony/webpack-encore');
// command for update : yarn encore dev
// or:  yarn encore dev --watch   for auto update
Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/my-project/public/build')
    // .setPublicPath('https://code.jquery.com/jquery-3.4.1.js')
    // only needed for CDN's or sub-directory deploy
    // .setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    // .addEntry('layout', './assets/js/layout.js')
    .addStyleEntry('masterCss', './assets/css/master.css')
    .addStyleEntry('normalizeCss', './assets/css/normalize.css')
    .addStyleEntry('tapisCss', './assets/css/Tapis/tapis.css')
    .addStyleEntry('barCss', './assets/css/home/bar.css')
    .addStyleEntry('pieceCss', './assets/css/piece/piece.css')
    .addStyleEntry('canvasCss', './assets/css/canvas/canvas.css')
    .addStyleEntry('bddCss', './assets/css/bdd/BDD.css')

    .addEntry('navJs', './assets/js/nav.js')
    .addEntry('barJs', './assets/js/home/bar.js')
    .addEntry('canvasJs', './assets/js/canvas/canvasMain.js')
    .addEntry('tapisJs', './assets/js/tapis/tapisMain.js')
    .autoProvidejQuery()
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps()
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')
;

module.exports = Encore.getWebpackConfig();
