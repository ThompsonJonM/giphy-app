HOW TO USE THIS APP

This app was created using jQuery, HTML, and CSS in order to grab 10 gifs from the Giphy API and add them to the website structure. Simply type in a topic and hit submit. This will add a button to the existing topics. 

Click on the newly added button to see the top 10 gifs which the Giphy API is currently showing (the order may change). 

Clicking on a topic button will remove the previous gifs and add 10 new ones from the topic clicked.

Hit the reset button to remove all of the added topics and return to the base layout of the app.

Enjoy!

CHANGELOG

READ FROM BOTTOM TO TOP

20170611 - 2201

APP.JS: Fixed issue where a blank search could be entered which would result in a number of random gifs populating the gifView div.

KNOWN BUG: Clicking submit without a text entry creates a blank button which will not display any gifs. Troubleshot quite a bit and looked up why this could be happening on google. Could not find anything which definitively solved the issue.

20170611 - 1753

INDEX.HTML: Switched around some bootstrap elements.

STYLESHEET.CSS: Added responsiveness and minimal styling.

APP.JS: Added removal for prior info so the page does not load more than 10 gifs at a time. Fixed the placement of the gifs by adding a "col-xs-4" class to the gif. This also helped make the gifs responsive.

20170610 - 1502

INDEX.HTML: Switched places of the addGif and gifView.

APP.JS: Added value removal to the addgif click control.

STYLESHEET.CSS: Added image styling.

20170609 - 1533

APP.JS: Added stop/go function for images. Now the gifs load in a still state and do not animate until clicked. This was a bit of a slog.

20170609 - 1259

INDEX.HTML: Added reset button.

APP.JS: Added reset function.

20170609 - 1250

APP.JS: Got the code to work! Fixed elements within the API which allowed the code to call more than one object when the function executes thanks to a for-loop within the function. Prior to this, I did not realize that the data from the API was organized in an array and, due to this, needed to be ported with "[]".

INDEX.HTML: Adjusted the names of some HTML elements. Briefly tried using separate divs for both the rating and gif image but abandoned it when it didn't look great to me.

20170609 - 1148

INDEX.HTML: Added bootstrap and all the trimmings.

APP.JS: Began working on code framework. It does not currently work which is frustrating.

20170609 - 0848

INDEX.HTML: Created.

APP.JS: Created.

RESET.CSS: Created and forgotten.

STYLESHEET.CSS: Created.