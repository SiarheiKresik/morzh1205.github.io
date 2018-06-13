
import resources from "./resources.js";
import Sound from "./sound.js";
import enemy from "./characters/enemy.js";
import player from "./characters/hero.js";
import spellbook from "./spellbook.js";




const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 650;


const requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();


let terrainPattern;
let lastTime = 0;
function main() {
  if (!player.isGameOver) {
    let now = Date.now();
    let dt = (now - lastTime) / 1000.0;

    lastTime = now;

    update(dt);

    render(ctx);
    requestAnimFrame(main);

  } else {
    setTimeout(showResult, 2000);
  }

}


function init() {
    terrainPattern = ctx.createPattern(resources.get('img/back.jpg'), 'no-repeat');
    ctx.fillStyle = terrainPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    renderMenu();
    fillNameFromLocalStorage();

    if (document.querySelector(".preloader")) {
      document.querySelector(".preloader").remove();
    }

    document.querySelector("form").addEventListener("submit", function(evt) {
      evt.preventDefault();
      if (backgroundSound.state != "play") {
        backgroundSound.play();
      }
      startGame();
    });
}


function startGame() {
  player.sprite.url = `img/hero-${document.querySelector(".active").dataset.index}.png`;
  player.name = document.querySelector(".menu__input").value;
  localStorage.setItem("gamePlayerName", JSON.stringify(player.name));
  document.querySelector(".menu").remove();

  setTimeout(function() {
    spellbook.show = true;
  }, 2000);

  main();
}


const backgroundSound = new Sound("audio/background.mp3", "loop", 0.2);
resources.load([
    "img/back.jpg",
    "img/bodyParts/right-leg-1.png",
    "img/bodyParts/right-leg-2.png",
    "img/bodyParts/right-leg-3.png",
    "img/bodyParts/left-leg-1.png",
    "img/bodyParts/left-leg-2.png",
    "img/bodyParts/left-leg-3.png",
    "img/bodyParts/body-1.png",
    "img/bodyParts/body-2.png",
    "img/bodyParts/body-3.png",
    "img/bodyParts/right-arm-1.png",
    "img/bodyParts/right-arm-2.png",
    "img/bodyParts/right-arm-3.png",
    "img/bodyParts/left-arm-1.png",
    "img/bodyParts/left-arm-2.png",
    "img/bodyParts/left-arm-3.png",
    "img/bodyParts/head-1.png",
    "img/bodyParts/head-2.png",
    "img/bodyParts/head-3.png",
    "img/hero-1.png",
    "img/hero-2.png",
    "img/health-bar.png",
    "img/spellbook.png",
    "img/spell-icons.png",
    "img/spell-1.png",
    "img/spell-2.png",
    "img/spell-3.png",
    "img/character-1.png",
    "img/character-2.png",
    "img/play-circle.svg",
    "img/times-circle.svg",
    "img/check-circle.svg"
]);
resources.onReady(init);


function update(dt) {
  enemy.updateEnemy(dt);
  player.updateHero(dt);

  if (spellbook.showSpell) {
    spellbook.updateSpell(dt);
  }
}

function render(ctx) {
  ctx.fillStyle = terrainPattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  enemy.renderEnemy(ctx);
  player.renderHero(ctx);

  if (spellbook.show) {
    spellbook.showSpellbook(ctx, canvas);
  }
  if (spellbook.showSpell) {
    spellbook.renderSpell(ctx);
    if (enemy.showDamageValue.isDamaged) {
      enemy.showDamageValue.show(ctx);
    }
    if (player.showDamageValue.isDamaged) {
      player.showDamageValue.show(ctx);
    }
  }
}


function reset() {
  player.isGameOver = false;
  player.hp = 100;
  enemy.hp = 100;
  player.score = 0;
  spellbook.show = false;

  init();
}


function renderMenu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");

  const label = document.createElement("label");
  label.classList.add("menu__label");
  label.textContent = "Enter your name";



  const form = document.createElement("form");
  form.method = "post";
  const input = document.createElement("input");
  input.type = "text";
  input.autofocus = true;
  input.classList.add("menu__input");
  input.required = true;
  form.appendChild(input);


  const p = document.createElement("p");
  p.textContent = "Choose your character";
  form.appendChild(p);


  const charactersList = document.createElement("ul");
  charactersList.classList.add("menu__characters-list");
  for (let i = 1; i < 3; i++) {
    let charactersItem = document.createElement("li");
    charactersItem.dataset.index = i;
    if(i == 1) {charactersItem.classList.add("active")}
    charactersList.appendChild(charactersItem);
  }
  charactersList.addEventListener("click", function(evt) {
    if (evt.target != this) {
      const charactersItems = document.querySelectorAll(".menu__characters-list li");
      for (let i = 0; i < charactersItems.length; i++) {
        charactersItems[i].classList.remove("active");
      }
      evt.target.classList.add("active");
    }
  });


  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("button");
  button.textContent = "PLAY";

  menu.appendChild(label);
  form.appendChild(charactersList);
  form.appendChild(button);
  menu.appendChild(form);
  document.querySelector(".game-field").appendChild(menu);
}

function fillNameFromLocalStorage() {
  if (localStorage.gamePlayerName) {
    const retObj = JSON.parse(localStorage.getItem("gamePlayerName"));
    document.querySelector(".menu__input").value = retObj;
  }
}

function showResult() {
  const results = document.createElement("section");
  results.classList.add("results");

  const p = document.createElement("p");
  p.classList.add("results__heading");
  p.innerHTML = `Game over<br>Your result is ${player.score} monster(s)`;
  results.appendChild(p);

  if (!localStorage.gameRecordsTable) {
  	const records = [];
  	localStorage.setItem("gameRecordsTable", JSON.stringify(records));
  }


  let retObj = JSON.parse(localStorage.getItem("gameRecordsTable"));
  let resultItem = [player.name, player.score];
  retObj.push(resultItem);
  retObj.sort(function(a, b) {
    return b[1] - a[1];
	});
  if (retObj.length > 10) {
		retObj = retObj.slice(0, 10);
	}
  const ol = document.createElement("ol");
	ol.classList.add("records__recordsList");
	for (let i = 0; i < retObj.length; i++) {
		const li = document.createElement("li");
		li.innerHTML = `${retObj[i][0]} : ${retObj[i][1]} monster(s).`;
		ol.appendChild(li);
	}
  results.appendChild(ol);

  localStorage.setItem("gameRecordsTable", JSON.stringify(retObj));

  const button = document.createElement("button");
  button.classList.add("results__button");
  button.classList.add("button");
  button.textContent = "New game";
  button.addEventListener("click", function () {
    results.remove();
    reset();
  });

  results.appendChild(button);

  document.querySelector(".game-field").appendChild(results);
}


// document.onreadystatechange = function () {
//     if (document.readyState === "complete") {
//       init();
//     }
// }
