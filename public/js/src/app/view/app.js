/**
 * @fileOverview Main app view
 * @author w8r
 */

/**
 * App view
 *
 * @constructor
 * @param {tas.App} app
 * @extends {tas.View}
 */
tas.App.View = function(app) {
    tas.View.call(this);
    this.setModel(app);

    /**
     * @type {App.Timeline}
     */
    this.timeline = null;

    /**
     * @type {tas.App.FeaturesSelect}
     */
    this.featuresSelect = null;

    /**
     * @type {App.Footer}
     */
    this.footer = null;

    this.render(app.getElement());
};
tas.utils.inherits(tas.App.View, tas.View);

/**
 * @static
 * @type {String}
 */
tas.App.View.CONTAINER_CLASS = 'app-view main-view app-view-hidden';

/**
 * @inheritDoc
 */
tas.App.View.prototype.createDom = function() {
    this.element = document.createElement('div');
    this.element.className = tas.App.View.CONTAINER_CLASS;
};

/**
 * Rendered
 */
tas.App.View.prototype.onRendered = function() {
    tas.View.prototype.onRendered.call(this);

    this.timeline = new tas.App.Timeline(this);
    this.featuresSelect = new tas.App.FeaturesSelect(this);
    this.footer = new tas.App.Footer(this);

    this.onFeaturesTypeSelected = this.onFeaturesTypeSelected.bind(this);
    this.featuresSelect.on(tas.App.FeaturesSelect.events.MODE_CHANGED, this.onFeaturesTypeSelected);

    this.onPeriodChanged = this.onPeriodChanged.bind(this);
    this.timeline.on(tas.App.Timeline.events.PERIOD_CHANGED, this.onPeriodChanged);
};

/**
 * Features filter has been changed
 * @param  {Object} state
 */
tas.App.View.prototype.onFeaturesTypeSelected = function(state) {};

/**
 * Timeline period has changed
 * @param  {Object} period
 */
tas.App.View.prototype.onPeriodChanged = function(period) {};

/**
 * Remove handlers
 */
tas.App.View.prototype.onBeforeDestroy = function() {
    tas.View.prototype.onBeforeDestroy.call(this);
    this.featuresSelect.off(tas.App.FeaturesSelect.events.MODE_CHANGED, this.onFeaturesTypeSelected);
};
