import checkResult from "./checkTasks.js";
import vocabulary from "./vocabulary.js";


export default function task_2() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Translate into Russian:";
  taskField.appendChild(task);

  const form = document.createElement("form");

  const label = document.createElement("label");
  label.classList.add("task-field__label");
  const word = Object.keys(vocabulary)[Math.floor(Math.random()*Object.keys(vocabulary).length)];
  label.textContent = word;
  form.appendChild(label);

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
    if (vocabulary[word].indexOf(input.value.toLowerCase()) != -1) {
      result = true;
    }
    checkResult(result);
    button.disabled = "disabled";
  });
}
