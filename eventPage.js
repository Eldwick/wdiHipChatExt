chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.getSelected(null,function(tab) {
    var params = {
      room_id: 846262, // Found in the JSON response from the call above
      from: 'From Chrome',
      message: '<a href="'+ tab.url  + '">' + tab.title + '</a>'
    };

    $.post( "https://www.hipchat.com/v1/rooms/message?format=json&auth_token=4e9f38bc09830a798a3e091c13fa20", params);
  });
});


