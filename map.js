//set map options
var myLatLng = {lat: 51.5, lng: -0.1};
var mapOptions = {
    center: myLatLng,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};


//onload:
google.maps.event.addDomListener(window, 'load', initialize);

//initialize: draw map in the #googleMap div
function initialize() {
    //create a DirectionsRenderer object which we will use to display the route
    directionsDisplay = new google.maps.DirectionsRenderer();
    //create map
    map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
    //bind the DirectionsRenderer to the map
    directionsDisplay.setMap(map);
}//end of initialize

//Calculate route when selecting autocomplete:
google.maps.event.addListener(autocomplete1, 'place_changed', calcRoute);
google.maps.event.addListener(autocomplete2, 'place_changed', calcRoute);

