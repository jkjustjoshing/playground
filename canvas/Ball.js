export const GRAVITY = 1.5;
export const FRICTION = 0.1;

export class Ball{
  constructor(contextOrObject) {
    this.color = 'blue';
    this.radius = 50;
    this.weight = 0.6;
    this.bounce = 0.8;
    this.y = 0;
    this.x = 0;
    this.vx = 0;
    this.vy = 0;

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

    var minimumJostle = 3;

    if(this.vy > minimumJostle) {
      this.vy -= FRICTION;
    } else if(this.vy < -1 * minimumJostle) {
      this.vy += FRICTION;
    }
    if(this.vx > minimumJostle) {
      this.vx -= FRICTION;
    } else if(this.vx < -1 * minimumJostle) {
      this.vx += FRICTION;
    }

    this.y += this.vy;
    this.x += this.vx;

    if(this.y > canvas.height - this.radius) {
      this.vy = (this.vy * -1 * this.bounce);
      this.y = canvas.height - this.radius
    }
    if(this.y < this.radius) {
      this.vy = (this.vy * -1 * this.bounce);
      this.y = this.radius
    }

    if(this.x > canvas.width - this.radius) {
      this.vx = (this.vx * -1 * this.bounce);
      this.x = canvas.width - this.radius
    }
  if(this.x < this.radius) {
      this.vx = (this.vx * -1 * this.bounce);
      this.x = this.radius
    }

  }
}