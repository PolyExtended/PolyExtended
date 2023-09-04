$(document).ready(function() {
  // Initialize options when the popup is opened
  chrome.storage.sync.get("options", function(items) {
    for (var i = 0; i < $(".ch").length; i++) {
      var checkbox = $(".ch:eq(" + i + ")");
      var optionId = checkbox.attr("id");
      
      // Check options that are enabled
      checkbox.prop("checked", items.options[optionId]);
      
      // Update option when it's clicked
      checkbox.click(function() {
        var optionId = $(this).attr("id");
        items.options[optionId] = $(this).prop("checked");
        
        // Save the updated options object
        chrome.storage.sync.set({ options: items.options }, function() {
          console.log("Option '" + optionId + "' updated to " + items.options[optionId]);
        });
      });
    }
  });
});
