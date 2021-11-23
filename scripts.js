var iii = 0

function criarParagrafo() {
  let para = document.createElement('p')
  para.textContent = 'You clicked on the button!'
  iii = iii + 1
  para.id = iii.toString()
  document.body.appendChild(para)
}

function remParagrafo() {
  if (iii > 0) {
    let para = document.getElementById(iii.toString()).remove()
    iii = iii - 1
  }
}

const botoegen = document.getElementById('botoegen')
const botoerem = document.getElementById('botoerem')

botoegen.addEventListener('click', criarParagrafo)
botoerem.addEventListener('click', remParagrafo)
