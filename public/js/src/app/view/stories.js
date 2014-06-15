/**
 * Stories view(screen)
 * @param {tas.App} app
 *
 * @constructor
 * @extends {tas.View}
 */
tas.App.Stories = function(app) {
    tas.View.call(this);

    this.setModel(app);
    this.render(app.getElement());
};
tas.utils.inherits(tas.App.Stories, tas.View);

/**
 * @static
 * @type {String}
 */
tas.App.Stories.TEMPLATE_NAME = 'app.stories';

/**
 * @inheritDoc
 */
tas.App.Stories.prototype.createDom = function() {
    this.element = tas.View.renderFromTemplate(tas.App.Stories.TEMPLATE_NAME, {}).firstChild;
};
