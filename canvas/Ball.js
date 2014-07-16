export const GRAVITY = 0.6;
export class Ball{
  constructor(contextOrObject) {
    this.color = 'blue';
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

    this.gravity = {
      x: this.x,
      y: canvas.height
    }

  }

  setGravityPoint(pos) {
    this.gravity = pos;
    this.context.beginPath()
    this.context.arc(pos.x,pos.y,5,0,Math.PI*2, false)
    this.context.closePath()
    this.context.fill()
  }

  draw() {
    this.context.save();
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    this.context.closePath();
    this.context.fill();
    this.context.restore();
  }

  tick() {
    var force = this.weight * GRAVITY;
    var delta = {
      x: this.gravity.x - this.x,
      y: this.gravity.y - this.y
    };

    var scale = Math.sqrt(delta.x*delta.x + delta.y*delta.y);

    var forceComponents = {
      x: force * delta.x / scale,
      y: force * delta.y / scale
    };
    this.vy += forceComponents.y;
    this.vx += forceComponents.x;
    this.y += this.vy;
    this.x += this.vx;

    if(this.y > canvas.height - this.radius) {
      this.vy = (this.vy * -1 * this.bounce);
      this.y = canvas.height - this.radius
    }


  }
}