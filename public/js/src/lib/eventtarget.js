/**
 * @fileOverview Events mixin
 * @author <a href="mailto:info@w8r.name">w8r</a>
 */

/**
 * Events mixin
 * @class EventTarget
 */
var EventTarget = function() {};

/**
 * Removes 'on' part
 *
 * @param  {String} type
 * @static
 * @return {String}
 */
EventTarget.cleanEventType = function(type) {
    return type.replace(/^on([A-Z])/, function(full, first) {
        return first.toLowerCase();
    });
};

/**
 * Convenience & consistency
 */
EventTarget.prototype.constructor = EventTarget;

/**
 * @type {Object}
 */
EventTarget.prototype._events = null;

/**
 * Adds event handlers directly from constructor options. Pairs with 'onX' in key
 * and function in value considered events
 *
 * @param {Object} options
 */
EventTarget.prototype.addEventsFromOptions = function(options) {
    for (var option in options) {
        if ((/^on[A-Z]/).test(option) || typeof options[option] === 'function') {
            this.addEvent(option, options[option]);
            delete options[option];
        }
    }
};

/**
 * Adds event handler
 *
 * @param  {String} type
 * @param  {Function} handler
 * @return {EventTarget} self
 */
EventTarget.prototype.on = function(type, handler) {
    type = EventTarget.cleanEventType(type);
    this._events = this._events || {};
    var handlers = this._events[type] = this._events[type] || [];
    if (handler && handlers.indexOf(handler) === -1) {
        handlers.push(handler);
    }
    return this;
};

/**
 * Adds event that fires only once
 *
 * @param  {String} type
 * @param  {Function} handler
 * @return {EventTarget} self
 */
EventTarget.prototype.once = function(type, handler) {
    var self = this,
        wrapped = function() {
            handler.apply(self, Array.prototype.slice.call(arguments, 0));
            self.removeEvent(type, arguments.callee);
        };
    this.addEvent(type, wrapped);
    return this;
};

/**
 * Removes event handler
 *
 * @param  {String} type
 * @param  {Function} handler
 * @return {EventTarget} self
 */
EventTarget.prototype.off = function(type, handler) {
    var pos;
    type = EventTarget.cleanEventType(type);
    this._events = this._events || {};
    if (!this._events[type]) return this;
    pos = this._events[type].indexOf(handler);
    if (pos !== -1) {
        this._events[type].splice(pos, 1);

        if (this._events[type].length === 0) {
            this._events[type] = null;
        }

    }
    return this;
};

/**
 * Adds multiple events
 *
 * @param  {Object} events
 * @return {EventTarget} self
 */
EventTarget.prototype.addEvents = function(events) {
    for (var type in events) {
        this.on(type, events[type]);
    }
    return this;
};

/**
 * Removes multiple events or all events of provided type
 *
 * @param  {Object|String} events
 * @return {EventTarget} self
 */
EventTarget.prototype.removeEvents = function(events) {
    // remove all events
    if (typeof events === 'string') {
        for (var handlers = this._events[events] || [], i = 0, len = handlers.length; i < len; i++) {
            this.off(events, handlers[i]);
        }
        delete this._events[events];
    } else {

        if (!events) {
            events = this._events;
        }

        for (var type in events) {
            this.off(type, events[type]);
        }
    }
    return this;
};

/**
 * Fires event
 *
 * @param  {String} type
 * @param  {Mixed}  args
 * @return {EventTarget} self
 */
EventTarget.prototype.trigger = function(type, args) {
    this._events = this._events || {};
    if (!this._events[type]) return this;

    if (args != null) {
        // we could've used isArray, but let's pass collections too
        if (typeof args === 'string' ||
            typeof args.length !== 'number' ||
            Object.prototype.toString.call(args) == '[object Function]') {
            args = [args];
        }
    } else {
        args = [];
    }

    for (var handlers = this._events[type], i = 0, len = handlers.length; i < len; i++) {
        var handler = handlers[i];
        if (typeof handler === 'function') {
            handler.apply(this, args);
        }
    }
    return this;
};
