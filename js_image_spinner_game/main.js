const btn = document.querySelector('button')
const spinner = document.querySelector('.spinner p')
const spinnerContainer = document.querySelector('.spinner')
const result = document.querySelector('.result')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')

let rotateCount = 0
let startTime = null
let rAF
let gameEvent

result.style.display = 'none'
result.textContent = ''

btn.addEventListener('click', setupGame)

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp
  }
  rotateCount = (timestamp - startTime) / 3
  rotateCount %= 360
  spinner.style.transform = `rotate(${rotateCount}deg)`

  rAF = requestAnimationFrame(draw)
}

function setupGame() {
  spinner.textContent = '↻'
  draw()
  setTimeout(function () {
    cancelAnimationFrame(rAF)
    btn.style.display = 'none'
    spinner.textContent = ''
    result.style.display = 'inline'
    result.textContent = 'PLAYERS GO!'
    initiateGame()
  }, 5000 * (1 + Math.random())) //timer de 5 a 10 segundos
}

function initiateGame() {
  document.addEventListener('keypress', gamePerSe)
}

function gamePerSe(event) {
  if (event.key === 'a') {
    result.style.color = 'yellow'
    result.textContent = 'Player 1 won'
  } else if (event.key === 'k') {
    result.style.color = 'cyan'
    result.textContent = 'Player 2 won'
  }
  document.removeEventListener('keypress', gamePerSe)
  setTimeout(resetGame, 5000)
}

function resetGame() {
  result.style.color = 'black'
  result.style.display = 'none'
  result.textContent = ''
  btn.style.display = 'inline'
}
