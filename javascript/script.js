function runcode()
{
  var leafletMap = {
    L.map( 'leaflet-map' ); //Div ID
  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxzoom: 19
    } ).addTo( leafletMap );
      leafletMap.setView( [ 7.653484440856092, -82.60742187500306 ], 16 );


    var marker = L.marker( [ 7.653484440856092, -82.60742187500306 ] );
    marker.bindPopup( 'Panama' );
    marker.addTo( leafletMap );
  
  ];