// Assuming these variables are defined elsewhere in your code.
var site = "beam"; // Update 'site' with the appropriate value.
var options = {
  separator: true, // Set your options here.
  // darkheader: true, // You can add 'darkheader' here if needed.
};

setInterval(function () {
  if (site === "beam" || site === "twitch") {
    var separatorStyleId = "polystyle-separator";

    if (options.separator) {
      if (!$(`#${separatorStyleId}`).length) {
        $("head").append(
          `<style id='${separatorStyleId}'>` +
            `.message:nth-child(odd) {` +
            `background: rgba(0, 0, 0, 0.4);` +
            `}` +
            `</style>`
        );
      }
    } else {
      $(`#${separatorStyleId}`).remove();
    }

    // Uncomment the code below if you want to add a dark theme to the header and footer.
    /*
    var darkHeaderStyleId = "polystyle-darkheader";

    if (options.darkheader) {
      if (!$(`#${darkHeaderStyleId}`).length) {
        $("head").append(
          `<style id='${darkHeaderStyleId}'>` +
            `.navbar.ng-scope, .footer {` +
            `background-color: rgba(0, 0, 0, 0.4);` +
            `}` +
            `</style>`
        );
      }
    } else {
      $(`#${darkHeaderStyleId}`).remove();
    }
    */
  }
}, 5000);
