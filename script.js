 // loads the parallax effect when the page loads
 $(document).ready(function(){
      $('.parallax').parallax(); 
});


//creating the Google map
 function initMap() {
 //array for the location of the markers	
	var locations = [
	      ['Rutgers Coding Bootcamp', 40.717470, -74.033561, 4],
	      ['App Academy', 40.725024, -73.996792, 5],
	      ['General Assembly', 40.739885, -73.990082, 3],
	      ['Dev Bootcamp', 40.706417, -74.009089, 2],
	      ['Flatiron School', 40.705280, -74.014025, 1]
	    ];

// creates the actual map with the center on Rutgers Coding Bootcamp
	    var map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 12,
	      center: new google.maps.LatLng(40.717470, -74.033561),
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    });

	    var infowindow = new google.maps.InfoWindow();

	    var marker, i;

// sets up loop for tthe markers
	    for (i = 0; i < locations.length; i++) {  
	      marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        map: map
	      });

// creates the content window when the marker is clicked
	      google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infowindow.setContent(locations[i][0]);
	          infowindow.open(map, marker);
	        }
	      })(marker, i));
	    }

 };









 // google maps API key= AIzaSyCSVZ6NLbN56qrReRGN7czA9m9y3CrMmjs