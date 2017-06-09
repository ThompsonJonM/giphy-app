//variables

var topics = ["History", "Rugby", "China", "Snowboarding", 
	"Archaeology", "Anthropology"];

function displayGifInfo() {
	var gif = $(this).attr("dataName");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		//creates a div to hold the gif info

		var gifDiv = $("<div>");

		//retrive the rating data

		var rating = $("<p>" + response.rating + "</p>");
		gifDiv.append(rating);

		//appends the rating data

		$("#gifView").append(gifDiv);

		var image = $("<p>" + response.image + "</p>");
		gifDiv.append(image);

		$("#gifView").append(gifDiv);

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