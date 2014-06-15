/**
 * @param {App.View} container
 * @param {Object}   [options]
 */
tas.App.FeaturesSelect = function(container, options) {
    tas.View.call(this);

    /**
     * @type {tas.App.FeaturesSelect.type}
     */
    this.mode = tas.App.FeaturesSelect.type.NONE;
    this.createMode(options || {});

    this.onClick = this.onClick.bind(this);

    this.render(container.getElement());
    this.setParent(container);
};
tas.utils.inherits(tas.App.FeaturesSelect, tas.View);

/**
 * @static
 * @type {String}
 */
tas.App.FeaturesSelect.TEMPLATE_NAME = 'app.featuresselect';

/**
 * @static
 * @type {String}
 */
tas.App.FeaturesSelect.ACTIVE_CLASS = 'active';

/**
 * @static
 * @enum {Number}
 */
tas.App.FeaturesSelect.type = {
    NONE: 0,
    EVENTS: 2,
    PLACES: 4,
    PEOPLE: 8
};

/**
 * @inheritDoc
 */
tas.App.FeaturesSelect.prototype.createDom = function() {
    this.element = tas.View.renderFromTemplate(tas.App.FeaturesSelect.TEMPLATE_NAME, {

    }).firstChild;
};

/**
 * Set initial select and handles
 */
tas.App.FeaturesSelect.prototype.onRendered = function() {
    var container = this.getElement();
    $(container).on('click', '.btn', this.onClick);

    tas.View.prototype.onRendered.call(this);
};

/**
 * @param  {Event} evt
 */
tas.App.FeaturesSelect.prototype.onClick = function(evt) {
    var target = $(evt.currentTarget),
        mode = target.data('mode').toUpperCase();

    if (target.hasClass(tas.App.FeaturesSelect.ACTIVE_CLASS)) {
        target.removeClass(tas.App.FeaturesSelect.ACTIVE_CLASS);
        this.mode &= ~tas.App.FeaturesSelect.type[mode];
    } else {
        target.addClass(tas.App.FeaturesSelect.ACTIVE_CLASS);
        this.mode |= tas.App.FeaturesSelect.type[mode];
    }
};

/**
 * @param {tas.App.FeaturesSelect.type} mode
 */
tas.App.FeaturesSelect.prototype.setMode = function(mode) {
    this.mode |= mode;
};

/**
 * @param  {tas.App.FeaturesSelect.type} mode
 */
tas.App.FeaturesSelect.prototype.unsetMode = function(mode) {
    this.mode &= ~mode;
};

/**
 * @param  {Object}  options
 * @param  {Boolean} options.events
 * @param  {Boolean} options.places
 * @param  {Boolean} options.people
 * @return {tas.App.FeaturesSelect.type} mode
 */
tas.App.FeaturesSelect.prototype.createMode = function(options) {
    var types = tas.App.FeaturesSelect.type;
    this[options.events ? 'setMode' : 'unsetMode'](types.EVENTS);
    this[options.places ? 'setMode' : 'unsetMode'](types.PLACES);
    this[options.people ? 'setMode' : 'unsetMode'](types.PEOPLE);
    return this.mode;
};

/**
 * @return {Object}
 */
tas.App.FeaturesSelect.prototype.getMode = function() {
    var mode = this.mode,
        types = tas.App.FeaturesSelect.type;
    return {
        places: !!(mode & types.PLACES),
        people: !!(mode & types.PEOPLE),
        events: !!(mode & types.EVENTS)
    };
};

/**
 * @inheritDoc
 */
tas.App.FeaturesSelect.prototype.destroy = function() {
    tas.View.prototype.destroy.call(this);
    this.app = null;
}
