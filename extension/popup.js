/**
 * Popup.js
 *
 * @author: zslucky
 */
const TIME_OUT = 2000
const viplist = 'https://iodefog.github.io/text/viplist.json'
// const backupViplist = ''
const list = document.getElementById('list')

const getStoredVipList = () =>
  new Promise((resolve, reject) => {
    chrome.storage.local.get(['viplist'], result => resolve(result.viplist))
  })

const timeoutPromise = timeout =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      getStoredVipList()
        .then(data => resolve(data))
    }, timeout)
  })

const fetchNewListPromise = () =>
  fetch(viplist)
    .then(resp => resp.json())
    .then((data) => {
      chrome.storage.local.set({ viplist: data })
      return data
    })

const selectLine = url =>
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    console.log('tabs = ', tabs)
    console.log('chrome.tabs = ', chrome.tabs)
    chrome.tabs.executeScript({
      code: [
        'const videoUrl = window.encodeURIComponent(window.location.href)',
        'const url = `' + url + '${videoUrl}`',
        'location.href = url'
      ].join(';')
    })
  })

const listEventProxy = event => selectLine(event.target.dataset.url)

list.addEventListener('click', listEventProxy)

getStoredVipList()
  .then((data) => {
    let resultPromise
    if (!data) {
      resultPromise = fetchNewListPromise()
    } else {
      resultPromise = Promise.race([timeoutPromise(TIME_OUT), fetchNewListPromise()])
    }

    resultPromise
      .then((data) => {
        list.innerHTML = (data.list || [])
          .map(line => `<li data-url="${line.url}">${line.name}</li>`).join('')
      })
      .catch((err) => {
        list.innerHTML = 'Ops!好像出错了!'
      })
  })


