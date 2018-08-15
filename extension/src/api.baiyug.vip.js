(function () {
  const videoUrl = window.encodeURIComponent(window.location.href)
  const url = `http://api.baiyug.vip/?url=${videoUrl}`

  // window.location.href = url
  window.open(url)
})()
