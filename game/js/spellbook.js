
import Sprite from "./sprite.js";
import Sound from "./sound.js";
import tasks from "./tasks/tasks.js";

const _ = require("lodash");



function selectSpell(evt) {
  if (evt.offsetX >= 460 && evt.offsetX <= 541 && evt.offsetY >= 284 && evt.offsetY <= 365) {
    spellbook.currentSpell = new Sprite("img/spell-1.png", [0, 0], [256, 256], 16, _.range(19), "horizontal", true);
    spellbook.spellPosition = [110, 330];
    spellbook.currentSpellAudio = new Sound("audio/spell-1.mp3", "no-loop", 0.4);
    spellbook.show = false;
    tasks[_.sample(_.keys(tasks))]();
  }
  if (evt.offsetX >= 560 && evt.offsetX <= 641 && evt.offsetY >= 284 && evt.offsetY <= 365) {
    spellbook.currentSpell = new Sprite("img/spell-2.png", [0, 0], [380, 380], 16, _.range(19), "horizontal", true);
    spellbook.spellPosition = [80, 170];
    spellbook.currentSpellAudio = new Sound("audio/spell-2.mp3", "no-loop", 0.4);
    spellbook.show = false;
    tasks[_.sample(_.keys(tasks))]();
  }
  if (evt.offsetX >= 660 && evt.offsetX <= 741 && evt.offsetY >= 284 && evt.offsetY <= 365) {
    spellbook.currentSpell = new Sprite("img/spell-3.png", [0, 0], [380, 380], 12, _.range(17), "horizontal", true);
    spellbook.spellPosition = [70, 190];
    spellbook.currentSpellAudio = new Sound("audio/spell-3.mp3", "no-loop", 0.4);
    spellbook.show = false;
    tasks[_.sample(_.keys(tasks))]();
  }
  this.onclick = null;
}



const spellbook = {
  show: false,
  showSpell: false,
  book: new Sprite("img/spellbook.png", [0, 0], [350, 350]),
  spellIcons: {
    "spell-1": new Sprite("img/spell-icons.png", [0, 0], [81, 81]),
    "spell-2": new Sprite("img/spell-icons.png", [81, 0], [81, 81]),
    "spell-3": new Sprite("img/spell-icons.png", [162, 0], [81, 81])
  },
  currentSpell: false,
  currentSpellAudio: false,
  spellPosition: [0, 0],
  showSpellbook(ctx, canvas) {
    this.showSpell = false;
    this.book.render(ctx, 425, 150);
    this.spellIcons["spell-1"].render(ctx, 460, 284);
    this.spellIcons["spell-2"].render(ctx, 560, 284);
    this.spellIcons["spell-3"].render(ctx, 660, 284);

    ctx.fillStyle = "white";
    ctx.font = "italic 30px Arial";
    ctx.fillText("Choose a spell", 500, 270);

    canvas.onclick = selectSpell;
  },
  renderSpell(ctx) {
    this.currentSpell.render(ctx, this.spellPosition[0], this.spellPosition[1]);
  },
  updateSpell(dt) {
    this.currentSpell.update(dt);
  }
}


export default spellbook;
