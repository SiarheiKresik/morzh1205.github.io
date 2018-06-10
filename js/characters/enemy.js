
import Sprite from "../sprite.js";


function getRandomFromArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const bodyParts = [1, 2, 3];
const frames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const namePart1 = ["Appalling", "Malicious", "Snotty", "Fat", "Huge", "Evil", "Smelly"];
const namePart2 = ["Ogre", "Dwarf", "Goblin", "Hobbit", "Deer"];
const namePart3 = ["Kent", "Vasya", "Piton", "Putin", "Scott", "Victor", "Tom", "Nicolas"];


const enemy = {
  name: `${getRandomFromArr(namePart1)} ${getRandomFromArr(namePart2)} ${getRandomFromArr(namePart3)}`,
  hp: 100,
  pos: [80, 320],
  sprite: {
    rightLeg: new Sprite(`img/bodyParts/right-leg-${getRandomFromArr(bodyParts)}.png`, [0, 0], [51, 78]),
    leftLeg: new Sprite(`img/bodyParts/left-leg-${getRandomFromArr(bodyParts)}.png`, [0, 0], [54, 80]),
    rightArm: new Sprite(`img/bodyParts/right-arm-${getRandomFromArr(bodyParts)}.png`, [0, 0], [213, 148], 16, frames),
    body: new Sprite(`img/bodyParts/body-${getRandomFromArr(bodyParts)}.png`, [0, 0], [160, 199]),
    leftArm: new Sprite(`img/bodyParts/left-arm-${getRandomFromArr(bodyParts)}.png`, [0, 0], [102, 172], 16, frames),
    head: new Sprite(`img/bodyParts/head-${getRandomFromArr(bodyParts)}.png`, [0, 0], [134, 108], 16, frames),
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
    this.name = `${getRandomFromArr(namePart1)} ${getRandomFromArr(namePart2)} ${getRandomFromArr(namePart3)}`;
    this.hp = 100;
    this.sprite = {
      rightLeg: new Sprite(`img/bodyParts/right-leg-${getRandomFromArr(bodyParts)}.png`, [0, 0], [51, 78]),
      leftLeg: new Sprite(`img/bodyParts/left-leg-${getRandomFromArr(bodyParts)}.png`, [0, 0], [54, 80]),
      rightArm: new Sprite(`img/bodyParts/right-arm-${getRandomFromArr(bodyParts)}.png`, [0, 0], [213, 148], 16, frames),
      body: new Sprite(`img/bodyParts/body-${getRandomFromArr(bodyParts)}.png`, [0, 0], [160, 199]),
      leftArm: new Sprite(`img/bodyParts/left-arm-${getRandomFromArr(bodyParts)}.png`, [0, 0], [102, 172], 16, frames),
      head: new Sprite(`img/bodyParts/head-${getRandomFromArr(bodyParts)}.png`, [0, 0], [134, 108], 16, frames),
      health: new Sprite("img/health-bar.png", [0, 0], [410, 41])
    }
  }
}


export default enemy;
