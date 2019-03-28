class Enemy {
  constructor(x,y,speed,side,color) {
    this.x = x
    this.y = y
    this.speed = speed
    this.side = side
    this.color = color
  }
  update() {
    this.x += this.speed
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.side, this.side)
  }
}