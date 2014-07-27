/**
 * @fileOverview Map view
 * @author w8r
 */

/**
 * @constructor
 * @extends {tas.Map}
 *
 * @param {tas.View} container
 * @param {*} coords
 */
tas.App.Map = function(container, coords) {
    coords = new google.maps.LatLng(43.85, 18.38)

    tas.Map.call(this, coords);
    this.render(container.getElement());
    this.setParent(container);
};
tas.utils.inherits(tas.App.Map, tas.Map);
