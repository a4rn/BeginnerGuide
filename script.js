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

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">RCB</h1>'+
            '<div id="bodyContent">'+
            '<p>Rutgers Coding Bootcamp</p>'+
            '<p><a href="https://codingbootcamp.rutgers.edu/">'+
            'https://codingbootcamp.rutgers.edu/</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: rcb,
          map: map,
          title: 'Rutgers Coding Bootcamp'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

 // google maps API key= AIzaSyCSVZ6NLbN56qrReRGN7czA9m9y3CrMmjs