/**
 * @fileOverview Main application class
 * @author w8r
 */

/**
 * Application
 * @extends {tas.EventTarget}
 * @constructor
 */
tas.App = function() {

    this.render();

    /**
     * @type {tad.App.Map}
     */
    this.map = new tas.App.Map(this);

    /**
     * @type {tas.App.View}
     */
    this.appView = new tas.App.View(this);

    /**
     * @type {tas.App.Stories}
     */
    this.storyView = new tas.App.Stories(this);

    /**
     * @type {tas.View}
     */
    this.currentView = null;

    /**
     * @type {tas.App.Router}
     */
    this.router = new tas.App.Router(this);
};
tas.utils.inherits(tas.App, tas.View);

/**
 * @static
 * @enum {String}
 */
tas.App.views = {
    MAP: 'map',
    STORIES: 'stories'
};

/**
 * @inheritDoc
 */
tas.App.prototype.createDom = function() {
    this.element = document.createElement('div');
    this.element.className = 'container-fluid app';
};

/**
 * @param {tas.App.views} viewType
 */
tas.App.prototype.setView = function(viewType) {
    var view;
    switch (viewType) {
        case tas.App.views.MAP:
            view = this.appView;
            break;

        case tas.App.views.STORIES:
            view = this.storyView;
            break;
        default:
            break;
    }

    if (view && view !== this.currentView) {
        if (this.currentView) {
            $(this.currentView.getElement())
                .removeClass('app-view-active')
                .addClass('app-view-hidden');
        }

        this.currentView = view;
        $(this.currentView.getElement())
            .removeClass('app-view-hidden')
            .addClass('app-view-active');
    }
};

/**
 * Map page
 */
tas.App.prototype.showMap = function() {
    console.log('map', this);
    this.setView(tas.App.views.MAP);
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
    this.setView(tas.App.views.STORIES);
};
