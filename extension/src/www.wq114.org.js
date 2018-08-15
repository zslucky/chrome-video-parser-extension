(function () {
  const videoUrl = window.encodeURIComponent(window.location.href)
  const url = `http://www.wq114.org/tong.php?url=${videoUrl}`

  // window.location.href = url
  window.open(url)
})()
