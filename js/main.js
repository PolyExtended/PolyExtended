// Send a message to the extension background script to show an icon
chrome.runtime.sendMessage({ action: "showicon" });

// Initialize options with a default value (if needed)
var options = {};

// Function to update options
function updateOptions() {
  chrome.storage.sync.get("options", function (items) {
    options = items.options || {}; // Use default value if "options" is not set
    // You can now use the updated options variable here or in other parts of your code
  });
}

// Initial update of options
updateOptions();

// Listen for changes in storage and update options accordingly
chrome.storage.onChanged.addListener(function (changes, areaName) {
  if (areaName === "sync" && changes.options) {
    updateOptions();
  }
});
