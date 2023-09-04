// Default options object with your specified settings
var defaultOptions = {
  polyemotes: true,
  twitchemotes: true,
  legacyemotes: false,
  linkimages: true,
  realthumbs: false,
  devatars: true,
  colornames: false,
  colornamesover: false,
  chatalerts: true,
  teams: true,
  teamsnamesover: false,
  beamlink: true,
  beamlinkcolor: true,
  beamlinknamesover: false,
  // showdeleted: false,
  separator: false,
  // darkheader: false
};

// Check if options are already set in storage, and initialize with defaults if needed
chrome.storage.sync.get("options", function (items) {
  if (!items.options || Object.keys(items.options).length !== Object.keys(defaultOptions).length) {
    chrome.storage.sync.set({ options: defaultOptions }, function () {
      console.log("Options initialized or updated with defaults");
    });
  }
});

// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === "showicon") {
    chrome.pageAction.show(sender.tab.id);
  }
});

