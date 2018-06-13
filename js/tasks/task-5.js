import checkResult from "./checkTasks.js";
import vocabulary from "./vocabulary.js";

const Sortable = require('sortablejs');

const _ = require("lodash");




export default function task_5() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Connect the English word with the translation into Russian";
  taskField.appendChild(task);

  const form = document.createElement("form");

  


  form.appendChild(sortableWord);


  const button = document.createElement("button");
  button.classList.add("task-field__button");
  button.type = "submit";
  button.textContent = "CHECK";
  form.appendChild(button);
  taskField.appendChild(form);

  document.querySelector(".game-field").appendChild(taskField);


  function getResultWord() {
    let result = "";
    let letters = document.querySelectorAll(".task-field__sortable-word li");
    letters.forEach( i => { result += i.textContent; });
    return result;
  }


  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let result = false;

    let resultWord = getResultWord();

    if (resultWord == word) {
      result = true;
    }
    checkResult(result);
    button.disabled = "disabled";
  });
}
