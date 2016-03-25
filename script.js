 $(document).ready(function(){
      $('.parallax').parallax();
});


	var map;
	function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 40.397, lng: -74.644},
	  zoom: 8
	});
	} 

 // AIzaSyCSVZ6NLbN56qrReRGN7czA9m9y3CrMmjs