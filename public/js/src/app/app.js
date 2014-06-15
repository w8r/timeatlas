/**
 * Application
 * @extends {EventTarget}
 * @constructor
 */
tas.App = function() {

    /**
     * @type {App.View}
     */
    this.view = new tas.App.View(this);

    /**
     * @type {Router}
     */
    this.router = new tas.App.Router(this);

    /**
     * @type {Map}
     */
    this.map = new tas.App.Map(this.view);

    /**
     * @type {App.Timeline}
     */
    this.timeline = new tas.App.Timeline(this.view);

    /**
     * @type {tas.App.FeaturesSelect}
     */
    this.featuresSelect = new tas.App.FeaturesSelect(this.view);

    /**
     * @type {App.Footer}
     */
    this.footer = new tas.App.Footer(this.view);
};
tas.utils.inherits(tas.App, tas.EventTarget);

/**
 * Map page
 */
tas.App.prototype.showMap = function() {
    console.log('map');
};

/**
 * 404
 */
tas.App.prototype.notFound = function() {};

/**
 * Story
 */
tas.App.prototype.showStory = function(context) {
    console.log('story');
};
