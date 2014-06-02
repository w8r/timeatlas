/**
 * @constructor
 * @param {App} app
 */
var Router = function(app) {
    this.app = app;
    this.initRoutes();
};

/**
 * @static
 * @type {Object}
 */
Router.routes = {
    MAP: '/',
    STORY: '/story/:id',
    ALL: '*'
};

/**
 * @static
 * @type {Object}
 */
Router.config = {
    click: true,
    popstate: true,
    dispatch: true
};

/**
 * Init routes
 */
Router.prototype.initRoutes = function() {
    // register paths
    page(Router.routes.MAP, this.app.showMap);
    page(Router.routes.STORY, this.app.showStory);
    page(Router.routes.ALL, this.app.notFound);

    // init
    page(Router.config);
};
