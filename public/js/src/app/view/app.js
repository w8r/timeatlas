/**
 * Appp view
 * @constructor
 * @param {App} app
 */
App.View = function(app) {
    View.call(this);
    this.setModel(app);
    this.render();
};
utils.inherits(App.View, View);

/**
 * @inheritDoc
 */
App.View.prototype.createDom = function() {
    this.element = document.createElement('div');
    this.element.className = 'container-fluid app';
};
