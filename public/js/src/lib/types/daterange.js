/**
 * Date range
 *
 * @constructor
 * @param {tas.Date} start
 * @param {tas.Date} end
 */
tas.DateRange = function(start, end) {

    /**
     * @type {tas.Date}
     */
    this.start = start;

    /**
     * @type {tas.Date}
     */
    this.end = end;
};

/**
 * @return {tas.Date}
 */
tas.DateRange.prototype.getStart = function() {
    return this.start;
};

/**
 * @return {tas.Date}
 */
tas.DateRange.prototype.getEnd = function() {
    return this.end;
};

/**
 * Tests if a date is within this range.
 *
 * @param {tas.Date} date
 * @return {Boolean}
 */
tas.DateRange.prototype.contains = function(date) {
    return date.valueOf() >= this.start.valueOf() &&
        date.valueOf() <= this.end.valueOf();
};
