/**
 * @fileOverview Utils
 * @author <a href="mailto:info@w8r.name">w8r</a>
 */

/**
 * @name utils
 * @type {Object}
 */
var utils = {

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
    }

};
