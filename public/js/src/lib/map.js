/**
 * @constructor
 * @extends {View}
 *
 * @param {google.map.LatLng} coords
 * @param {Number} [zoom]
 */
tas.Map = function(coords, zoom) {
    tas.View.call(this);

    /**
     * @type {google.maps.LatLng}
     */
    this.coords = coords;

    /**
     * @type {Number}
     */
    this.zoom = zoom || 17;
};
tas.utils.inherits(tas.Map, tas.View);

/**
 * @type {google.maps.Map}
 */
tas.Map.prototype.map = null;

/**
 * @inheritDoc
 */
tas.Map.prototype.createDom = function() {
    this.element = document.createElement('div');
    this.element.className = 'map';
};

/**
 * @inheritDoc
 */
tas.Map.prototype.onRendered = function() {
    this.map = new google.maps.Map(this.element, {
        center: this.coords,
        zoom: this.zoom,
        disableDefaultUI: true
    });
};

tas.Map.prototype.setCenter = function(center) {
    this.map.setCenter(center);
};
