const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let player1 = new Player(0,0,'red', ['w','a','s','d'])
let enemies = [
  new Enemy(30,100,1,10,'black'),
  new Enemy(30,200,1,10,'black'),
]



function animation() {
  drawEverything()
  updateEverything()
  window.requestAnimationFrame(animation)
}
animation()

function drawEverything() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  player1.draw(ctx)
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw(ctx)
  }
}

function updateEverything() {
  player1.update()
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update()
  }
}