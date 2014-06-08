/**
 * Application
 * @extends {EventTarget}
 * @constructor
 */
var App = function() {

    /**
     * @type {App.View}
     */
    this.view = new App.View(this);

    /**
     * @type {Router}
     */
    this.router = new Router(this);

    /**
     * @type {Map}
     */
    this.map = new App.Map(this.view);

    /**
     * @type {App.Timeline}
     */
    this.timeline = new App.Timeline(this.view);

    /**
     * @type {App.Footer}
     */
    this.footer = new App.Footer(this.view);
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
