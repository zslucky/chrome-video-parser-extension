(function () {
  const videoUrl = window.encodeURIComponent(window.location.href)
  const url = `http://jx.618g.com/?url=${videoUrl}`

  // window.location.href = url
  window.open(url)
})()
