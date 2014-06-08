/**
 * @constructor
 * @extends {View}
 *
 * @param {google.map.LatLng} coords
 * @param {Number} [zoom]
 */
var Map = function(coords, zoom) {
    View.call(this);

    /**
     * @type {google.maps.LatLng}
     */
    this.coords = coords;

    /**
     * @type {Number}
     */
    this.zoom = zoom || 17;
};
utils.inherits(Map, View);

/**
 * @type {google.maps.Map}
 */
Map.prototype.map = null;

/**
 * @inheritDoc
 */
Map.prototype.createDom = function() {
    this.element = document.createElement('div');
    this.element.className = 'map';
};

Map.prototype.onRendered = function() {
    this.map = new google.maps.Map(this.element, {
        center: this.coords,
        zoom: this.zoom,
        disableDefaultUI: true
    });
};

Map.prototype.setCenter = function(center) {
    this.map.setCenter(center);
};
