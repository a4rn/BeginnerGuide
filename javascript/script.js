var YTvideoarray;
var ptr = 3;
var map;
var subject = 'javascript'

//gets 10 javascript related Youtube videos
function getYTvideos() {
  subject = $('#search').val();
  var queryURL = 'https://www.googleapis.com/youtube/v3/search?&q=' + subject + '&videoEmbeddable=true&type=video&maxResults=50&key=AIzaSyBwQny0pptr3_O-P3kychqBguWLe8rP0hE&part=snippet&relevanceLanguage=en&safeSearch=strict&type=video&videoCategory=education';

  console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: 'GET',
    dataType: 'jsonp'

  }).done(function(response) {
    console.log(response);
    processYTresp(response.items);
  }).fail(function() {
    console.log('ajax failed');
  });
};


//shows the videos in the DOM
function processYTresp(resp) {

  var YTembed = 'https://www.youtube.com/embed/';

  for (var i = 0; i < resp.length; i++) {
    if (enlanguage(resp[i].snippet.description)) {
      // console.log(resp[i].snippet.description)
      var vidsrc = YTembed + resp[i].id.videoId + '?enablejsapi=1'
      var vidlist = $('<iframe>');
      vidlist.attr('height', '300px');
      vidlist.attr('width', '300px');
      vidlist.attr('src', vidsrc);
      vidlist.attr('allowfullscreen', 'allowfullscreen');
      YTvideoarray.push(vidlist);
    }
  }

  for (var i = 0; i < 4; i++) {
    $('#YTsection').append(YTvideoarray[i]);
  }
};

function enlanguage(language) {
  var queryURL = 'http://apilayer.net/api/detect?access_key=91e3c909cccca52183d9fae02a3f5add&query=' + language
    // debugger;
    // console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: 'GET',
    dataType: 'jsonp'

  }).done(function(resp) {
    // console.log(resp);
    console.log(resp.results[0].language_code)
    switch (resp.results[0].language_code) {
      case 'en':
        return true;
        break;
      default:
        return false;
    }

  }).fail(function() {
    console.log('checkLanguage failed');
  });
};



$('.searchButton').click(function() {
  subject = $('#search').val();
  console.log('pasok 1')
  console.log(subject)
  $(".searchResults").empty();

  var SOSearch = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=javascript&intitle=' + subject + '&site=stackoverflow';

  $.get(SOSearch, function(data) {
    console.log(data);
    var searchItemHTML = "<h2>Results from Stack Overflow</h2>";
    $(".searchResults").append(searchItemHTML);

    for (i = 0; i < 10; i++) {
      var searchItem = data.items[i].title;
      var searchItemHTML = '<p><a href="' + data.items[i].link + '" target=_blank>' + data.items[i].title + '</a></p>';
      $(".searchResults").append(searchItemHTML);
      console.log(searchItem);
    }

  });
});


$('.searchButton').click(function() {
  YTvideoarray = [];
  getYTvideos();
});


$('#next').click(function() {
  if (ptr < YTvideoarray.length - 1) {
    $('#YTsection').empty();
    var i = 1;
    while ((ptr <= YTvideoarray.length) && (i++ < 5)) {
      ptr++;
      $('#YTsection').append(YTvideoarray[ptr]);

    }
  }
  return false;
});


$(document).ready(function() {
  // loads the parallax effect when the page loads
  $('.parallax').parallax();
  getYTvideos();
  getPodcasts();
  initMap();



  // $('#prev').click(function() {
  //         if (!ptr < 4) {
  //             $('#YTsection').empty();
  //             var i = 4;
  //             // var temparr = [];
  //             while ((ptr >= 0) && (i-- < 4)) {
  //                 $('#YTsection').append(YTvideoarray.slice();
  //                 }
  //             }

  //         });



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

    var b = r.results;

    for (var i = 0; i < 4; i++) {
      var podlist = $('<span>');

      var podHref = $('<a>');
      podHref.attr('href', b[i].trackViewUrl);
      podHref.attr('target', '_blank');

      var podImg = $('<img>');
      podImg.attr('src', b[i].artworkUrl100);
      podImg.attr('height', '300px');
      podImg.attr('width', '300px');
      podImg.addClass('podcastImage')
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

  }
});