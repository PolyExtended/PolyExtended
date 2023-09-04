// Assuming these functions and variables are defined elsewhere in your code.
function onMessageAdd(callback) {
  // Your implementation of onMessageAdd here.
}

// Define the 'options' and 'site' variables somewhere in your code.
var options = {
  chatalerts: true, // Add your options here.
};

var site = "beam"; // Update 'site' with the appropriate value.

onMessageAdd(function (mut, name, message, id) {
  if (options.chatalerts) {
    if ((site === "beam" && mut.hasClass("tagged")) ||
      (site === "twitch" && mut.find(".mentioned").length)) {
      mut.css("background", "rgba(213, 24, 18, 0.2)");
    }
  }
});
