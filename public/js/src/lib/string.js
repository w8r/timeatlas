tas.string = {

	/**
	 * Repeats a string n times.
	 * @param {String} string The string to repeat.
	 * @param {Number} length The number of times to repeat.
	 * @return {String} A string containing {@code length} repetitions of
	 *     {@code string}.
	 */
	repeat: function(string, length) {
		return new Array(length + 1).join(string);
	},

	/**
	 * @param {Number} num The number to pad.
	 * @param {Number} length The desired length.
	 * @param {Number=} precision The desired precision.
	 * @return {String}
	 */
	padNumber: function(num, length, precision) {
		var s = precision ? num.toFixed(precision) : String(num),
			index = s.indexOf('.');
		if (index === -1) {
			index = s.length;
		}
		return tas.string.repeat('0', Math.max(0, length - index)) + s;
	}
};
