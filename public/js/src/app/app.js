var App = function() {

    /**
     * @type {App.View}
     */
    this.view = new App.View();

    /**
     * @type {Router}
     */
    this.router = new Router(this);

    /**
     * @type {Map}
     */
    this.map = new Map();
};
utils.inherits(App, EventTarget);

/**
 * Map page
 */
App.prototype.showMap = function() {
    console.log('map');
};

/**
 * 404
 */
App.prototype.notFound = function() {};

/**
 * Story
 */
App.prototype.showStory = function(context) {
    console.log('story');
};
