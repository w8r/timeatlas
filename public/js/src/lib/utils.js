/**
 * @fileOverview Utils
 * @author <a href="mailto:info@w8r.name">w8r</a>
 */

/**
 * @name utils
 * @type {Object}
 */
tas.utils = {

    /**
     * Inheritance
     *
     * @param  {Function} Child
     * @param  {Function} Base
     */
    inherits: function(Child, Base) {
        var tempConstructor = function() {};
        tempConstructor.prototype = Base.prototype;
        Child.prototype = new tempConstructor();

        Child.superProto = Base.prototype;
        // Fuck you, IE8-9
        Child._super = Base;

        Child.prototype.constructor = Child;
    },

    extend: _.extend,

    clone: _.clone,

    merge: _.merge,

    /**
     * HTML to Node
     * @param  {String} html
     * @return {DocumentFragment}
     */
    htmlToDocumentFragment: function(html) {
        var div = document.createElement('div');
        div.innerHTML = html;

        if (div.childNodes.length == 1) {
            return div.removeChild(div.firstChild);
        } else {
            var fragment = document.createDocumentFragment();
            while (div.firstChild) {
                fragment.appendChild(div.firstChild);
            }
            return fragment;
        }
    }

};
