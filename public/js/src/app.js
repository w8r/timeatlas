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

    // bridge

    // lib
    '/js/src/lib/utils.js',
    '/js/src/lib/eventtarget.js'

    // application 
);
