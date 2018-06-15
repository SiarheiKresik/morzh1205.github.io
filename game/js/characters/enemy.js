
import Sprite from "../sprite.js";

const _ = require('lodash');





const bodyParts = [1, 2, 3];
const frames = _.range(10);

const namePart1 = ["Appalling", "Villain", "Snotty", "Fat", "Huge", "Evil", "Smelly"];
const namePart2 = ["Ogre", "Dwarf", "Goblin", "Hobbit", "Deer"];
const namePart3 = ["Kent", "Vasya", "Piton", "Putin", "Scott", "Victor", "Tom", "Nicolas"];


const enemy = {
  name: `${_.sample(namePart1)} ${_.sample(namePart2)} ${_.sample(namePart3)}`,
  hp: 100,
  pos: [80, 320],
  sprite: {
    rightLeg: new Sprite(`img/bodyParts/right-leg-${_.sample(bodyParts)}.png`, [0, 0], [51, 78]),
    leftLeg: new Sprite(`img/bodyParts/left-leg-${_.sample(bodyParts)}.png`, [0, 0], [54, 80]),
    rightArm: new Sprite(`img/bodyParts/right-arm-${_.sample(bodyParts)}.png`, [0, 0], [213, 148], 16, frames),
    body: new Sprite(`img/bodyParts/body-${_.sample(bodyParts)}.png`, [0, 0], [160, 199]),
    leftArm: new Sprite(`img/bodyParts/left-arm-${_.sample(bodyParts)}.png`, [0, 0], [102, 172], 16, frames),
    head: new Sprite(`img/bodyParts/head-${_.sample(bodyParts)}.png`, [0, 0], [134, 108], 16, frames),
    health: new Sprite("img/health-bar.png", [0, 0], [410, 41])
  },
  renderEnemy(ctx) {
    this.sprite.rightLeg.render(ctx, 229, 512);
    this.sprite.leftLeg.render(ctx, 188, 512);
    this.sprite.rightArm.render(ctx, 254, 366);
    this.sprite.body.render(ctx, 148, 349);
    this.sprite.leftArm.render(ctx, 102, 387);
    this.sprite.head.render(ctx, 172, 328);
    this.sprite.health.render(ctx, 40, 55);
    ctx.fillStyle = "black";
    ctx.fillRect(408, 68, -(324 - enemy.hp *0.01 * 324), 16);


    ctx.fillStyle = "white";
    ctx.font = "italic 30px Arial";
    ctx.fillText(this.name, 85, 45);
    ctx.fillText(this.hp, 450, 85)
  },
  updateEnemy(dt) {
    this.sprite.rightArm.update(dt);
    this.sprite.leftArm.update(dt);
    this.sprite.head.update(dt);
  },
  newEnemy() {
    this.name = `${_.sample(namePart1)} ${_.sample(namePart2)} ${_.sample(namePart3)}`;
    this.hp = 100;
    this.sprite = {
      rightLeg: new Sprite(`img/bodyParts/right-leg-${_.sample(bodyParts)}.png`, [0, 0], [51, 78]),
      leftLeg: new Sprite(`img/bodyParts/left-leg-${_.sample(bodyParts)}.png`, [0, 0], [54, 80]),
      rightArm: new Sprite(`img/bodyParts/right-arm-${_.sample(bodyParts)}.png`, [0, 0], [213, 148], 16, frames),
      body: new Sprite(`img/bodyParts/body-${_.sample(bodyParts)}.png`, [0, 0], [160, 199]),
      leftArm: new Sprite(`img/bodyParts/left-arm-${_.sample(bodyParts)}.png`, [0, 0], [102, 172], 16, frames),
      head: new Sprite(`img/bodyParts/head-${_.sample(bodyParts)}.png`, [0, 0], [134, 108], 16, frames),
      health: new Sprite("img/health-bar.png", [0, 0], [410, 41])
    }
  },
  showDamageValue: {
    y: 500,
    isDamaged: false,
    damage: 0,
    show(ctx) {
      ctx.fillStyle = "#c90000";
      ctx.font = "40px creeper";
      ctx.fillText(`-${this.damage}`, 350, this.y);
      this.y-=2;
    }
  }
}


export default enemy;
