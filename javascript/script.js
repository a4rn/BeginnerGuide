
 $(document).ready(function(){
 	// loads the parallax effect when the page loads
      $('.parallax').parallax(); 
});


//adds the podcasts
function getsample() {

	var queryURL = 'http://itunes.apple.com/search?term=javascript&media=podcast&entity=podcast' 

	$.ajax({
	        url: queryURL,
	        method: 'GET',
	        dataType: 'jsonp'
	})
	  .done(function(response) {
	  	console.log(response);
	  	var a=response;
	  	var b=response.results;
	  	var d='';
	  	console.log(response.resultCount)
	  	for (var i = 0; i < 6; i++) {
	  	
  			var d = d + '<div id= podcastDiv>' +'<p>'+b[i].artistName + '</p>' +
  				'<img src=' + b[i].artworkUrl100 + '>' +
  				'<a href=' + b[i].trackViewUrl + '>' +'</div>'+'<br>' 
	  	}		
	  	$('#show').html(d)
	  });
}

getsample();	
    


//creating the Google map
 function initMap() {
	var locations = [
	//array for the location of the markers
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


// sets up loop for the markers

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

initMap();







 // google maps API key= AIzaSyCSVZ6NLbN56qrReRGN7czA9m9y3CrMmjs