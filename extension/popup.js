// https://iodefog.github.io/text/viplist.json
const myProjectLink = document.getElementById('myProject');

const wq114 = document.getElementById('wq114');
const jx618g = document.getElementById('jx618g');
const baiyug = document.getElementById('baiyug');

myProjectLink.onclick = (element) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript({ file: 'src/projectLink.js' })
  });
}

wq114.onclick = (element) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript({ file: 'src/www.wq114.org.js' })
  });
}

jx618g.onclick = (element) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript({ file: 'src/jx.618g.com.js' })
  });
}

baiyug.onclick = (element) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript({ file: 'src/api.baiyug.vip.js' })
  });
}
