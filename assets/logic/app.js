//variables

var topics = ["History", "Rugby", "China", "Snowboarding", 
	"Archaeology", "Anthropology"];

function displayGifInfo() {
	var gif = $(this).attr("dataName");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=10&api_key=dc6zaTOxFJmzC";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		//log response during troubleshooting as "undefined" kept returning
		console.log(response);

		//realized a for loop was needed in order to access all of the objects
		//within the data array, else the data array would only bring
		//up one object when called
		//this literally made me yell with excitement when it worked
		for (var i = 0; i < response.data.length; i++) {

		//logging the response helped in determining that the data
		//is an array which has to be pulled via []
		//have to make sure to log more often

		//retrive the rating data
		var rating = $("<p>" + response.data[i].rating + "</p>");

		//appends the rating data
		$("#gifView").append("<h4>Rating:</h4>").append(rating);

		//retrieve the gif img data
		var image = $("<img src=" + response.data[i].images.downsized.url + ">");

		//appends the gif img data
		$("#gifView").append(image);
		}
	});
}

//buttons

function renderButtons() {

	//deletion prior addition
	$("#buttons-view").empty();

	for (var i = 0; i < topics.length; i++) {

		//button generation
		var a = $("<button>");

		//add class
		a.addClass("topic");

		//add attribute
		a.attr("dataName", topics[i]);

		//add text to the button
		a.text(topics[i]);

		//append the button to the view div
		$("#buttons-view").append(a);
	}
}

//Add button events

$("#addGif").on("click", function(event) {
	event.preventDefault();

	var topic = $("#formInput").val().trim();

	topics.push(topic);

	renderButtons();
});

//event listener

$(document).on("click", ".topic", displayGifInfo);

renderButtons();