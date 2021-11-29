document.getElementById('guesses').textContent = 'Tried guesses: '
var secret_letter = String.fromCharCode(97 + Math.round(25 * Math.random()))
var counter = 0

guess = document.getElementById('input_guess')
submit = document.getElementById('submit_guess')
placeholder = document.getElementById('placeholder')
submit.addEventListener('click', evaluate_guess)

function evaluate_guess() {
  counter++
  if (guess.value.length > 1 || isFinite(guess.value)) {
    placeholder.textContent = 'What have you even tried now???'
    placeholder.style.backgroundColor = 'violet'
  } else if (guess.value === secret_letter) {
    placeholder.textContent =
      'Congratulations!!!!! You have find the secret letter!'
    placeholder.style.backgroundColor = 'green'
    endGame()
  } else if (counter == 10) {
    endGame()
  } else if (guess.value < secret_letter) {
    placeholder.textContent = 'Your guess is below the secret letter!'
    placeholder.style.backgroundColor = 'red'
  } else if (guess.value > secret_letter) {
    placeholder.textContent = 'Your guess is above the secret letter!'
    placeholder.style.backgroundColor = 'red'
  }
  show_guesses(guess)
}

function show_guesses(guess) {
  document.getElementById('guesses').textContent =
    document.getElementById('guesses').textContent + ' ' + guess.value
}

function endGame() {
  guess.disabled = true
  submit.disabled = true
  restartButton = document.createElement('button')
  restartButton.textContent = 'Restart game'
  document.body.appendChild(restartButton)
  restartButton.addEventListener('click', restartGame)
}

function restartGame() {
  secret_letter = String.fromCharCode(97 + Math.round(25 * Math.random()))
  counter = 0

  placeholder.textContent = ''
  document.body.removeChild(restartButton)
  guess.disabled = false
  submit.disabled = false
  document.getElementById('guesses').textContent = 'Tried guesses: '
}
