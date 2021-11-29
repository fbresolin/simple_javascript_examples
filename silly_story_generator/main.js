var randomTextHTML = document.getElementById('randomText')
var button = document.querySelector('button')

var temperatures = ['94 fahrenheit', '34 centigrade']
var characters = ['Willy the Goblin', 'Father Christmas']
var places = ['White House', 'Disneyland']
var whatHappened = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk'
]
var weights = ['weighs 300 pounds', 'weighs 21 stone']

button.addEventListener('click', selectText)

function selectText() {
  var nameInput = document.getElementById('customName')
  var language = document.querySelector('input[name="language"]:checked')
  if (language.id == 'us') {
    var strIdx = 0
  } else if (language.id == 'uk') {
    var strIdx = 1
  }

  randomTextHTML.textContent = `It was ${temperatures[strIdx]} outside, so ${characters[strIdx]} went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then ${whatHappened[strIdx]}. ${nameInput.value} saw the whole thing, but was not surprised — ${characters[strIdx]} weighs ${weights[strIdx]}, and it was a hot day.`
}
