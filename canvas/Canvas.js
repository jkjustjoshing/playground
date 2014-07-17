export class Canvas{

  constructor(ele) {
    this.ele = ele;
    this.context = this.ele.getContext('2d');


    this.ele.width = this.ele.clientWidth;
    this.ele.height = this.ele.clientHeight;
    this.originalWidth = this.ele.width;
    this.originalHeight = this.ele.height;

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
      this.ele.width = this.ele.clientWidth;
      this.ele.height = this.ele.clientHeight;
    });

  }

  get2dContext() {
    return this.context;
  }

  clear() {
    if(!this.context) {
      this.get2dContext();
    }
    this.context.clearRect(0, 0, this.ele.width, this.ele.height);
  }
}