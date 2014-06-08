(function() {
    var scripts = '';
    for (var i = 0, len = arguments.length; i < len; i++) {
        scripts += '<script type="text/javascript" src="' + arguments[i] + '"></script>';
    }
    document.write(scripts);
})(
    // vendor
    '/vendor/js/qwery.js',
    '/vendor/js/bean.js',
    '/vendor/js/bonzo.js',
    '/vendor/js/reqwest.js',
    '/vendor/js/morpheus.js',
    '/vendor/js/lodash.js',
    '/vendor/js/page.js',
    '/vendor/js/handlebars.runtime.js',

    // bridge

    // lib
    '/js/src/lib/utils.js',
    '/js/src/lib/templates.js',
    '/js/src/lib/eventtarget.js',
    '/js/src/lib/view.js',
    '/js/src/lib/map.js',

    // templates
    '/js/templates/templates.js',

    // application
    '/js/src/app/router.js',
    '/js/src/app/app.js',
    '/js/src/app/view/app.js',
    '/js/src/app/view/map.js',
    '/js/src/app/view/timeline.js',
    '/js/src/app/view/footer.js'
);
