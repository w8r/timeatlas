var View = function() {};

/**
 * @enum{String}
 */
View.eventType = {};

/**
 * @static
 * @param  {String} templateName
 * @param  {*}      data
 * @return {DocumentFragment}
 */
View.renderFromTemplate = function(templateName, data) {
    return utils.htmlToDocumentFragment(Templates[templateName](data));
};

/**
 * @type {Element}
 */
View.prototype.element = null;

/**
 * @type {*}
 */
View.prototype.model = null;

/**
 * @type {View}
 */
View.prototype.parent = null;

/**
 * @param  {Element} container
 */
View.prototype.render = function(container) {
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
View.prototype.getElement = function() {
    return this.element;
};

/**
 * @param {*} model
 */
View.prototype.setModel = function(model) {
    this.model = model;
};

/**
 * @return {*}
 */
View.prototype.getModel = function() {
    return this.model;
};

/**
 * @return {View}
 */
View.prototype.getParent = function() {
    return this.parent;
};

/**
 * @param {View} parent
 */
View.prototype.setParent = function(parent) {
    this.parent = parent;
};

/**
 * Create dom elements, from template for example
 */
View.prototype.createDom = function() {};

/**
 * Element rendered, enhance
 */
View.prototype.onRendered = function() {};

/**
 * Destroys dom element
 */
View.prototype.destroyDom = function() {
    if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
    }
};

/**
 * @param {View} child
 */
View.prototype.appendChild = function(child) {
    child.setParent(this);
    child.render(this.element);
    child.parent = this;
};

/**
 * Destructor
 */
View.prototype.destroy = function() {
    this.element = null;
    this.model = null;
};
