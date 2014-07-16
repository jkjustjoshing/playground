export class Ball{
  constructor(context) {
    this.context = context;
    this.radius = 50;
    this.gravity = 0.6;
    this.bounce = -0.8;
    this.y = canvas.height - (this.radius);
    this.x = canvas.width / 2;
    this.vx = 0;
    this.vy = -20;
  }

  draw() {
    this.context.save();
    this.context.fillStyle = 'blue';
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    this.context.closePath();
    this.context.fill();
    this.context.restore();
  }

  tick() {
    this.vy += this.gravity
    this.y += this.vy;

    if(this.y > canvas.height - this.radius) {
      this.vy = (this.vy * this.bounce);
      this.y = canvas.height - this.radius
    }


  }
}