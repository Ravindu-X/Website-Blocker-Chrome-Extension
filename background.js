chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url && changeInfo.url.startsWith("https://www.facebook.com")) {
    chrome.tabs.update(tabId, { url: "index.html" });
  }
});
