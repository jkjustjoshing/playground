export const GRAVITY = 0.6;
export class Ball{
  constructor(contextOrObject) {
    this.radius = 50;
    this.weight = 0.6;
    this.bounce = 0.8;
    this.y = canvas.height - (this.radius);
    this.x = canvas.width / 2;
    this.vx = 0;
    this.vy = -20;

    if(contextOrObject instanceof CanvasRenderingContext2D) {
      this.context = contextOrObject;
    } else {
      for(let key in contextOrObject) {
        if(contextOrObject.hasOwnProperty(key)) {
          this[key] = contextOrObject[key];
        }
      }
    }

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
    this.vy += (this.weight * GRAVITY)
    this.y += this.vy;

    if(this.y > canvas.height - this.radius) {
      this.vy = (this.vy * -1 * this.bounce);
      this.y = canvas.height - this.radius
    }


  }
}