class Core {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }
  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image,0,0);
    };
    image.src= "../assets/part6/TheWell.png";

    const hero = new GameObject({
      x: 5,
      y: 6,
    });
    const tea = new GameObject({
      x: 6,
      y: 7,
      src: "../assets/part6/kanades.png",
    });
    
    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      tea.sprite.draw(this.ctx);
    },200)
  }
}
