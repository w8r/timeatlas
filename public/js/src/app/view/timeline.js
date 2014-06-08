/**
 * @constructor
 * @extends {View}
 *
 * @param {App.View} container
 */
App.Timeline = function(container) {
    View.call(this);

    this.render(container.getElement());
    this.setParent(container);
};
utils.inherits(App.Timeline, View);

/**
 * @static
 * @type {String}
 */
App.Timeline.TEMPLATE_NAME = 'app.timeline';

/**
 * @inheritDoc
 */
App.Timeline.prototype.createDom = function() {
    this.element = View.renderFromTemplate(App.Timeline.TEMPLATE_NAME, {
        title: 'timeline',
        dates: [{
            date: Date.now()
        }]
    });
};
