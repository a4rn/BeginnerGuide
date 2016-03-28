
 $(document).ready(function(){
 	// loads the parallax effect when the page loads
      $('.parallax').parallax(); 
   $('.autoplay').slick({
		  'slidesToShow' : 3,
		  'slidesToScroll' : 1,
		  'autoplay' : true,
		  'autoplaySpeed' : 2000 ,
		  'infinite' : true
		});

 });
			

//gets 10 javascript related Youtube videos
function getYTvideos() {
    var queryURL = 'https://www.googleapis.com/youtube/v3/search?&q=javascript&videoEmbeddable=true&type=video&maxResults=10&key=AIzaSyBwQny0pptr3_O-P3kychqBguWLe8rP0hE&part=snippet&relevanceLanguage=en';
      
        $.ajax({
                url: queryURL,
                method: 'GET',
                dataType: 'jsonp'
                
        }).done(function(response) {
              console.log('YT = ' + response);
              processYTresp(response.items);
        }).fail(function() {
              console.log('ajax failed');
        });
        
  };


//shows the videos in the DOM
 function processYTresp(resp) {
    
    var YTembed = 'https://www.youtube.com/embed/';  
    
    for (var i = 0; i < resp.length; i++) {
      var vidsrc = YTembed+resp[i].id.videoId+'?enablejsapi=1'
      var vidlist = $('<iframe>');
      vidlist.attr('height','500px');
      vidlist.attr('width','500px');
      vidlist.attr('src',vidsrc);
      $('#YTsection').append(vidlist);
    }
     
  };

	function getPodcasts() {
 
    	var queryURL = 'https://itunes.apple.com/search?term=javascript&media=podcast&entity=podcast' 
    
	    $.ajax({
	            url: queryURL,
	            method: 'GET',
	            dataType: 'jsonp'

	    }).done(function(response) {
	    		console.log(response);
	    		processPodcastresp(response);
	    }).fail(function() {
              console.log('ajax failed');
 		});
 	};


 	function processPodcastresp(r) {       
	      	
     	var b=r.results;
   		      
      	for (var i = 0; i < r.resultCount; i++) {
      		var podlist = $('<span>');
	  		
	  		// debugger;
	  		var podHref = $('<a>'); 
	  		podHref.attr('href', b[i].trackViewUrl);
	  		podHref.attr('target','_blank');

	  		var podImg = $('<img>');
	  		podImg.attr('src',b[i].artworkUrl100);		
	  		podImg.attr('height','400px');
      		podImg.attr('width','400px');
	  		podHref.append(podImg)
	  		podlist.append(podHref);
	  		$('#Podsection').append(podlist)
      	}		
      	
      
	};




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

	    // var map = new google.maps.Map(document.getElementById('map'), {
	    //   zoom: 12,
	    //   center: new google.maps.LatLng(40.717470, -74.033561),
	    //   mapTypeId: google.maps.MapTypeId.ROADMAP
	    // });

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
// debugger;
getYTvideos();	
getPodcasts();



 // google maps API key= AIzaSyCSVZ6NLbN56qrReRGN7czA9m9y3CrMmjs