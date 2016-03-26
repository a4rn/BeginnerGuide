 $(document).ready(function(){
 	// loads the parallax effect when the page loads
      $('.parallax').parallax(); 
});


 function initMap() {
        var rcb = {lat: 40.7282, lng: -74.0776};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 10,
	          center: rcb
	        });

      var contentWindow= [{
      		name: "Rutgers Coding Bootcamp",
      		blurb: "Jersey City location",
      		// link: '<p><a href="https://codingbootcamp.rutgers.edu/" target="_blank">'+
        //     'https://codingbootcamp.rutgers.edu/</a> '+
        //     '</p>'
      }];

	        var infowindow = new google.maps.InfoWindow({
	          content: contentWindow.name
	        });

	        var marker = new google.maps.Marker({
	          position: rcb,
	          map: map,
	          title: 'Rutgers Coding Bootcamp'
	        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        	  var marker = new google.maps.Marker({
	          position: {lat: 40.8282, lng: -74.0876},
	          map: map,
	          title: 'Rutge'
	        });



 }









 // google maps API key= AIzaSyCSVZ6NLbN56qrReRGN7czA9m9y3CrMmjs