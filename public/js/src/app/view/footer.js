/**
 * @param {tas.App} app
 */
tas.App.Footer = function(app) {
    this.app = app;
    tas.View(this);
};
tas.utils.inherits(tas.App.Footer, tas.View);

/**
 * @inheritDoc
 */
tas.App.Footer.prototype.createDom = function() {};

/**
 * @inheritDoc
 */
tas.App.Footer.prototype.destroy = function() {
    tas.View.prototype.destroy.call(this);
    this.app = null;
};
