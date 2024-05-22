const container = document.querySelector('#container')
const emberek = ['Kata', 'Sára', 'Peti', 'Sanyi']
for (const ember of emberek) {
  const div = document.createElement('div')
  div.innerText = ember
  container.appendChild(div)
  console.log(ember)
}
