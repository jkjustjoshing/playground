export class Mouse {

  constructor(element) {

    this.position = {x: 0, y: 0};

    var offset = {
      x: element.offsetLeft,
      y: element.offsetTop
    };

    element.addEventListener('mousemove', event => {
      this.position.x = event.x - offset.x + window.scrollX;
      this.position.y = event.y - offset.y + window.scrollY;
    });
  }

  getPosition() {
    return this.position;
  }
}