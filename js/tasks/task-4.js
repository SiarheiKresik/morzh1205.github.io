import checkResult from "./checkTasks.js";
import vocabulary from "./vocabulary.js";


const Sortable = require('sortablejs');



export default function task_4() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Generate a word from these letters:";
  taskField.appendChild(task);

  const form = document.createElement("form");

  const sortableWord = document.createElement("ul");
  sortableWord.classList.add("task-field__sortable-word");
  const word = Object.keys(vocabulary)[Math.floor(Math.random()*Object.keys(vocabulary).length)];
  const splittedWord = word.split("").sort((a, b) => { return Math.random() - 0.5; });

  splittedWord.forEach( i => {
    const li = document.createElement("li");
    li.textContent = i;
    sortableWord.appendChild(li);
  });

  const sortable = Sortable.create(sortableWord);


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
