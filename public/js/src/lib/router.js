/**
 * @fileOverview Wrapper around http://github.com/visionmedia/page.js
 * @author w8r
 */

/**
 * Just a wrapper and a connection to the app class.
 * No routes here
 *
 * @constructor
 * @param {App} app
 */
tas.Router = function(app) {
    this.app = app;
    this.initRoutes();
};

/**
 * @static
 * @type {Object}
 */
tas.Router.routes = {
    ALL: '*'
};

/**
 * @static
 * @type {Object}
 */
tas.Router.config = {
    click: true,
    popstate: true,
    dispatch: true
};

/**
 * Init routes
 */
tas.Router.prototype.initRoutes = function() {
    // init
    page(tas.Router.config);
};
