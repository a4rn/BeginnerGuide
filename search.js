$(document).ready(function(){


$(".searchButton").click(function(){


console.log($("#searchText").val())


// https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=javascript&intitle=object&site=stackoverflow

$( ".searchResults" ).empty();




var SOSearch="https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=javascript&intitle=" + $("#searchText").val() + "&site=stackoverflow"

$.get( SOSearch, function( data ) {
		console.log(data);


		var searchItemHTML="<h2>Results from Stack Overflow</h2>";
		$(".searchResults").append(searchItemHTML);

	for(i=0;i<10;i++){
		var searchItem=data.items[i].title;
		var searchItemHTML='<p><a href="'+data.items[i].link+'" target=_blank>'+data.items[i].title+'</a></p>';
		$(".searchResults").append(searchItemHTML);
		console.log(searchItem);
}

});








var GHSearch="https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=javascript&intitle=" + $("#searchText").val() + "&site=stackoverflow"

$.get( GHSearch, function( data ) {
		console.log(data);


		var searchItemHTML="<h2>Results from Git Hub</h2>";
		$(".searchResults").append(searchItemHTML);

	for(i=0;i<10;i++){
		var searchItem=data.items[i].title;
		var searchItemHTML='<p><a href="'+data.items[i].link+'" target=_blank>'+data.items[i].title+'</a></p>';
		$(".searchResults").append(searchItemHTML);
		console.log(searchItem);
}

});

})

})

