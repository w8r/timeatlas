/**
 * Appp view
 * @constructor
 * @param {App} app
 */
tas.App.View = function(app) {
    tas.View.call(this);
    this.setModel(app);
    this.render();
};
tas.utils.inherits(tas.App.View, tas.View);

/**
 * @inheritDoc
 */
tas.App.View.prototype.createDom = function() {
    this.element = document.createElement('div');
    this.element.className = 'container-fluid app';
};
