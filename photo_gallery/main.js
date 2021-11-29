const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

/* Looping through images */
for (i = 0; i < 5; i++) {
  imgName = 'images/pic' + (i + 1) + '.jpg'
  var newImage = document.createElement('img')
  newImage.setAttribute('src', imgName)
  thumbBar.appendChild(newImage)

  newImage.addEventListener('click', changeImage)
}

function changeImage(event) {
  displayedImage.src = event.target.src
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changeShade)

function changeShade() {
  if (btn.textContent === 'Darken') {
    overlay.style.backgroundColor = 'rgba(0,0,0,.4)'
    btn.textContent = 'Lighten'
    btn.style.color = 'white'
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    btn.textContent = 'Darken'
    btn.style.color = 'black'
  }
}
