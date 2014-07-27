/**
 * @fileOverview Timeline interface
 * @author w8r
 */

/**
 * @constructor
 * @extends {tas.View}
 *
 * @param {tas.View} container
 */
tas.App.Timeline = function(container) {
    tas.View.call(this);

    /**
     * @type {tas.Date}
     */
    this.currentMin = new tas.Date(1914, 6, 1);

    /**
     * @type {tas.Date}
     */
    this.currentMax = new tas.Date(1914, 8, 1);

    /**
     * @type {tas.Date}
     */
    this.min = new tas.Date(0, 0, 0);

    /**
     * @type {tas.Date}
     */
    this.max = new tas.Date();

    this.render(container.getElement());
    this.setParent(container);

    this.update();
};
tas.utils.inherits(tas.App.Timeline, tas.View);

/**
 * @enum{Number}
 */
tas.App.Timeline.Step = {
    CENTURY: 1000 * 60 * 60 * 24 * 365 * 100,
    DECADE: 1000 * 60 * 60 * 24 * 365 * 10,
    YEAR: 1000 * 60 * 60 * 24 * 365,
    MONTH: 1000 * 60 * 60 * 24 * 30,
    WEEK: 1000 * 60 * 60 * 24 * 7,
    DAY: 1000 * 60 * 60 * 24,
    HOUR: 1000 * 60 * 60
};

/**
 * @static
 * @type {String}
 */
tas.App.Timeline.TEMPLATE_NAME = 'app.timeline';

/**
 * @enum {String}
 * @static
 * @type {Object}
 */
tas.App.Timeline.events = {
    PERIOD_CHANGED: 'period_changed'
};

/**
 * @inheritDoc
 */
tas.App.Timeline.prototype.createDom = function() {
    this.element = tas.View.renderFromTemplate(tas.App.Timeline.TEMPLATE_NAME, {
        title: 'timeline',
        dates: [{
            date: Date.now()
        }],
        startDate: this.currentMin.toIsoString(true),
        endDate: this.currentMax.toIsoString(true)
    }).firstChild;
};

/**
 * Decides on timeline step
 */
tas.App.Timeline.prototype.setStep = function() {
    var diff = this.currentMax.getTime() - this.currentMin.getTime(),
        step = tas.App.Timeline.Step.CENTURY,
        s = 'CENTURY';

    if (diff <= tas.App.Timeline.Step.HOUR) {
        step = tas.App.Timeline.Step.HOUR;
        s = 'HOUR';
    } else if (diff <= tas.App.Timeline.Step.DAY) {
        step = tas.App.Timeline.Step.HOUR;
        s = 'HOUR';
    } else if (diff <= tas.App.Timeline.Step.WEEK) {
        step = tas.App.Timeline.Step.DAY;
        s = 'DAY';
    } else if (diff <= tas.App.Timeline.Step.MONTH) {
        step = tas.App.Timeline.Step.WEEK;
        s = 'WEEK';
    } else if (diff <= tas.App.Timeline.Step.YEAR) {
        step = tas.App.Timeline.Step.MONTH;
        s = 'MONTH';
    } else if (diff <= tas.App.Timeline.Step.DECADE) {
        step = tas.App.Timeline.Step.YEAR;
        s = 'YEAR';
    } else if (diff <= tas.App.Timeline.Step.CENTURY) {
        step = tas.App.Timeline.Step.DECADE;
        s = 'DECADE';
    } else {
        step = tas.App.Timeline.Step.CENTURY;
        s = 'CENTURY';
    }
    this.step = step;
    console.log(this.currentMin.toString(), this.currentMax.toString(), s, diff, step, tas.App.Timeline.Step);
};

/**
 * Update from inner data
 */
tas.App.Timeline.prototype.update = function() {
    this.setStep();
    this.renderSegments();
};

/**
 * @inheritDoc
 */
tas.App.Timeline.prototype.onRendered = function() {
    var container = this.getElement(),
        minHandle = $('.handle-min', container),
        maxHandle = $('.handle-max', container);

    this.onHandleDragStart = this.onHandleDragStart.bind(this);
    this.onHandleDrag = this.onHandleDrag.bind(this);
    this.onHandleDragStop = this.onHandleDragStop.bind(this);

    if (tas.browser.isTouch) {
        minHandle.on(tas.eventType.TOUCHMOVE, this.onHandleDrag);
        maxHandle.on(tas.eventType.TOUCHMOVE, this.onHandleDrag);
    } else {
        minHandle.on(tas.eventType.MOUSEDOWN, this.onHandleDragStart);
        maxHandle.on(tas.eventType.MOUSEDOWN, this.onHandleDragStart);
    }
};

/**
 * Handle drag start
 * @param  {MouseEvent|TouchEvent} evt
 */
tas.App.Timeline.prototype.onHandleDragStart = function(evt) {
    var doc = $(document);
    if (tas.browser.isTouch) {
        doc.on(tas.eventType.TOUCHMOVE, this.onHandleDrag);
        doc.on(tas.eventType.TOUCHEND, this.onHandleDragStop);
    } else {
        doc.on(tas.eventType.MOUSEMOVE, this.onHandleDrag);
        doc.on(tas.eventType.MOUSEUP, this.onHandleDragStop);
    }
    console.log('start drag');
};

/**
 * Handle drag
 * @param  {MouseEvent|TouchEvent} evt
 */
tas.App.Timeline.prototype.onHandleDrag = function(evt) {
    window.clearTimeout(this.dragHandleTimer);
    this.dragHandleTimer = window.setTimeout(this.onHandleDragStop, 500);
};

/**
 * Drop handle
 * @param  {MouseEvent|TouchEvent} evt
 */
tas.App.Timeline.prototype.onHandleDragStop = function(evt) {
    window.clearTimeout(this.dragHandleTimer);

    var doc = $(document);
    doc.off(tas.eventType.MOUSEMOVE, this.onHandleDrag);
    doc.off(tas.eventType.MOUSEUP, this.onHandleDragStop);
    console.log('stop drag');
};

/**
 * Renders segments inside the active zone
 */
tas.App.Timeline.prototype.renderSegments = function() {
    var container = this.getElement(),
        segmentsContainer = $('.ui-slider-segments', container),
        diff = this.currentMax.getTime() - this.currentMin.getTime(),
        steps = diff / this.step,
        width = 100 / steps,
        s = '';

    for (var i = 0, len = Math.floor(steps); i < len; i++) {
        s += '<div class="ui-slider-segment" style="margin-left: ' + width + '%"></div>';
    }
    segmentsContainer.html(s);
};
