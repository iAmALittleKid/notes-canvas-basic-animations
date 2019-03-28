class Player {
  constructor(initialX, initialY, color, keys) {
    this.x = initialX
    this.y = initialY
    this.speed = 2
    this.side = 50
    this.color = color
    this.direction = undefined
  }
  update() {
    switch(this.direction) {
      case 'up':
        this.y -= this.speed
        break
      case 'down':
        this.y += this.speed
        break
      case 'right':
        this.x += this.speed
        break
      case 'left':
        this.x -= this.speed
        break
    }
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.side, this.side)
  }
}
