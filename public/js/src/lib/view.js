/**
 * @fileOverview Basic view class
 * @author w8r
 */

/**
 * Basic vuew class
 * @constructor
 * @extends {tas.EventTarget}
 */
tas.View = function() {};
tas.utils.inherits(tas.View, tas.EventTarget);

/**
 * @enum{String}
 */
tas.View.eventType = {};

/**
 * @static
 * @param  {String} templateName
 * @param  {*}      data
 * @return {DocumentFragment}
 */
tas.View.renderFromTemplate = function(templateName, data) {
    return tas.utils.htmlToDocumentFragment(tas.Templates[templateName](data));
};

/**
 * @type {Element}
 */
tas.View.prototype.element = null;

/**
 * @type {*}
 */
tas.View.prototype.model = null;

/**
 * @type {View}
 */
tas.View.prototype.parent = null;

/**
 * @param  {Element} container
 */
tas.View.prototype.render = function(container) {
    if (!this.element) {
        this.createDom();
    }

    if (container) {
        container.appendChild(this.element);
    } else {
        document.body.appendChild(this.element);
    }
    this.onRendered();
};

/**
 * @return {Element}
 */
tas.View.prototype.getElement = function() {
    return this.element;
};

/**
 * @param {*} model
 */
tas.View.prototype.setModel = function(model) {
    this.model = model;
};

/**
 * @return {*}
 */
tas.View.prototype.getModel = function() {
    return this.model;
};

/**
 * @return {View}
 */
tas.View.prototype.getParent = function() {
    return this.parent;
};

/**
 * @param {View} parent
 */
tas.View.prototype.setParent = function(parent) {
    this.parent = parent;
};

/**
 * Create dom elements, from template for example
 */
tas.View.prototype.createDom = function() {};

/**
 * Element rendered, enhance
 */
tas.View.prototype.onRendered = function() {};

/**
 * Element will be destroyed, remove handlers
 */
tas.View.prototype.onBeforeDestroy = function() {};

/**
 * Destroys dom element
 */
tas.View.prototype.destroyDom = function() {
    if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
    }
};

/**
 * @param {View} child
 */
tas.View.prototype.appendChild = function(child) {
    child.setParent(this);
    child.render(this.element);
    child.parent = this;
};

/**
 * Destructor
 */
tas.View.prototype.destroy = function() {
    this.onBeforeDestroy();
    this.destroyDom();

    this.element = null;
    this.model = null;
};
