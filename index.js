var gMap;
//renamed map to myMapId, gMap, map
//bounds-changed t0 idle

function initMap() {
  //create a new map and assign it to gmap
  // Create a new map and assign it to gMap
  gMap = new google.maps.Map(document.getElementById('myMapID'), {
    center: {lat: 41.878, lng: 10}, zoom: 2,

    mapId: "8e0a97af9386fef",});

// Add a marker for Hawaii,USA   
var marker = new google.maps.Marker({position:{lat:19.741755,lng:-155.844437}, map:gMap});

// Add a second marking with a custom icon, an Info window, and a listener.
var marker2 = new google.maps.Marker({position:{lat:40.730610,lng:-73.935242}, map:gMap});
marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

//info message
var infoWindow = new google.maps.InfoWindow({content:'New York City, USA'});

//when someone clicks on the icon show info message
marker2.addListener('click', function() {
   infoWindow.open(gMap, marker2);
});

google.maps.event.addListener (gMap,'idle', function(){
  updateGame()

});
// checking if the marker is in bounds and showing it on console
function updateGame() {
  console.log('function UpdateGame()!');
  var zoomLevel = gMap.getZoom()
  var inBounds = false;

  // Check if Hawaii is in the currently displayed map
  if (gMap.getBounds().contains({lat:19.741755,lng:-155.844437})) {
      inBounds = true;
  }

  console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
  
}
}

function initApplication(){
  console.log('Map Mania-Starting!');
}





