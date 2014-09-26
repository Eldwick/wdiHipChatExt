// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                alert('data'))
}());

