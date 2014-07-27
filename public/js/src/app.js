(function() {
    if (window) {
        var scripts = '';
        for (var i = 0, len = arguments.length; i < len; i++) {
            scripts += '<script type="text/javascript" src="' + arguments[i] + '"></script>';
        }
        document.write(scripts);
    } else {
        return Array.prototype.slice.call(arguments);
    }
})(
    // vendor
    //'/vendor/js/qwery.js',
    //'/vendor/js/bean.js',
    //'/vendor/js/bonzo.js',
    //'/vendor/js/reqwest.js',
    //'/vendor/js/morpheus.js',
    '/vendor/js/ender.js',
    '/vendor/js/lodash.js',
    '/vendor/js/page.js',
    '/vendor/js/handlebars.runtime.js',

    // bridge

    // namespace
    '/js/src/namespace.js',

    // lib
    '/js/src/lib/browser.js',
    '/js/src/lib/eventtypes.js',
    '/js/src/lib/utils.js',
    '/js/src/lib/string.js',
    '/js/src/lib/templates.js',
    '/js/src/lib/types.js',
    '/js/src/lib/types/date.js',
    '/js/src/lib/types/daterange.js',
    '/js/src/lib/router.js',
    '/js/src/lib/eventtarget.js',
    '/js/src/lib/view.js',
    '/js/src/lib/map.js',

    // templates
    '/js/templates/templates.js',

    // application

    '/js/src/app/app.js',
    '/js/src/app/router.js',
    '/js/src/app/view/app.js',
    '/js/src/app/view/map.js',
    '/js/src/app/view/timeline.js',
    '/js/src/app/view/featuresselect.js',
    '/js/src/app/view/footer.js',
    '/js/src/app/view/stories.js'
);
