import checkResult from "./checkTasks.js";
import vocabulary from "./vocabulary.js";

const speechSynthesis = require('speech-synthesis');


export default function task_3() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Listen and write word in the field:";
  taskField.appendChild(task);

  const form = document.createElement("form");

  const playButton = document.createElement("button");
  playButton.type = "button";
  playButton.classList.add("task-field__play-button");
  const word = Object.keys(vocabulary)[Math.floor(Math.random()*Object.keys(vocabulary).length)];
  const sayWord = speechSynthesis.bind(null, word, "Google UK English Male");
  playButton.addEventListener("click", sayWord);
  form.appendChild(playButton);


  const input = document.createElement("input");
  input.classList.add("task-field__input");
  input.type = "text";
  input.required = true;
  form.appendChild(input);


  const button = document.createElement("button");
  button.classList.add("task-field__button");
  button.type = "submit";
  button.textContent = "CHECK";
  form.appendChild(button);
  taskField.appendChild(form);

  document.querySelector(".game-field").appendChild(taskField);
  input.focus();


  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let result = false;
    if (input.value.toLowerCase() == word) {
      result = true;
    }
    checkResult(result);
    button.disabled = "disabled";
  });
}
