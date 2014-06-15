Date.now = Date.now || function() {
    return new Date().getTime();
};

/**
 * Date wrapper
 * @param {Number|Date|tas.Date} [year]
 * @param {Number}                 [month]
 * @param {Number}                 [date]
 */
tas.Date = function(year, month, date) {
    /**
     * Wrapped date
     *
     * @type {Date}
     * @protected
     */
    this.date = null;

    if (typeof year === 'number') { // year as a Number
        this.date = this.constructDate(year, month || 0, date || 1);

    } else if (year) { // copy constructor
        console.log(year);
        this.date = this.constructDate(
            year.getFullYear(),
            year.getMonth(),
            year.getDate());

    } else { // no data
        this.date = new Date(Date.now());
        this.date.setHours(0);
        this.date.setMinutes(0);
        this.date.setSeconds(0);
        this.date.setMilliseconds(0);
    };
};

/**
 * Returns whether the given year is a leap year.
 *
 * @param {number} year Year part of date.
 * @return {Boolean} Whether the given year is a leap year.
 */
tas.Date.isLeapYear = function(year) {
    // Leap year logic; the 4-100-400 rule
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
};


/**
 * Returns whether the given year is a long ISO year.
 * See {@link http://www.phys.uu.nl/~vgent/calendar/isocalendar_text3.htm}.
 *
 * @param  {Number} year Full year part of date.
 * @return {Boolean} Whether the given year is a long ISO year.
 */
tas.Date.isLongIsoYear = function(year) {
    var n = 5 * year + 12 - 4 * (Math.floor(year / 100) - Math.floor(year / 400));
    n += Math.floor((year - 100) / 400) - Math.floor((year - 102) / 400);
    n += Math.floor((year - 200) / 400) - Math.floor((year - 199) / 400);

    return n % 28 < 5;
};


/**
 * Returns the number of days for a given month.
 *
 * @param {number} year Year part of date.
 * @param {number} month Month part of date.
 * @return {number} The number of days for the given month.
 */
tas.Date.getNumberOfDaysInMonth = function(year, month) {
    var number = 31;
    switch (month) {
        case 1:
            number = tas.Date.isLeapYear(year) ? 29 : 28;
            break;
        case 5:
        case 7:
        case 10:
        case 3:
            number = 30;
            break;
    }
    return number;
};


/**
 * @private
 * @param {Number} fullYear The full year (including century).
 * @param {Number} month
 * @param {Number} date
 * @return  {Date}
 */
tas.Date.prototype.constructDate = function(fullYear, month, date) {
    var date = new Date(fullYear, month, date);
    if (fullYear >= 0 && fullYear < 100) {
        date.setFullYear(date.getFullYear() - 1900);
    }
    return date;
};

/**
 * @return {tas.Date} A clone of the date object.
 */
tas.Date.prototype.clone = function() {
    return new tas.Date(this.date);
};


/**
 * @return {Number} The four digit year of date.
 */
tas.Date.prototype.getFullYear = function() {
    return this.date.getFullYear();
};


/**
 * Alias for getFullYear.
 *
 * @return {Number} The four digit year of date.
 */
tas.Date.prototype.getYear = function() {
    return this.getFullYear();
};


/**
 * @return {Number} The month of date, 0 = Jan, 11 = Dec.
 */
tas.Date.prototype.getMonth = function() {
    return this.date.getMonth();
};


/**
 * @return {Number} The date of month.
 */
tas.Date.prototype.getDate = function() {
    return this.date.getDate();
};


/**
 * Returns the Number of milliseconds since 1 January 1970 00:00:00.
 *
 * @return {Number}
 */
tas.Date.prototype.getTime = function() {
    return this.date.getTime();
};


/**
 * @return {Number} The day of week, US style. 0 = Sun, 6 = Sat.
 */
tas.Date.prototype.getDay = function() {
    return this.date.getDay();
};


/**
 * @return {Number} The day of week, ISO style. 0 = Mon, 6 = Sun.
 */
tas.Date.prototype.getIsoWeekday = function() {
    return (this.getDay() + 6) % 7;
};

/**
 * @return {Number}
 */
tas.Date.prototype.getWeekday = function() {
    return this.getIsoWeekday();
};


/**
 * @return {Number} The four digit year of date according to universal time.
 */
tas.Date.prototype.getUTCFullYear = function() {
    return this.date.getUTCFullYear();
};


/**
 * @return {Number} The month of date according to universal time,
 *     0 = Jan, 11 = Dec.
 */
tas.Date.prototype.getUTCMonth = function() {
    return this.date.getUTCMonth();
};


/**
 * @return {Number} The date of month according to universal time.
 */
tas.Date.prototype.getUTCDate = function() {
    return this.date.getUTCDate();
};


/**
 * @return {Number} The day of week according to universal time,
 *     US style. 0 = Sun, 1 = Mon, 6 = Sat.
 */
tas.Date.prototype.getUTCDay = function() {
    return this.date.getDay();
};


/**
 * @return {Number} The hours value according to universal time.
 */
tas.Date.prototype.getUTCHours = function() {
    return this.date.getUTCHours();
};


/**
 * @return {Number} The hours value according to universal time.
 */
tas.Date.prototype.getUTCMinutes = function() {
    return this.date.getUTCMinutes();
};


/**
 * @return {Number} The day of week according to universal time, ISO style.
 *     0 = Mon, 6 = Sun.
 */
tas.Date.prototype.getUTCIsoWeekday = function() {
    return (this.date.getUTCDay() + 6) % 7;
};


/**
 * @return {Number} The day of week according to universal time and
 *     firstDayOfWeek setting.
 */
tas.Date.prototype.getUTCWeekday = function() {
    return (this.getUTCIsoWeekday() - this.firstDayOfWeek_ + 7) % 7;
};

/**
 * @return {Number} The Number of days for the selected month.
 */
tas.Date.prototype.getNumberOfDaysInMonth = function() {
    return tas.date.getNumberOfDaysInMonth(this.getFullYear(), this.getMonth());
};


/**
 * @return {Number} The week Number.
 */
tas.Date.prototype.getWeekNumber = function() {
    return tas.date.getWeekNumber(
        this.getFullYear(), this.getMonth(), this.getDate(),
        this.firstWeekCutOffDay_, this.firstDayOfWeek_);
};


/**
 * @return {Number} The day of year.
 */
tas.Date.prototype.getDayOfYear = function() {
    var dayOfYear = this.getDate(),
        year = this.getFullYear();
    for (var m = this.getMonth() - 1; m >= 0; m--) {
        dayOfYear += tas.date.getNumberOfDaysInMonth(year, m);
    }

    return dayOfYear;
};


/**
 * Returns timezone offset. The timezone offset is the delta in minutes between
 * UTC and your local time. E.g., UTC+10 returns -600. Daylight savings time
 * prevents this value from being constant.
 *
 * @return {Number} The timezone offset.
 */
tas.Date.prototype.getTimezoneOffset = function() {
    return this.date.getTimezoneOffset();
};


/**
 * Returns timezone offset as a string. Returns offset in [+-]HH:mm format or Z
 * for UTC.
 *
 * @return {String} The timezone offset as a string.
 */
tas.Date.prototype.getTimezoneOffsetString = function() {
    var tz,
        offset = this.getTimezoneOffset();

    if (offset == 0) {
        tz = 'Z';
    } else {
        var n = Math.abs(offset) / 60,
            h = Math.floor(n),
            m = (n - h) * 60;
        tz = (offset > 0 ? '-' : '+') +
            tas.string.padNumber(h, 2) + ':' +
            tas.string.padNumber(m, 2);
    }

    return tz;
};


/**
 * Sets the date.
 *
 * @param {tas.Date} date Date object to set date from.
 */
tas.Date.prototype.set = function(date) {
    this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
};


/**
 * Sets the year part of the date.
 *
 * @param {Number} year Four digit year.
 */
tas.Date.prototype.setFullYear = function(year) {
    this.date.setFullYear(year);
};


/**
 * Alias for setFullYear.
 *
 * @param {Number} year Four digit year.
 * @see #setFullYear
 */
tas.Date.prototype.setYear = function(year) {
    this.setFullYear(year);
};


/**
 * Sets the month part of the date.
 *
 * TODO(nnaze): Update type to Number.
 *
 * @param {Number} month The month, where 0 = Jan, 11 = Dec.
 */
tas.Date.prototype.setMonth = function(month) {
    this.date.setMonth(month);
};


/**
 * Sets the day part of the date.
 *
 * @param {Number} date The day part.
 */
tas.Date.prototype.setDate = function(date) {
    this.date.setDate(date);
};


/**
 * Sets the value of the date object as expressed in the Number of milliseconds
 * since 1 January 1970 00:00:00.
 *
 * @param {Number} ms Number of milliseconds since 1 Jan 1970.
 */
tas.Date.prototype.setTime = function(ms) {
    this.date.setTime(ms);
};


/**
 * Sets the year part of the date according to universal time.
 *
 * @param {Number} year Four digit year.
 */
tas.Date.prototype.setUTCFullYear = function(year) {
    this.date.setUTCFullYear(year);
};


/**
 * Sets the month part of the date according to universal time.
 *
 * @param {Number} month The month, where 0 = Jan, 11 = Dec.
 */
tas.Date.prototype.setUTCMonth = function(month) {
    this.date.setUTCMonth(month);
};


/**
 * Sets the day part of the date according to universal time.
 *
 * @param {Number} date The UTC date.
 */
tas.Date.prototype.setUTCDate = function(date) {
    this.date.setUTCDate(date);
};

/**
 * Performs date calculation by adding the supplied interval to the date.
 *
 * @param {tas.date.Interval} interval Date interval to add.
 */
tas.Date.prototype.add = function(interval) {
    if (interval.years || interval.months) {
        // As months have different Number of days adding a month to Jan 31 by just
        // setting the month would result in a date in early March rather than Feb
        // 28 or 29. Doing it this way overcomes that problem.

        // adjust year and month, accounting for both directions
        var month = this.getMonth() + interval.months + interval.years * 12,
            year = this.getYear() + Math.floor(month / 12);

        month %= 12;
        if (month < 0) {
            month += 12;
        }

        var daysInTargetMonth = tas.date.getNumberOfDaysInMonth(year, month),
            date = Math.min(daysInTargetMonth, this.getDate());

        // avoid inadvertently causing rollovers to adjacent months
        this.setDate(1);

        this.setFullYear(year);
        this.setMonth(month);
        this.setDate(date);
    }

    if (interval.days) {
        // Convert the days to milliseconds and add it to the UNIX timestamp.
        // Taking noon helps to avoid 1 day error due to the daylight saving.
        var noon = new Date(this.getYear(), this.getMonth(), this.getDate(), 12),
            result = new Date(noon.getTime() + interval.days * 86400000);

        // Set date to 1 to prevent rollover caused by setting the year or month.
        this.setDate(1);
        this.setFullYear(result.getFullYear());
        this.setMonth(result.getMonth());
        this.setDate(result.getDate());

        this.maybeFixDst_(result.getDate());
    }
};


/**
 * Returns ISO 8601 string representation of date.
 *
 * @param {Boolean} verbose Whether the verbose format should be used
 *     instead of the default compact one.
 * @param {Boolean} tz Whether the timezone offset should be included
 *     in the string.
 * @return {String} ISO 8601 string representation of date.
 */
tas.Date.prototype.toIsoString = function(verbose, tz) {
    var str = [
        this.getFullYear(),
        tas.string.padNumber(this.getMonth() + 1, 2),
        tas.string.padNumber(this.getDate(), 2)
    ];

    return str.join((verbose) ? '-' : '') +
        (tz ? this.getTimezoneOffsetString() : '');
};


/**
 * Returns ISO 8601 string representation of date according to universal time.
 *
 * @param {Boolean} verbose Whether the verbose format should be used instead of
 *                          the default compact one.
 * @param {Boolean} tz Whether the timezone offset should be included in the string.
 * @return {String} ISO 8601 string representation of date according to
 *                  universal time.
 */
tas.Date.prototype.toUTCIsoString = function(verbose, tz) {
    var str = [
        this.getUTCFullYear(),
        tas.string.padNumber(this.getUTCMonth() + 1, 2),
        tas.string.padNumber(this.getUTCDate(), 2)
    ];

    return str.join((verbose) ? '-' : '') + (tz ? 'Z' : '');
};


/**
 * @param {tas.Date} other The date to compare.
 * @return {Boolean} Whether the given date is equal to this one.
 */
tas.Date.prototype.equals = function(other) {
    return !!(other &&
        this.getYear() == other.getYear() &&
        this.getMonth() == other.getMonth() &&
        this.getDate() == other.getDate());
};


/**
 * @return {String} ISO 8601 string representation of date.
 * @override
 */
tas.Date.prototype.toString = function() {
    return this.toIsoString();
};

/**
 * @return {Number} Value of wrapped date.
 * @override
 */
tas.Date.prototype.valueOf = function() {
    return this.date.valueOf();
};


/**
 * Compares two dates. For sorting.
 *
 * @param {tas.Date|Date} date1
 * @param {tas.Date|Date} date2
 * @return {Number}.
 */
tas.Date.compare = function(date1, date2) {
    return date1.getTime() - date2.getTime();
};
