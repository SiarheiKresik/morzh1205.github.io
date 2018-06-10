
import Sprite from "../sprite.js";


const player = {
  name: "",
  hp: 100,
  score: 0,
  isGameOver: false,
  pos: [850, 390],
  sprite: new Sprite("img/hero-1.png", [0, 0], [233, 214], 16 , [0, 1, 2, 3, 4, 5, 6]),
  health: new Sprite("img/health-bar.png", [0, 0], [410, 41]),
  renderHero(ctx) {
    this.sprite.render(ctx, this.pos[0], this.pos[1]);
    player.health.render(ctx, 750, 55);
    ctx.fillStyle = "black";
    ctx.fillRect(1118, 68, -(324 - player.hp *0.01 * 324), 16);


    ctx.fillStyle = "white";
    ctx.font = "italic 30px Arial";
    ctx.fillText(this.name, 800, 45);
    ctx.fillText(this.hp, 695, 85);
    ctx.fillText(`Score: ${this.score}`, 1000, 630);
  },
  updateHero(dt) {
    this.sprite.update(dt);
  }
}


export default player;
