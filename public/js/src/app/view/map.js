/**
 * @constructor
 * @extends {Map}
 *
 * @param {View} container
 * @param {*} coords
 */
App.Map = function(container, coords) {
    coords = new google.maps.LatLng(43.85, 18.38)

    Map.call(this, coords);
    this.render(container.getElement());
    this.setParent(container);
};
utils.inherits(App.Map, Map);
