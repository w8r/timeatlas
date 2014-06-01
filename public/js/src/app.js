(function() {
    var scripts = '';
    for (var i = 0, len = arguments.length; i < len; i++) {
        scripts += '<script type="text/javascript" src="' + arguments[i] + '"></script>';
    }
    document.write(scripts);
})(
    // vendor
    '/js/vendor/qwery.js',
    '/js/vendor/bean.js',
    '/js/vendor/bonzo.js',
    '/js/vendor/reqwest.js',
    '/js/vendor/morpheus.js',
    '/js/vendor/lodash.js',
    '/js/vendor/page.js'

    // bridge

    // lib 

    // application 
);
