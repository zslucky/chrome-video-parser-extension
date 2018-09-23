/**
 * Declare active hosts
 */
const activeHosts = [
  { hostEquals: 'www.iqiyi.com', schemes: [ 'http', 'https' ] },
  { hostEquals: 'v.qq.com', schemes: [ 'http', 'https' ] },
]

/**
 * Declare page matcher conditions
 */
const pageStateMatcherConditions = activeHosts.map(
  pageUrl => new chrome.declarativeContent.PageStateMatcher({ pageUrl })
)

/**
 * Declare the on installed listener
 */
chrome.runtime.onInstalled.addListener(function() {

  /**
   * Declare the on onPageChanged
   */
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: pageStateMatcherConditions,
        actions: [
          new chrome.declarativeContent.ShowPageAction()
        ]
      }
    ]);
  });
});