/**
 * @constructor
 * @param {App} app
 */
tas.App.Router = function(app) {
    tas.Router.call(this, app);
};
tas.utils.inherits(tas.App.Router, tas.Router);

/**
 * @static
 * @type {Object}
 */
tas.App.Router.routes = tas.utils.extend({}, tas.Router.routes, {
    MAP: '/',
    STORY: '/story/:id',
    ALL: '*'
});

/**
 * @static
 * @type {Object}
 */
tas.App.Router.config = tas.utils.clone(tas.Router.config);

/**
 * Init routes
 */
tas.Router.prototype.initRoutes = function() {
    // register paths
    page(tas.App.Router.routes.MAP, this.app.showMap);
    page(tas.App.Router.routes.STORY, this.app.showStory);
    page(tas.App.Router.routes.ALL, this.app.notFound);

    // init
    page(tas.App.Router.config);
};
