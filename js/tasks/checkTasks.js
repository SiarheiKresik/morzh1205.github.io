import spellbook from "../spellbook.js";
import enemy from "../characters/enemy.js";
import player from "../characters/hero.js";
import Sound from "../sound.js";




const successSound = new Sound("audio/correct.mp3", "no-loop", 0.5);
const wrongSound = new Sound("audio/wrong.mp3", "no-loop", 0.4);


function causeDamageToEnemy() {
  document.querySelector(".task-field").remove();
  if (player.score < 5) {
    enemy.hp -= 100;
    enemy.showDamageValue.damage = 100;
  } else if (player.score >= 5 && player.score < 10) {
    enemy.hp -= 50;
    enemy.showDamageValue.damage = 50;
  } else if (player.score >= 10) {
    enemy.hp -= 34;
    enemy.showDamageValue.damage = 34;
  }

  enemy.showDamageValue.isDamaged = true;
  enemy.showDamageValue.y = 500;

  if (enemy.hp <= 0) {
    enemy.hp = 0;
    player.score += 1;
    setTimeout(function() {
      enemy.newEnemy();
    }, 2000);
  }
}

function causeDamageToPlayer() {
  document.querySelector(".task-field").remove();
  spellbook.spellPosition[0] += 730;

  player.hp -= 34;
  player.showDamageValue.isDamaged = true;
  player.showDamageValue.damage = 34;
  player.showDamageValue.y = 500;

  if (player.hp <= 0) {
    player.hp = 0;
    setTimeout(function () {
      player.isGameOver = true;
    }, 2000);
  }
}


function showSuccessfullNotice() {
  const elem = document.createElement("div");
  elem.classList.add("task-field__notice");
  document.querySelector(".task-field").appendChild(elem);
  successSound.play();
}

function showWrongNotice() {
  const elem = document.createElement("div");
  elem.classList.add("task-field__notice", "wrong");
  document.querySelector(".task-field").appendChild(elem);
  wrongSound.play();
}


function nextTask() {
  spellbook.show = true;
  player.showDamageValue.isDamaged = false;
  enemy.showDamageValue.isDamaged = false;
}


function showSpell() {
  spellbook.showSpell = true;
  spellbook.currentSpellAudio.play();
  setTimeout(nextTask, 3000);
}


export default function checkResult(result) {
  if (result) {
    showSuccessfullNotice();
    setTimeout(causeDamageToEnemy, 2000);
  } else {
    showWrongNotice();
    setTimeout(causeDamageToPlayer, 2000);
  }
  setTimeout(showSpell, 2000);
}
