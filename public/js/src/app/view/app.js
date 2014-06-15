/**
 * Appp view
 *
 * @constructor
 * @param {App} app
 */
tas.App.View = function(app) {
    tas.View.call(this);
    this.setModel(app);

    this.render(app.getElement());

    /**
     * @type {App.Timeline}
     */
    this.timeline = new tas.App.Timeline(this);

    /**
     * @type {tas.App.FeaturesSelect}
     */
    this.featuresSelect = new tas.App.FeaturesSelect(this);

    /**
     * @type {App.Footer}
     */
    this.footer = new tas.App.Footer(this);
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
