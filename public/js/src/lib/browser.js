/**
 * @fileOverview Browser features and detection.
 * @author w8r
 */

/**
 * @static
 * @type {Object}
 */
tas.browser = {
    /**
     * @type {Boolean}
     */
    isTouch: !!((document.createTouch !== undefined) ||
        ('ontouchstart' in window) ||
        ('onmsgesturechange' in window) || navigator.msMaxTouchPoints)
};
