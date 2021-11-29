const spinner = document.querySelector('div')

let startTime = null
let rAF
let image = new Image()

image.src = 'image/aa.png'
spinner.append(image)

spinner.addEventListener('click', decide)

function decide() {
  if (startTime === null) {
    draw()
  } else {
    cancelDraw()
  }
}

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp
  }
  rotateCount = (timestamp - startTime) / 5
  rotateCount %= 360
  spinner.style.transform = `rotate(${rotateCount}deg)`

  rAF = requestAnimationFrame(draw)
}

function cancelDraw() {
  startTime = null
  cancelAnimationFrame(rAF)
}
// to cancel animation
