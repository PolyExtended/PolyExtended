var working = false; // When true, doesn't trigger message events.
var site = "twitch";
var addevents = []; // Arrays for functions to be run for message events.
var delevents = [];

$(document).ready(function () {
  $("head").append(
    "<style>" +
    ".badge {" +
    "display: none !important;" +
    "}" +

    ".badges:hover .badge, .badge:last-of-type {" +
    "display: inline-block !important;" +
    "}" +

    "@keyframes polyspin {" +
    "from {" +
    "transform: none" +
    "}" +

    "to {" +
    "transform: rotate(360deg)" +
    "}" +
    "}" +

    ".polyemote-spin {" +
    "animation-name: polyspin;" +
    "animation-duration: 2s;" +
    "animation-iteration-count: infinite;" +
    "}" +

    ".polyemote-spin-fast {" +
    "animation-name: polyspin;" +
    "animation-duration: 0.5s;" +
    "animation-iteration-count: infinite;" +
    "}" +
    "</style>"
  );

  // The observe function is not standard JavaScript, and I'm assuming it's part of some library.
  // Please make sure you include the necessary library that defines this function.

  // $("body").observe("added", ".chat-lines > .ember-view", function(mut) { // When a message is added...
  //   if (!working) {
  //     for (var i = 0; i < addevents.length; i++) { // Run each event function.
  //       if (addevents[i]) {
  //         for (var j = 0; j < mut.addedNodes.length; j++) {
  //           if ($(mut.addedNodes[j]).hasClass("ember-view")) {
  //             var name = $(mut.addedNodes[j]).find(".from").html();
  //             var message = $(mut.addedNodes[j]).find(".message").html();
  //             var id = $(mut.addedNodes[j]).attr("id");
  //
  //             addevents[i]($(mut.addedNodes[j]), name, message, id);
  //           }
  //         }
  //       }
  //     }
  //   }
  // });

  // $("body").observe("removed", ".chat-lines > .ember-view", function(mut) { // When a message is removed...
  //   if (!working) {
  //     for (var i = 0; i < delevents.length; i++) { // Run each event function.
  //       if (delevents[i]) {
  //         for (var j = 0; j < mut.removedNodes.length; j++) {
  //           if ($(mut.removedNodes[j]).hasClass("ember-view")) {
  //             delevents[i]($(mut.removedNodes[j]));
  //           }
  //         }
  //       }
  //     }
  //   }
  // });
});

function addMessage(name, message, id) {
  working = true;

  if (id) { // Set id if one is given.
    var toid = " id='" + id + "'";
  } else {
    var toid = "";
  }

  $(".chat-lines").append( // Add the message.
    "<div class='ember-view'>" +
    "<li" + toid + " class='ember-view message-line chat-line'>" +
    "<span class='badges float-left'></span>" +
    "<span class='from'>" +
    name +
    "</span>" +
    "<span class='colon'>:</span>" +
    "<span class='message'>" +
    message +
    "</span>" +
    "</li>" +
    "</div>"
  );

  working = false;
}

function replaceMessage(mut, name, message) {
  working = true;

  mut.find(".from").html(name);
  mut.find(".message").html(message);

  working = false;
}

function removeMessage(mut) {
  working = true;
  mut.remove();
  working = false;
}

function addColor(mut, color) {
  working = true;
  mut.find(".from").css("color", color);
  working = false;
}

function addBadge(mut, title, color, image) {
  working = true;
  mut.find(".badges").prepend("<img src='" + image + "' class='badge float-left tooltip' original-title='" + title + "' style='padding: 1px 0; min-width: 16px; height: 16px;'>");
  working = false;
}

function getRanks(mut) {
  // Function body is commented out. Please uncomment and complete as needed.
}

function setRanks(mut, ranks) {
  // Function body is commented out. Please uncomment and complete as needed.
}

function getStreamerName() {
  name = window.location.pathname;
  arr = [];

  for (var i = 0; i < name.length; i++) { // Create array of the path.
    if (name.charAt(i) == "/") {
      arr.push("");
    } else {
      arr[arr.length - 1] += name.charAt(i);
    }
  }

  return arr[0]; // Return the first path item.
}

function onMessageAdd(callback) {
  return addevents.push(callback) - 1;
}

function onMessageRemove(callback) {
  return delevents.push(callback) - 1;
}

function offMessageAdd(num) {
  addevents[num] = false;
}

function offMessageRemove(num) {
  delevents[num] = false;
}

// Assuming you want to fix "PolyExtend" to show "PolyExtended" in your code.
// You can simply replace "PolyExtend" with "PolyExtended" wherever needed.
